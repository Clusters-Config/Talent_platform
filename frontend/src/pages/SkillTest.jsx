import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const staticQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "None of the above",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C++", "Python", "JavaScript"],
    answer: "JavaScript",
  },
];

const SkillTest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showResult, setShowResult] = useState(false);
  const navigate =useNavigate()

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // const response = await axios.get("/api/skilltest"); // Fetch questions from API
        // setQuestions(response.data.length > 0 ? response.data : staticQuestions);
        setQuestions(staticQuestions);
      } catch (error) {
        setQuestions(staticQuestions);
      }
    };
    fetchQuestions();

  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : navigate("/")));
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft,navigate],1000);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(((currentQuestion + 1) / questions.length) * 100);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <motion.div className="flex flex-col items-center p-6 max-w-lg mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
    </motion.div>
  );
};

export default SkillTest;
