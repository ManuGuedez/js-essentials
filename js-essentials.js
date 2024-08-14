// 0 - Bajar repo, hacer hola mundo console.log
console.log("Hola mundo");

// 2 - Funciones:
// add(firstOperator, secondOperator),
// subtract(firstOperator, secondOperator),
// divide(firstOperator, secondOperator),
// multiply(firstOperator, secondOperator)

function add(firstOperator, secondOperator) {
  return firstOperator + secondOperator;
}

let suma = (firstOperator, secondOperator) => firstOperator + secondOperator; // de otra forma

function subtract(firstOperator, secondOperator) {
  return firstOperator - secondOperator;
}

function divide(firstOperator, secondOperator) {
  return firstOperator / secondOperator;
}

function multiply(firstOperator, secondOperator) {
  return firstOperator * secondOperator;
}

// 3 - Funcion
// dress(temperature, isRaining)
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶
function dress(temperature, isRaining) {
    if(isRaining) {
        return "llevar paraguas";
    } 
    if (temperature < 10) {
        return "ir en auto";
    } else if (temperature > 30) {
        return "ir de short";
    } else if (temperature == 30) {
        return "usar lentes";
    }
    return "hace lo que quieras";
}

// 4 - Funcion
// calculate(operation, firstOperator, secondOperator)
function calculate(operation, firstOperator, secondOperator) {
    switch (operation) {
        case "+":
            return add(firstOperator, secondOperator);
        case "-":
            return subtract(firstOperator, secondOperator);
        case "/":
            return divide(firstOperator, secondOperator);
        case "*":
            return multiply(firstOperator, secondOperator);
    }
}

// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])
function eating(name, foods) {
    for(let index = 0; index < foods.length; index++) {
        console.log(`${name} is eating ${foods[index]}`);
    }
}

// 6 - Funcion
// finalCountDown(count)
function finalCountDown(cont) {
    while (cont >= 0) {
        console.log(cont);
        cont--;
    }
}


// 7 - Funcion
// getGrade(score)
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S
function getGrade(score) {
    if(score>= 0 && score <=40) {
        return "D"
    } else if(score >= 41 && score <= 60) {
        return "R"
    } else if(score >= 61 && score <= 74) {
        return "B"
    } else if(score >= 75 && score <=84) {
        return "BMB"
    } else if(score >= 85 && score <= 96) {
        return "MB"
    } else if(score >= 97 && score <= 100) {
        return "S"
    }
}

// 8 - Funcion
// fillCart(person, articlesCollection)
// it should modify person's cart in order to add the the new collection of articles

let cartArticlesCollection= [{article: '👟', amount: 1, price: 25}];
let pepe = {name: 'Pepe', cart: [{article: '🍟', amount: 3, price: 20}]}
function fillCart(person, articlesCollection) {
    person.cart = [person.cart, ...articlesCollection]; // agrego el los nuevos articulos 
}

fillCart(pepe, cartArticlesCollection);
console.log(pepe.cart);

// 9 - Funcion
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})
function countBanana(inventory) {
    let result = 0;
    for(let i = 0; i < inventory.length; i++) {
        if (inventory[i] == '🍌' ) {
            result++;
        }
    }
    return result;
}

let inventory = ['🥑','🍌','🥭', '🍌']
console.log(countBanana(inventory))

// 10 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)

function getTotal(inventory) {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        total += inventory[i].price * inventory[i].quantity; 
    }
    return total
}

let inventory2 = [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}]
console.log(getTotal(inventory2))