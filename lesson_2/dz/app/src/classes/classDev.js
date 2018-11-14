import {name, lastname} from "../const/const.js";
class Developer {
	constructor(name, lastname) {
		this.name = name;
		this.lastname = lastname;
	}
}

export const Deni = new Developer(name, lastname);