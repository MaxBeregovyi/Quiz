import { useState } from "react";
import Store from "../store/index.js";
import QuizItem from "./QuizItem.jsx";
import QuizProgress from "./QuizProgress.jsx";
import QuizResult from "./QuizResult.jsx";

function App() {
  let [results, setResults] = useState(0);
  let [currentQuestions, setCurrentQuestions] = useState(0);

  const selectAnswer = (id) => {
    Store.quiz.questions[currentQuestions].correct === id
      ? setResults(results + 1)
      : null;

    if (currentQuestions < Store.quiz.questions.length)
      setCurrentQuestions(currentQuestions + 1);
  };
  return (
    <main className="quiz">
      {currentQuestions < Store.quiz.questions.length && (
        <>
          <h1 className="quiz__title">{Store.quiz.title}</h1>

          <div className="quiz__progress">
            <QuizProgress currentWidth={currentQuestions} />
          </div>

          <section className="quiz__wrap">
            <QuizItem current={currentQuestions} choiceAnswer={selectAnswer} />
          </section>
        </>
      )}

      <QuizResult result={results} show={currentQuestions} />
    </main>
  );
}

export default App;
