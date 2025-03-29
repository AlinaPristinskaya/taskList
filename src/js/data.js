import { STORAGE_KEYS } from './constants';
import { loadFromLocalStorage } from './local-storage-api';

export const tasks = loadFromLocalStorage(STORAGE_KEYS.TASKS) || [];
