import React, { useEffect, useState } from "react";
import API from "../config/api";

const GetExam = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await API.get("/exams/");
        setExams(response.data);
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    };

    fetchExams();
  }, []);

  return (
    <div>
      {exams.length > 0 ? (
        exams.map((exam) => (
          <div key={exam._id}>
            <h2>{exam.examName}</h2>
            <p>Marks: {exam.marks}</p>
            <p>Start: {exam.ExamStartTime}</p>
            <p>End: {exam.ExamEndTime}</p>
          </div>
        ))
      ) : (
        <p>No exams available</p>
      )}
    </div>
  );
};

export default GetExam;
