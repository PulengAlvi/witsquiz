import React, { useContext, useState } from "react";
import { QuizContext } from "./quiz";


const Feedback = () => {
  const [quizState] = useContext(QuizContext);
  const [comment, setComment] = useState("");

  const calculatePercentage = () => {
    const { correctAnswersCount, questions } = quizState;
    const totalQuestions = questions.length;
    return ((correctAnswersCount / totalQuestions) * 100).toFixed(2);
  };

  const renderQuestionStatus = () => {
    const { questions } = quizState;
    return questions.map((question, index) => (
      <div key={index}>
        Question {index + 1}:{" "}
        {quizState.answers[index +1] === question.correctAnswer ? (
          <span className="correctAnswer">Correct</span>
        ) : (
          <span className="incorrectAnswers">Wrong</span>
        )}
      </div>
    ));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    // Submit the comment to your backend or perform desired action
    console.log("Submitted comment:", comment);
  };

  return (
    <div>
      <h2>Quiz Feedback</h2>
      <div>
        Percentage: {calculatePercentage()}%
      </div>
      <div>
        <h3>Question Status:</h3>
        {renderQuestionStatus()}
      </div>
      <div>
        <h3>Comment:</h3>
        <form onSubmit={handleSubmitComment}>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            rows={4}
            cols={50}
          />
          <br />
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
