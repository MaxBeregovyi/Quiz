import Store from "../store/index.js";

function QuizResult({ result, show }) {
  const restartQuiz = () => {
    window.location.reload();
  };
  return (
    <section
      className={`quiz__result ${show >= Store.quiz.questions.length ? "--show" : ""}`}
    >
      <h3 className="quiz__summary">
        Ви відповіли правильно на {result} із {Store.quiz.questions.length}{" "}
        запитаннь!
      </h3>
      <button onClick={restartQuiz}>Почати знову😉</button>
    </section>
  );
}

export default QuizResult;
