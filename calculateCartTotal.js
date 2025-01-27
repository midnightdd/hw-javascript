function calculateCartTotal(cart) {
    let total = 0;

    // Обчислюємо загальну вартість
    for (const item of cart) {
        total += item.price * item.quantity;
    }

    // Застосовуємо знижку, якщо загальна сума більше 100
    if (total > 100) {
        total *= 0.9; // Знижка 10%
    }

    return total;
}

// Приклади використання:
const cart1 = [
    { name: "Apple", price: 1, quantity: 10 },
    { name: "Banana", price: 3, quantity: 5 },
    { name: "Milk", price: 10, quantity: 2 },
];
console.log(calculateCartTotal(cart1)); // Виведе 45

const cart2 = [
    { name: "Sushi", price: 20, quantity: 4 },
    { name: "Burger Max", price: 30, quantity: 1 },
];
console.log(calculateCartTotal(cart2)); // Виведе 99