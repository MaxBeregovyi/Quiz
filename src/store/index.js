const Store = {
  quiz: {
    title: "Мега тест",
    questions: [
      {
        title: "Який елемент використовується для створення посилання в HTML?",
        answers: ["link", " a ", " href"],
        correct: 1,
      },
      {
        title: "Що таке JSX в React JS?",
        answers: [
          "Мова розмітки, заснована на XML",
          "Конструктор JavaScript, що використовується для створення функціональних компонентів",
          "Метод для створення стилів у React-додатках",
        ],
        correct: 0,
      },
      {
        title: "Як змінити колір тексту в CSS?",
        answers: ["text-color: blue", "color: red", "font-color: green"],
        correct: 1,
      },
      {
        title:
          "Яка властивість в CSS використовується для визначення кольору фону елемента?",
        answers: ["color", "background-color", "text-color"],
        correct: 1,
      },
      {
        title: "Що таке компонент в React JS?",
        answers: [
          "Це HTML теги, які використовуються для створення інтерфейсу користувача",
          "Фрагменти коду, які можна повторно використовувати для створення інтерфейсу",
          "Це спеціальні функції для обробки подій",
        ],
        correct: 1,
      },
    ],
  },
};

export default Store;
