import { QuizProvider } from "./quiz";
import { Quizz } from "./Quizz";
import Feedback from "./feedback"; // Import the Feedback component
import React, { useState } from "react";

export const ViewQuiz = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleViewFeedback = () => {
    setShowFeedback(true);
  };

  return (
    <div>
      <React.StrictMode>
        <QuizProvider>
          {showFeedback ? (
            <Feedback />
          ) : (
            <Quizz handleViewFeedback={handleViewFeedback} />
          )}
        </QuizProvider>
      </React.StrictMode>
    </div>
  );
};
