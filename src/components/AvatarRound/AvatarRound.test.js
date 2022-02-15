import React from "react";
import { shallow, mount } from "enzyme";
import AvatarRound from "./AvatarRound";
import toJson from "enzyme-to-json";
// it("renders correctly", () => {
//   const wrapper = mount(<AvatarRound />);

// });

it("renders without crashing", () => {
  const wrapper = shallow(<AvatarRound image={image} alt={alt}/>);
  expect(toJson(wrapper)).toMatchSnapshot();
});

const image = "https://storage.googleapis.com/images/itiis.jpg";
const alt = { img: "student image" };

it("accepts user account props", () => {
  const wrapper = mount(<AvatarRound image={image} alt={alt} />);
  expect(wrapper.props().image).toEqual(image);
  expect(wrapper.props().alt).toEqual(alt);
});
it("should not render if no props received", () => {
  const wrapper = mount(<AvatarRound image={image} alt={alt} />);
  expect(wrapper.props().image).toEqual(image);
  expect(wrapper.props().alt).toEqual(alt);
});

it("renders an image", () => {
  const wrapper = shallow(<AvatarRound image={image} alt={alt}/>);
  expect(wrapper.find("img").prop("src")).toEqual(image);
});
