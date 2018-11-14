const loop = (times, callback) => {
	if (callback !== undefined) {
		for (let i=0; i<times; i++){
			callback();
		}
	} else {
		times = 0;
		callback = null;
		console.log("Время не задано\n"+"Или функция callback отсутствует");
	}
}
loop(21, ()=>{
			console.log("Hello Neo");
		});