const calculateArea = (a, b, c) => {
	let s = (a + b + c)/2;
	let figureObject = {
		figure: "Треугольник",
		area: s,
		input: [a, b ,c]
	}
	return figureObject;
}

calculateArea(1,2,3)
console.log(calculateArea(1,2,3));