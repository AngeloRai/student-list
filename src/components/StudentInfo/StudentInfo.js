const StudentInfo = ({ student }) => {
  return (
    <div className="text-sm ">
      <div>City: {student.city}</div>
      <div>Email: {student.email}</div>
      <div>Company: {student.company}</div>
      <div>Skills: {student.skill}</div>
      <div>
        Average:{" "}
        {(
          student.grades.reduce((a, b) => Number(a) + Number(b)) /
          student.grades.length
        ).toFixed(2)}
        %
      </div>
    </div>
  );
};

export default StudentInfo;
