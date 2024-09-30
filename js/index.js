const MOCK_NOTES = [
  {
    id: 1,
    title: "Работа с формами",
    content:
      "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name",
    color: colors.GREEN,
    isFavorite: false,
  },
  {
    id: 2,
    title: "Подготовить моковые данные",
    content:
      "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name",
    color: colors.BLUE,
    isFavorite: true,
  },
  {
    id: 3,
    title: "Flexbox (CSS)",
    content:
      "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name",
    color: colors.YELLOW,
    isFavorite: false,
  },
  {
    id: 4,
    title: "Объекты (JavaScript)",
    content:
      "К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name",
    color: colors.PURPLE,
    isFavorite: true,
  },
];

// словарь цветов
const colors = {
  GREEN: "green",
  BLUE: "blue",
  RED: "red",
  YELLOW: "yellow",
  PURPLE: "purple",
};

// хранение данных, бизнес-логика
const model = {
  //   notes: [],
  notes: MOCK_NOTES,
//   addTask(title) {
//     const newTask = { title: title, isDone: false, id: Math.random() };
//     // то же, что { title: title, isDone: isDone, id: id }

//     this.tasks.push(newTask);
//     view.renderTasks(model.tasks); // Обновляем представление
    //   },
    addNote(title, content, color) {
    const note = {
      // 1. создадим новую заметку
    },
 
    // 2. добавим заметку в начало списка
    // 3. обновим view
    },
    updateNotesView() {
    // 1. рендерит список заметок (вызывает метод view.renderNotes)
    // 2. рендерит количество заметок (вызывает метод view.renderNotesCount)
  },
//   deleteTask(taskId) {
//     this.tasks = this.tasks.filter((task) => task.id !== taskId);

//     view.renderTasks(model.tasks);
//   },
//   toggleTask(taskId) {
//     // воспользуемся методом map
//     this.tasks = this.tasks.map((task) => {
//       if (task.id === taskId) {
//         task.isDone = !task.isDone;
//       }
//       return task;
//     });

//     view.renderTasks(model.tasks); // Обновляем представление
//   },
//   clearTasks() {
//     this.tasks = this.tasks.filter((task) => !task.isDone);

//     view.renderTasks(model.tasks);
//   },
};

// отображение данных: рендер списка задач, размещение обработчиков событий
const view = {
  init() {
    this.renderNotes(model.notes)
  },
  renderNotes(notes) { ... }
  view.renderNotesCount(notes) {...}
  
  const form = document.querySelector('.note-form')
  form.addEventListener('submit', (event) => {
      // получаем данные из полей формы
      // передаем данные в контроллер

      controller.addNote(title, content, color)
  }),

  function init() {
    view.init();
  }
},

init()
// const view = {
//   load() {
//     //1
//     this.renderTasks(model.tasks);

//     const form = document.querySelector(".form");
//     const input = document.querySelector(".input");

//     form.addEventListener("submit", function (event) {
//       event.preventDefault(); // Предотвращаем стандартное поведение формы
//       // const title = input.value
//       controller.addTask(input.value); // Вызываем метод addTask контроллера

//       input.value = ""; // Очищаем поле ввода
//     });
//     const list = document.querySelector(".list");
//     list.addEventListener("click", function (event) {
//       // проверяем, что кликнули на название задачи
//       if (event.target.classList.contains("task-title")) {
//         // id задачи хранится в id родительского элемента
//         // +, используем унарный плюс для преобразования типа в number
//         const taskId = +event.target.parentElement.id;
//         controller.toggleTask(taskId);
//       }
//       if (event.target.classList.contains("delete-button")) {
//         const taskId = +event.target.parentElement.id;
//         // 2. вызываем метод контроллера для удаления задачи
//         controller.deleteTask(taskId);
//       }
//     });
//     const clearButton = document.querySelector(".clear");
//     clearButton.addEventListener("click", function (event) {
//       controller.clearTasks();
//     });
//   },
//   renderTasks(tasks) {
//     const list = document.querySelector(".list");
//     let tasksHTML = "";

//     for (let i = 0; i < tasks.length; i++) {
//       const task = tasks[i];
//       tasksHTML =
//         tasksHTML +
//         `<li id="${task.id}" class="${task.isDone ? "done" : ""}">
//                     <b class="task-title">${task.title}</b>
//                     <button class="delete-button" type="button">Удалить 🗑</button>
//                </li>`;

//       list.innerHTML = tasksHTML;
//     }
//   },
// };

// обработка действий пользователя, обновление модели
const controller = {
  addTask(title) {
    if (title.trim() !== "") {
      model.addTask(title);
    }
  },
  deleteTask(id) {
    model.deleteTask(id);
  },
  toggleTask(id) {
    model.toggleTask(id);
  },
  clearTasks() {
    model.clearTasks();
  },
};

function viewDefault() {
  view.load();
}
viewDefault();
