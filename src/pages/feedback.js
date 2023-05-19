import { useState, useContext } from "react";
import { QuizContext } from "./quiz";

export const Feedback = () => {
  const [quizState] = useContext(QuizContext);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    // Submit the rating and comment data to the server or perform any desired action
    setSubmitted(true);
  };

  return (
    <div className="feedback">
      <h1>Quiz Feedback</h1>
      <div className="score">
        <h2>Your Score: {quizState.correctAnswersCount}/{quizState.questions.length}</h2>
      </div>
      <div className="question-status">
        {quizState.questions.map((question, index) => (
          <div key={index}>
            Question {index + 1}:{" "}
            {quizState.answers[index] === question.correctAnswer ? "Right" : "Wrong"}
          </div>
        ))}
      </div>
      <div className="rating-section">
        <h2>Rate the Quiz:</h2>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`star ${rating >= value ? "filled" : ""}`}
              onClick={() => handleRatingChange(value)}
            >
              &#9733;
            </span>
          ))}
        </div>
        <p>Your Rating: {rating} stars</p>
      </div>
      <div className="comment-section">
        <h2>Leave a Comment:</h2>
        <textarea placeholder="Write your comment here..."></textarea>
        <button onClick={handleSubmit}>Submit</button>
        {submitted && <p>Submitted</p>}
      </div>
    </div>
  );
};

export default Feedback;
