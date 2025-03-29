import { refs } from './refs';

export function renderTasksList(tasks) {
  const murkup = tasks.map(task => {
    return `<li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>${task.taskName}</h3>
        <p>${task.taskDescription}</p>
      </li>`;
  });
  refs.tasksList.innerHTML = murkup.join('');
}

export function clearTasksList() {
  refs.tasksList.innerHTML = '';
}
