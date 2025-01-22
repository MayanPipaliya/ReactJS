import React, { useEffect, useState } from "react";
import API from "../config/api";

const GetQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await API.get("/questions/");
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      {questions.length > 0 ? (
        questions.map((q) => (
          <div key={q._id}>
            <h3>{q.question}</h3>
            <p>{q.answer}</p>
          </div>
        ))
      ) : (
        <p>No questions available</p>
      )}
    </div>
  );
};

export default GetQuestions;
