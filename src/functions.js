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