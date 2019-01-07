// фейковое API для эмуляции реквестов
import API from '../../api/index.js';

// ACTION TYPES
// Определяем уникальные имена для вызываемых экшенов
// неободимо следить чтобы имена экшенов (экшен типы) не повторялись

const FETCH_COMMENTS = 'app/comments/FETCH_COMMENTS';
const FETCH_COMMENTS_SUCCESS = 'app/comments/FETCH_COMMENTS_SUCCESS';
const FETCH_COMMENTS_FAIL = 'app/comments/FETCH_COMMENTS_FAIL';

// REDUCER

// начальное состояние редьюсера
const initialState = {
	list: [],
	loading: false
};

// Непосредственно сам редьюсер, который является функцией
// при инициализации определяем что по умолчанию состояние редьюсера 
// равно начальному состоянию initialState,
// также задаем пустой экшен (необходимо следить, чтобы он всегда был объектом)
const reducer = (state = initialState, action = {}) => {
	// Выбор экшена определяется через простой switch
	// тип экшена должн приходить в параметре type
	switch(action.type) {
		// экшены при вызове должны выполнять одно действие, поэтому могут присутствовать дублирования
		case FETCH_COMMENTS:
		return{
			...state,
			loading: true
		};

		case FETCH_COMMENTS_SUCCESS:
		return{
			...state,
			// данные экшена всегда должны приходить в параметре payload
			list: action.payload,
			loading: false
		};

		case FETCH_COMMENTS_FAIL:
		return{
			...state,
			list: action.payload,
			loading: false,
			error: action.payload.error
		};

		//возвращаем текущий стайт через дефалт, чтобы не менять состояния там где не нужно
		default:
			return state;
	}
};

// SELECTORS
// Набор селекторов, позволяющих упросить выборку определенных данных из хранилища

export const getLocalState = state => {
	return state.comments;
}

export const getCommentsList = state => {
	return getLocalState(state).list;
}

export const getCommentsLoading = state => {
	return getLocalState(state).loading;
}

// ACTION CREATORS
// Набор создателей экшенов, которые мы будем вызывать в коде наших компонентов

export const fetchComments = () => {
	// dispatch это функция, которая непосредственно отвечает за передачу экшена в обработчик
	return dispatch => {
		dispatch({
			type: FETCH_COMMENTS
		});

		// Вызываем фейковое апи для получения комментариев
    	// как раз здесь нам очень помогает redux-thunk который позволяет писать нам асинхронные экшены
		return API.comments.fetchComments().then((comments) => {
			 // в случае успеха вызывает экшен с успехом и передаем данные комментариев в payload
			dispatch({
				type: FETCH_COMMENTS_SUCCESS,
				payload: comments
			})

			return comments;
		}).catch((error) => {
			// в случае неудачи или ошибки с реквестов вызываем экшен отвечающий за ошибочное выполнение
			dispatch({
				type: FETCH_COMMENTS_FAIL,
				payload: { error }
			})
		})
	};
};

// экспортируем наш редьюсер комментариев
export default reducer;