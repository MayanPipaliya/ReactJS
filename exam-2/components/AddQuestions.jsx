import React, { useState } from "react";
import API from "../config/api";

const AddQuestions = () => {
  const [data, setData] = useState({ question: "", answer: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/questions/create", data);
      alert(`Question added: ${response.data.question}`);
      setData({ question: "", answer: "" });
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="question" value={data.question} placeholder="Question" onChange={handleInputChange} />
      <input type="text" name="answer" value={data.answer} placeholder="Answer" onChange={handleInputChange} />
      <button type="submit">Add Question</button>
    </form>
  );
};

export default AddQuestions;
