import React from "react";
import { shallow, mount } from "enzyme";
import MinusButton from "./MinusButton";
import toJson from "enzyme-to-json";

describe("tests button component", () => {
    it("renders without crashing", () => {
    shallow(<MinusButton />);
  });

  it("checks for changes in the code", () => {
    const wrapper = shallow(<MinusButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("accepts props", () => {
    const mockSetIsCollapsed = jest.fn();
    const wrapper = mount(<MinusButton setIsCollapsed={mockSetIsCollapsed} />);
    expect(wrapper.props().setIsCollapsed).toEqual(mockSetIsCollapsed);
  });

  it("tests if function invokes when it's clicked", async () => {
    const mockSetIsCollapsed = jest.fn()
    const wrapper = mount(<MinusButton setIsCollapsed={mockSetIsCollapsed} />);
    wrapper.find("button").simulate("click");
    expect(mockSetIsCollapsed).toHaveBeenCalled();
  });
  
});
