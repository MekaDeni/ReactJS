const loop = (t) => {
	let times = t;
	let callback = ()=>{
		console.log("Hello Neo");
	};
	if (times != undefined) {
		for (let i=0; i<times; i++){
			callback();
		}
	} else {
		times = 0;
		callback = null;
		console.log("Время не задано\n"+"callback = " + callback);
	}
}
loop();