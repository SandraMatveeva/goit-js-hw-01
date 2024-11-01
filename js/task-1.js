// totalPrice - вартість усіх замовлених дроїдів
// quantity - кількість замовлених дроїдів
// pricePerDroid - число, що містить вартість одного дроїда

// Оголошуємо функцію makeTransaction
function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  // Повертаємо рядок з повідомленням про покупку ремонтних дроїдів
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
