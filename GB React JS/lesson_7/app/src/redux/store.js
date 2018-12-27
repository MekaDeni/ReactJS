// Импортируем функции приминения мидлверов, создания хранилища, соединителя мидлверов
import { applyMiddleware, createStore, compose } from 'redux';
// redux-thunk позволяет нам работать с redux в асинхронном режиме 
import thunk from 'redux-thunk';

// подключаем редьюсеры с логикой хранилища
import reducers from './reducers.js';

// подключаем композитор из Redux DevTool расширения или из библиотеки
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// небольшой мидлвер для логирования экшенов и изменения хранилища
const logger = ({ getState }) => {
	return next => action => {
		console.log('экшен на диспаче - ', action);
		const returnValue = next(action);
		console.log('стейт сейчас - ', getState());
		return returnValue;
	}
}

// собираем милдверы
const middeware = composeEnhancers(applyMiddleware(thunk))

// создаем хранилище и сразу же его экспортируем
export default createStore(reducers, middeware);