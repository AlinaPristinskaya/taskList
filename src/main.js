import { onDOMContentLoaded, onSubmit } from './js/handlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
refs.headerForm.addEventListener('submit', onSubmit);
