//отримуемо дані з локалсторежд на входи маємо массив обьєктів з ключами taskName taskDescription
const tasks = [
    { id: 1, taskName: "Купити продукти", taskDescription: "Купити хліб, молоко, яйця" },
    { id: 2, taskName: "Зробити зарядку", taskDescription: "Ранкові вправи протягом 15 хвилин" },
    { id: 3, taskName: "Прочитати книгу", taskDescription: "Прочитати 20 сторінок книги" },
    { id: 4, taskName: "Написати код", taskDescription: "Розробити нову функцію для проекту" },
    { id: 5, taskName: "Прибрати кімнату", taskDescription: "Пропилососити і витерти пил" }
];

button.addEventListener("click", () => deleteTaskById(task.id));

function deleteTaskById(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}


