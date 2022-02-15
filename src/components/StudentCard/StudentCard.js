import React, { useState } from "react";
import TagInput from "../TagInput/TagInput";
import StudentInfo from "../StudentInfo/StudentInfo";
import PlusButton from "../PlusButton/PlusButton";
import MinusButton from "../MinusButton/MinusButton";
import StudentGrades from "../StudentGrades/StudentGrades";
import AvatarRound from "../AvatarRound/AvatarRound";
import StudentNameLg from "../StudentNameLg/StudentNameLg";

const StudentCard = ({ student, addTag }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [tagName, setTagName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tagName.length) {
      addTag(student.id, tagName);
      setTagName("");
    }
  };

  return (
    <div className="border-b-2 grid md:grid-cols-6 gap-1 w-full p-4">
      <div className="col-span-1">
        <AvatarRound image={student?.pic} alt="student avatar" />
      </div>
      <div className="col-span-5">
        <div className="flex justify-between">
          <div className="sm:ml-3 lg:ml-0">
            <StudentNameLg name={student?.fullName} />
          </div>
          {isCollapsed ? (
            <MinusButton setIsCollapsed={setIsCollapsed} />
          ) : (
            <PlusButton setIsCollapsed={setIsCollapsed} />
          )}
        </div>
        <div className="sm:ml-6 lg:ml-4 mt-2">
          <StudentInfo student={student} />
        </div>

        <div className="mt-3 sm:ml-6 lg:ml-4">
          {isCollapsed &&
            student.grades.map((grade, index) => (
              <StudentGrades grade={grade} index={index} key={index} />
            ))}
        </div>

        <div className="m-3 ml-3">
          {student?.tags?.map((tag) => (
            <span className="bg-[#d1d0d0] m-[0.2rem] text-sm p-[0.3rem] rounded-sm shadow-sm">
              {tag.name}
            </span>
          ))}
        </div>

        <TagInput
          addTag={addTag}
          handleSubmit={handleSubmit}
          setTagName={setTagName}
          tagName={tagName}
        />
      </div>
    </div>
  );
};

export default StudentCard;
