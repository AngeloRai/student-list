import React from "react";
import { shallow, mount } from "enzyme";
import StudentNameLg from "./StudentNameLg";
import toJson from "enzyme-to-json";

describe("tests student name component", () => {
  const mockName = "John";

  it("renders without crashing", () => {
    const wrapper = shallow(<StudentNameLg name={mockName} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("accepts props", () => {
    const wrapper = mount(<StudentNameLg name={mockName} />);
    expect(wrapper.props().name).toBe(mockName);
  });
});
