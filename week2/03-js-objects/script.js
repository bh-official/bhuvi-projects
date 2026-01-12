console.log("JavaScript Objects Example Loaded");

const person ={
    fname: "Bhuvana",
    age: "36",
    city: "Puducherry",

};
console.log(person);

console.table(person);
console.table(person.fname);
console.table(person.age);
console.table(person.city);

console.log(`My name is ${person.fname} and my age is ${person.age} and I live in ${person.city}`);



const house = {
    color: "blue",
    type: "villa",
    price: "50 lakhs",
    table: {
        color: "brown",
        shape: "rectangle",
        price: "5000",
        chairs: {
            color: "black",
            material: "wood",
            price: "2000",
            numbers: 6
        },
    },
    car: {
        brand: "Toyota",
        model: "Camry",
        year: 2020  
    },

};
house.builtYear = 2015;

console.log(house.builtYear);

console.log(house);
console.table(house);
console.log(house.color);
console.log(house.type);
console.log(house.table.chairs.numbers);

const laptop1 = document.createElement('laptop');
laptop1.brand = "Dell";
laptop1.ram = "16GB";
laptop1.storage = "512GB SSD";
laptop1.textContent = `Laptop Brand: ${laptop1.brand}`;

document.body.appendChild(laptop1);

console.log(laptop1);

house.table.chairs.height = "3 feet";
console.log(house.table.chairs);


console.dir(document.body);

// arrays
const animals = {
    animal1: "dog",
    petdog:{
        name: "Bruno",
        age: 4,
        breed: "Labrador"
    },
    animal2: "cat",
    petcat:{
        name: "Whiskers",
        age: 2,
        breed: "Siamese"
    },
    animal3: "monkey",
    wildmonkey:{
        name: "George",
        age: 5,
        breed: "Capuchin"
    },
    tags: ["pet", "wild", "domestic"],
    habitats: "forest, urban, rural",
};

console.log(animals.petdog.name);
console.log(animals.tags[0]);
console.log(animals.tags.length);
console.log(animals.habitats.length);

console.log(
    `there are three animals: ${animals.animal1}, ${animals.animal2}, and ${animals.animal3} their no.of.tags are ${animals.tags.length} and habitats are ${animals.habitats}`);


