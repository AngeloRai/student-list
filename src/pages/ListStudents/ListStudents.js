import React, { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import StudentCard from "../../components/StudentCard/StudentCard";
const API_URL = "https://api.hatchways.io/assessment/students";

const ListStudents = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nameSearchWord, setNameSearchWord] = useState("");
  const [tagSearchWord, setTagSearchWord] = useState("");
  const [errors, setErrors] = useState();

  //fetch students and add necessary fields
  const fetchStudents = async () => {
    try {
      setErrors(null);
      setLoading(true);
      const fetchedStudents = await fetch(API_URL);
      const parsedStudents = await fetchedStudents.json();
      const treatedStudents = parsedStudents.students.map((person) => {
        return {
          fullName: `${person.firstName} ${person.lastName}`.toUpperCase(),
          tags: [],
          ...person,
        };
      });
      setStudents(treatedStudents);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErrors(error.toString());
    }
  };
  //push a tag object with name and id into slected student tags array
  const addTag = (id, tag) => {
    const index = filteredStudents.findIndex((s) => s.id === id);
    const studentsCopy = [...students];
    studentsCopy[index].tags.push({ name: tag, id: id + Math.random() });
    setFilteredStudents(studentsCopy);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    const filterStudents = () => {
      let filteredArray = [...students];
      //filter by name
      if (students.length !== 0 && nameSearchWord.length !== 0) {
        filteredArray = students.filter((student) =>
          student.fullName
            .toLowerCase()
            .trim()
            .includes(nameSearchWord.toLowerCase().trim())
        );
        setFilteredStudents(filteredArray);
      }
      //filter by tag
      if (students.length !== 0 && tagSearchWord.length !== 0) {
        filteredArray = filteredArray.filter((student) =>
          student.tags?.some((tag) =>
            tag.name
              .toLowerCase()
              .trim()
              .includes(tagSearchWord.toLowerCase().trim())
          )
        );
        setFilteredStudents(filteredArray);
      }
      //if no search word, set to complete array
      if (!nameSearchWord && !tagSearchWord) {
        setFilteredStudents(students);
      }
    };
    filterStudents();
  }, [nameSearchWord, tagSearchWord, students]);

  return (
    <div className="h-[100vh] flex justify-center w-full bg-[#f3f3f3]">
      <div className="relative overflow-auto w-3/5 mt-16 mb-10 rounded-lg bg-white shadow-slate-500 shadow-sm ">
        <div className="sticky top-0 bg-contain w-[100%] px-2 z-10">
          <SearchInput
            setSearchWord={setNameSearchWord}
            placeholder="Search by name"
          />
          <SearchInput
            setSearchWord={setTagSearchWord}
            placeholder="Search by tag"
          />
        </div>
        {errors && <div className="p-8 text-red-700">{errors}</div>}
        {!errors && loading ? (
          <p className="m-10">loading...</p>
        ) : (
          <div>
            {filteredStudents &&
              filteredStudents.map((student) => (
                <StudentCard
                  student={student}
                  key={student.id}
                  addTag={addTag}
                />
              ))}
          </div>
        )}
        {!loading && filteredStudents.length < 1 && (
          <div className="p-8">NO RESULTS</div>
        )}
      </div>
    </div>
  );
};

export default ListStudents;
