import React from "react";
import { shallow, mount } from "enzyme";
import StudentGrades from "./StudentGrades";
import toJson from "enzyme-to-json";

describe("tests grades component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<StudentGrades />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("accepts props", () => {
    const mockIndex = "1";
    const mockGrade = "75";
    const wrapper = mount(
      <StudentGrades index={mockIndex} grade={mockGrade} />
    );
    expect(wrapper.props().index).toBe(mockIndex);
    expect(wrapper.props().grade).toBe(mockGrade);
  });
});
