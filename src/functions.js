// Test 1

const order = {
    price: 10,
    quantity: 2
}
function calculateTotal(object) {
    return object.price * object.quantity;
}

console.log(calculateTotal(order)) // 20

// --------------------------------------
// Test 2

function formatUsername(firstName, lastName) {
    return `${lastName}, ${firstName}`;
}

console.log(formatUsername('John', 'Doe')) // "Doe, John"

// --------------------------------------
// Test 3

function combineStrings(firstWord, secondWord) {
    return `${firstWord} ${secondWord}`
}

console.log(combineStrings('Hello', 'World')) // "Hello World"

// --------------------------------------
// Test 4

const cart = {
    price: 100,
    tax: 0.07
}
function calculateCartTotal(object) {
    return object.price + (object.price * object.tax)
}

console.log(calculateCartTotal(cart)) // 107

// --------------------------------------
// Test 5

const nameInfo = {
    firstName: 'John',
    lastName: 'Doe'
}
function buildFullName(object) {
    return `${object.firstName} ${object.lastName}`;
}

console.log(buildFullName(nameInfo)) // "John Doe"

// --------------------------------------
// Test 6

const character = {
    name: 'Hero',
    weapon: 'Sword',
    level: 1
}
function createCharacterDescription(object) {
    return `Level ${object.level} ${object.name} wielding a ${object.weapon}`
}

console.log(createCharacterDescription(character)) // "Level 1 Hero wielding a Sword"