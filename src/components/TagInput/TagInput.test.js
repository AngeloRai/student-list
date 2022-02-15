import React from "react";
import { shallow, mount } from "enzyme";
import TagInput from "./TagInput";
import toJson from "enzyme-to-json";

describe("tests tag input component", () => {
  let wrapper;
  const setState = jest.fn();
  const mockPlaceholder = "Add a tag";
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = mount(
      shallow(
        <TagInput placeholder={mockPlaceholder} setTagName={setState} />
      ).get(0)
    );
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("accepts props", () => {
    const wrapper = mount(
      <TagInput placeholder={mockPlaceholder} setTagName={setState} />
    );
    expect(wrapper.props().placeholder).toBe(mockPlaceholder);
    expect(wrapper.props().setTagName).toBe(setState);
  });

  it("Should capture tag input correctly onChange", () => {
    const tagNmae = wrapper.find("input").at(0);
    tagNmae.instance().value = "Test";
    tagNmae.simulate("change");
    expect(setState).toHaveBeenCalledWith("Test");
  });
});
