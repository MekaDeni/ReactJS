class Human {
	constructor(name, age, dateOfBirth ) {
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
	}

	displayInfo(){
			console.log("Имя: "+this.name+"; Возраст: "+this.age+" Дата: "+this.dateOfBirth)
	}
}

class Employee extends Human{
	constructor(name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth);
		this.salary = salary;
		this.department = department;
	}

	displayInfo(){
		super.displayInfo()
		console.log("Зарплата: "+this.salary+"\nДепортамент: "+this.department);
	}
}

class Developer extends Employee {
	constructor(salary, department) {
		super(salary, department);
		this.manager = {};
	}

	toAppoint(manager) {
		this.manager = manager;
		console.log("Мэнэджер: "+this.manager);
	}
}

class Manager extends Employee {
	constructor(salary, department) {
		super(salary, department);
		this.arrDevelopers = [];
	}

	pushDevelopers(...developer){
		this.arrDevelopers.push(developer);
		console.log("Сотрудники: "+this.arrDevelopers);
	}

	delDevelopers(num){
		delete this.arrDevelopers[0][(num-1)];
		console.log("Сотрудники: "+this.arrDevelopers);
	}
}