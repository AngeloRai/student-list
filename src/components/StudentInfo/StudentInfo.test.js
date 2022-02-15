import React from "react";
import { shallow, mount } from "enzyme";
import StudentInfo from "./StudentInfo";
import toJson from "enzyme-to-json";

describe("tests student info component", () => {
  const mockStudent = {
    city: "New York",
    email: "student@student.com",
    company: "company",
    skills: "genius",
    grades: [1, 2, 3, 4]
  };
  
  it("renders without crashing", () => {
    const wrapper = shallow(<StudentInfo student={mockStudent}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("accepts props", () => {
    const wrapper = mount(<StudentInfo student={mockStudent} />);
    expect(wrapper.props().student.city).toBe(mockStudent.city);
    expect(wrapper.props().student.email).toBe(mockStudent.email);
    expect(wrapper.props().student.company).toBe(mockStudent.company);
    expect(wrapper.props().student.skills).toBe(mockStudent.skills);
    expect(wrapper.props().student.grades.length).toBe(4);
    
  });
});
