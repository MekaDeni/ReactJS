//подтягивваем роут 
const commentsRoutes = require('./comments/comments.js');

//конструкция импорта функции по умолчанию для бэка
module.exports = (app, db) => {
	//это есть раут на беке. req - прием, res- ответ
	app.get('/', (req, res) => {
		res.send('это ответочка!');
	});

	//передаем апликейшн и датабейс в раут коментов
	commentsRoutes(app, db);
};