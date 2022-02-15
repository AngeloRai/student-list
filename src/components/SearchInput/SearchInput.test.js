import React from "react";
import { shallow, mount } from "enzyme";
import SearchInput from "./SearchInput";
import toJson from "enzyme-to-json";

describe("tests search input component", () => {
  let wrapper;
  const setState = jest.fn();
  const mockPlaceholder = "John";
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = mount(
      shallow(
        <SearchInput placeholder={mockPlaceholder} setSearchWord={setState} />
      ).get(0)
    );
  });

  it("renders without crashing", () => {
    shallow(<SearchInput />);
  });

  it("checks for changes in the code", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("accepts props", () => {
    const mockPlaceholder = "John";
    const mockHandleChange = jest.fn();
    const wrapper = mount(
      <SearchInput
        placeholder={mockPlaceholder}
        handleChange={mockHandleChange}
      />
    );
    expect(wrapper.props().placeholder).toBe(mockPlaceholder);
    expect(wrapper.props().handleChange).toBe(mockHandleChange);
  });

  it("Should capture search word correctly correctly onChange", () => {
    const searchWord = wrapper.find("input").at(0);
    searchWord.instance().value = "Test";
    searchWord.simulate("change");
    expect(setState).toHaveBeenCalledWith("Test");
  });
});
