// функция combineReducers позволяет нам соединять несколько редьюсеров в один
import { combineReducers } from 'redux';

// испортируем редьюсер комментариев и пользователей
import comments from './modules/comments.js';

// подключаем редьюсер комментариев и пользователей в объект редьюсеров
export default combineReducers({
	comments
})