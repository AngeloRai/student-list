
const StudentGrades = ({index, grade}) => {
  return (
    <div className=" text-sm ">
      Test {index + 1}: &nbsp;&nbsp;&nbsp;&nbsp;{grade}%
    </div>
  );
};

export default StudentGrades;
