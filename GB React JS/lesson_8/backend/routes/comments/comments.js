//подключаем пакет с датой
const moment = require('moment');

//инфо по структуре в index.js
module.exports = (app, db) => {
	app.get('/comments', (req, res) => {
		/*заходим в коллкецию ДБ - collection, в аругменте коллеция
		получаем данные через find 1 аргумент {} - значит все данные, второй нам не нужен
		с помощью toArray преобразуем полученные данные в массив 1 аргумент ошибка,
		2 результат для обработки */
		db.collection('comments').find({}).toArray((err, result) => {
			//если ошибка
			if (err) {
				//при ошибки отправляем статус 500
				res.status(500).send({error: 'ошибочка вышла!'})
			} else {
				//переобпределяем массив для корректировки id через map
				//(...) - spred
				res.send(result.map(comment => ({
					...comment,
					id: comment._id
				})));
			}
		});
	});
};