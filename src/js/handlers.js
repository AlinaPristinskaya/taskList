export function onSubmit(event) {
  event.preventDefault();

  localStorage.setItem(taskNameInput.value, taskDescriptionInput.value);
  tasks[taskNameInput.value] = taskDescriptionInput.value;
}
