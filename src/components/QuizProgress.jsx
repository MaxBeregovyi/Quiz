import Store from "../store/index.js";

function QuizProgress({ currentWidth }) {
  return (
    <div
      style={{
        width: (currentWidth / Store.quiz.questions.length) * 100 + "%",
      }}
      className="quiz__progress-inner"
    ></div>
  );
}

export default QuizProgress;
