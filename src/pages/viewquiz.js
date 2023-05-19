//dummy comment

import { QuizProvider } from "./quiz";
import {Quizz} from "./Quizz";
import React from "react";
export const ViewQuiz = () => {
    return(
        <div>
            <React.StrictMode>
             <QuizProvider>
                <Quizz />
             </QuizProvider>
            </React.StrictMode>
        </div>
    );
}