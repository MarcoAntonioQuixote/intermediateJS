let animals = [
    { name: "Luna", species: "Dog", age: 3, predator: false },
    { name: "Simba", species: "Cat", age: 5, predator: true },
    { name: "Charlie", species: "Rabbit", age: 2, predator: false },
    { name: "Buddy", species: "Dog", age: 7, predator: false },
    { name: "Whiskers", species: "Cat", age: 4, predator: true },
    { name: "Bella", species: "Dog", age: 2, predator: false },
    { name: "Nibbles", species: "Rabbit", age: 1, predator: false },
    { name: "Mittens", species: "Cat", age: 6, predator: true },
    { name: "Tiger", species: "Cat", age: 8, predator: true },
    { name: "Lion", species: "Cat", age: 6, predator: true },
    { name: "Wolf", species: "Dog", age: 4, predator: true },
    { name: "Cheetah", species: "Cat", age: 5, predator: true },
    { name: "Eagle", species: "Bird", age: 10, predator: true },
    { name: "Tornado", species: "Shark", age: 4500, predator: true }
];

let elimateDead = (animal) => {
    animal.isDead !== true
}

//loops (for & for of), conditional (if / switch), functions, array methods (map, filter, push, splice, )

//make a function that 
    //gets 2 animals 
    
    //them fight each other 

    //determine a winner/loser
        //kills the loser
        //eats the loser
    
    // have the winner do something

const animalFight = (animal1, animal2) =>{

    if (!animal1 || !animal2) return;

    if (animal1.predator === animal2.predator) {
        //could be both predators

        //could be both pray

    } else { //this means they are different

        let prey = animal1.predator ? animal2 : animal1;
        let predator = animal1.predator ? animal1 : animal2;

        console.log(`Prey is ${prey.name} and Predator is ${predator.name}`)

        prey.isDead = true;
    }

}

const fightRounds = () => {
    for (let x = 0; x < animals.length; x+=2) {
        animalFight(animals[x],animals[x+1])
    }
    animals = animals.filter(animal => animal.isDead !== true)
}

fightRounds();
// fightRounds();
// console.log(animals);






// const addWithTax = (item1, item2) => (item1 + item2) * 1.07;
// const addWithoutTax = (item1, item2) => item1 + item2;

// const justConsoleLog = (item1, item2) => {
//     console.log(`${item1} and ${item2}`);
// }

// let cat = 100;
// let dog = 200;


// const addDependingOn = (item1,item2,callback) => {
//     console.log(callback(item1,item2));
// }

// addDependingOn(cat,dog,justConsoleLog)


// let costWithTax = addWithTax(cat,dog);
// let costWithoutTax = addWithoutTax(cat,dog);

// console.log(costWithTax);
// console.log(costWithoutTax)




















// // let youngAnimals = animals.filter(animal => animal.age < 3)

// let allYoungDogs = animals.filter(animal => animal.species === 'Dog' && animal.age < 3)

// allYoungDogs = animals.filter(animal => {
//     if (animal.age < 3 && animal.species === 'Dog') {
//         return true
//     }
// })

// console.log(allYoungDogs)

// let pokemon = [
//     {name: 'Pikachu'},
//     {name: 'Charizard'},
//     {name: 'Bulbasaur'}
// ]

// // let notFainted = pokemon.filter(p => !p.isFainted)

// pokemon = pokemon.map(p => p.name)

// console.log(pokemon)

