import { onSubmit } from './js/handlers';

const submitBtn = document.querySelector('.header-form-btn');
const headerForm = document.querySelector('.header-form');
const taskNameInput = document.querySelector(
  '.header-form-input[name="taskName"]'
);
const taskDescriptionInput = document.querySelector(
  '.header-form-input[name="taskDescription"]'
);

headerForm.addEventListener('submit', onSubmit);
