interface Pet {
	name: string;
	age: number;
	species: string;
	breed?: string;
	speak(): void
}

//valid implementation
class Dog implements Pet {
  name: string;
  age: number;
  species: string;
  breed: string;

	constructor(name: string, age: number, species: string, breed: string) {
		this.name = name;
		this.age = age;
		this.species = species;
		this.breed = breed;
	}

	speak() {
		console.log('woof!')
	}
}

//also valid implementation
class Cat implements Pet {
  name: string;
  age: number;
  species: string;
  isFluffy: boolean;

	constructor(name: string, age: number, species: string, isFluffy: boolean) {
		this.name = name;
		this.age = age;
		this.species = species;
    this.isFluffy = isFluffy;
	}

    speak() {
		console.log('meow!')
	}
}

//invalid implementation
class Dragon implements Pet {
  name: string;
  age: number;
  species: string;

	constructor(name: string, age: number, species: string) {
		this.name = name;
		this.age = age;
		this.species = species;
	}

	//this will throw an error because it is missing the speak method!
	breathFire() {
		console.log('RAAAWRRRR!!!!');
	}
}