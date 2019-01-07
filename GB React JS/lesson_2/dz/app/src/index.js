import "./style.css";
import {Deni} from "./classes/classDev.js"
import {buttonRend} from "./buttonDate/button.js";
const getStart = () => {
	document.body.innerHTML = "Имя разработчика: "+Deni.name+"<br>";
	document.body.innerHTML += "Фамилия разработчика: "+Deni.lastname+"<br>";
	document.body.appendChild(buttonRend());
	console.log(Deni)
}
window.onload = getStart;
