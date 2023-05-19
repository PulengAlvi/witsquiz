import React, { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "./quiz";

export const Quizz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const handleSubmitFeedback = () => {
    dispatch({ type: "SUBMIT_FEEDBACK" });
  };

  const handleCommentChange = (event) => {
    dispatch({ type: "SET_COMMENT", payload: event.target.value });
  };

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCount} of &nbsp;
              {quizState.questions.length} right.
            </div>
          </div>
          <div className="feedback-button" onClick={handleSubmitFeedback}>
            View Feedback
          </div>
          {quizState.feedback.percentage > 0 && (
            <div className="feedback">
              <div>Percentage: {quizState.feedback.percentage}%</div>
              <div>
                Correct Answers:
                <ul>
                  {quizState.feedback.correctAnswers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                  ))}
                </ul>
              </div>
              <div>
                Wrong Answers:
                <ul>
                  {quizState.feedback.wrongAnswers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                  ))}
                </ul>
              </div>
              <div>
                Comment:
                <textarea
                  value={quizState.feedback.comment}
                  onChange={handleCommentChange}
                />
              </div>
            </div>
          )}
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="next-button"
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          {quizState.currentAnswer && (
            <div
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              className="next-button"
            >
              Next question
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quizz;
