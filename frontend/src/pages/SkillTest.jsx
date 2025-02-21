import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SkillTest = ({ selectedJob }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showResult, setShowResult] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("https://quizapi.io/api/v1/questions", {
          params: {
            apiKey: "oeKzLvfJvmOyOYdfQDStxcB18uy90r3jtLqv0SWR",
            limit: 5,
            category: "Linux",
          },
        });
        const apiQuestions = response.data.map((q) => ({
          question: q.question,
          options: Object.values(q.answers).filter((answer) => answer !== null),
          answer: Object.keys(q.correct_answers).filter(
            (key) => q.correct_answers[key] === "true"
          )[0],
        }));
        setQuestions(apiQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, [selectedJob]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      } else {
        setShowPopup(true);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const handleNext = async () => {
    const correctAnswer = questions[currentQuestion].options[
      questions[currentQuestion].answer.replace("answer_", "").charCodeAt(0) - 97
    ];
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(((currentQuestion + 1) / questions.length) * 100);
    } else {
      setShowResult(true);
      setTimeLeft(0);

      // Send skill test results to the backend
      try {
        const username = localStorage.getItem('username');
        await axios.post('http://localhost:3001/skilltestresult', {
          username,
          score,
          testBehaviors: {}, 
        });
        console.log('Skill test result posted successfully');
      } catch (error) {
        console.error('Error posting skill test result:', error);
      }
    }
  };

  if (showResult) {
    return (
      <motion.div className="flex flex-col items-center p-6 max-w-lg mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {showPopup && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
            style={{ zIndex: 1000 }}
          >
            <div className="bg-white rounded-lg p-6 shadow-lg w-96">
              <h3 className="text-center text-lg font-bold text-blue-600">Test Completed!</h3>
              <p className="text-center mt-4 text-lg">Your score will be displayed on the next page.</p>
            </div>
          </div>
        )}
        <div className="w-full p-6 shadow-lg rounded-xl border border-blue-500 bg-blue-50">
          <h3 className="text-center text-xl font-bold text-blue-600">Test Completed!</h3>
          <p className="text-center mt-4 text-lg">Your Score: {score} / {questions.length}</p>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${(score / questions.length) * 100}%` }}></div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div className="flex flex-col items-center p-6 max-w-lg mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="w-full p-6 shadow-lg rounded-xl border border-blue-500 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-blue-600">Skill Test</h3>
          <p className="text-red-500 font-semibold">Time Left: {timeLeft}s</p>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full my-3">
          <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="mb-4 font-semibold text-gray-700">{questions[currentQuestion]?.question}</p>
        <div>
          {questions[currentQuestion]?.options.map((option, index) => (
            <label key={index} className="flex items-center p-2 border rounded-lg mb-2 cursor-pointer hover:bg-blue-100">
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
        <button
          className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 disabled:bg-gray-400"
          onClick={handleNext}
          disabled={!selectedOption}
        >
          {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
      {showPopup && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          style={{ zIndex: 1000 }}
        >
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <h3 className="text-center text-lg font-bold text-blue-600">Test Completed!</h3>
            <p className="text-center mt-4 text-lg">Your score will be displayed on the next page.</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SkillTest;
