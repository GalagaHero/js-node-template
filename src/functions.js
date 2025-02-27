// Test 1

const order = {
    price: 10,
    quantity: 2
}
function calculateTotal(object) {
    return object.price * object.quantity;
}

console.log(calculateTotal(order)) // 20