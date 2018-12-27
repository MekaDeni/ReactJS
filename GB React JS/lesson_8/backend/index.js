/*ПРОСТАЯ СЕРВЕРНАЯ СТРУКТУРА НА NODE
импортим через require: eхpress - простой фреймворк для работы с бэком
mongodb - бд NoSQL
body-parser - модуль для парсинга тела запроса*/
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

/*импорт раута (конструкция 
./routes поумолчанию читает ./routes/index.js (только с index.js))*/
const routes = require('./routes');
//импорт конфига в котором содержать урла для подключения к бд монги
const dbConfig = require('./config/db.js');

//Порт по умолчанию
const DEFAULT_PORT = 9001;
//Булевой порт который возвращает либо порт среды в которой находится серв либо порт по умолчанию
const PORT = process.env.PORT || DEFAULT_PORT;

//фиксик для запроса (не рекоменд., читать про header запроса)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//парсим данные через bodyParser перед инициализации app
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

/*подключаемся к БД (в первую очередь)
первый параметр урла для подключения;
второй (опциональный)- опция;
третий callback для вывода ошибок или получение databaseInstance(для работы в бд)
для запуска сервера монги в консоле винды перейти в bin и запустить mongod
далее открыть консоль монго (mongo.exe) и все норм*/
MongoClient.connect(
	dbConfig.url, 
	{
	useNewUrlParser: true
	},
	(err, databaseInstance) => {
		if(err) return console.log(err);

		// в routes() передаем наш прил app и бд
		routes(app, databaseInstance.db());
		//listen() функция позволяет слушать серв через заданый в первом аргументе порт = PORT
		app.listen(PORT, () => {
			console.log('слухаем порт: '+PORT+' на 192.168.1.200');
		});
	}
);


