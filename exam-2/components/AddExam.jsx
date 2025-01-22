import React, { useState } from "react";
import API from "../config/api";

const AddExam = () => {
  const [data, setData] = useState({
    examName: "",
    marks: "",
    ExamStartTime: "",
    ExamEndTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/exams/create", data);
      alert(`Exam added: ${response.data.exam.examName}`);
      setData({ examName: "", marks: "", ExamStartTime: "", ExamEndTime: "" });
    } catch (error) {
      console.error("Error adding exam:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Exam Name:
        <input type="text" name="examName" value={data.examName} onChange={handleInputChange} />
      </label>
      <label>
        Marks:
        <input type="number" name="marks" value={data.marks} onChange={handleInputChange} />
      </label>
      <label>
        Start Time:
        <input type="datetime-local" name="ExamStartTime" value={data.ExamStartTime} onChange={handleInputChange} />
      </label>
      <label>
        End Time:
        <input type="datetime-local" name="ExamEndTime" value={data.ExamEndTime} onChange={handleInputChange} />
      </label>
      <button type="submit">Add Exam</button>
    </form>
  );
};

export default AddExam;
