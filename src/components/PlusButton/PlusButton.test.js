import React from "react";
import { shallow, mount } from "enzyme";
import PlusButton from "./PlusButton";
import toJson from "enzyme-to-json";

describe("tests button component", () => {
  it("renders without crashing", () => {
    shallow(<PlusButton />);
  });

  it("checks for changes in the code", () => {
    const wrapper = shallow(<PlusButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("accepts props", () => {
    const mockSetIsCollapsed = jest.fn();
    const wrapper = mount(<PlusButton setIsCollapsed={mockSetIsCollapsed} />);
    expect(wrapper.props().setIsCollapsed).toEqual(mockSetIsCollapsed);
  });

  it("tests if function invokes when it's clicked", async () => {
    const mockSetIsCollapsed = jest.fn();
    const wrapper = mount(<PlusButton setIsCollapsed={mockSetIsCollapsed} />);
    wrapper.find("button").simulate("click");
    expect(mockSetIsCollapsed).toHaveBeenCalled();
  });
});
