export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getTasksFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function removeTasksFromLocalStorage(key) {
  localStorage.removeItem(key);
}
