import React from 'react';
import AddQuestions from '../components/AddQuestions';
import GetQuestions from '../components/GetQuestions';
import AddExam from '../components/AddExam';
import GetExam from '../components/GetExam';
import "./App.css";

const App = () => (
  <div>
    <AddQuestions />
    <GetQuestions />
    <AddExam />
    <GetExam />
  </div>
);

export default App;
