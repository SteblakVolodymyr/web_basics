// Рядок
var varString = "45";
varNumber = Number(varString); // Перетворення ряядка на число
// Число
var varNumber = 15;
varString = String(varNumber); // Перетворення числа на рядок
// Виведення результатів
console.log(varString);  // "15"
console.log(typeof varString);  // "string"

console.log(varNumber);  // 45
console.log(typeof varNumber);  // "number"
var varString = "42"; // рядок
var varNumber = 42;   // число

// Використання операторів порівняння
console.log(varString == varNumber);  // true (порівняння з приведенням типів)
console.log(varString === varNumber); // false (строге порівняння без приведення типів)

function encryptCaesar(number, shift) {
    return number + shift; // Зсуваємо число
}
function decryptCaesar(encryptedNumber, shift) {
    return encryptedNumber - shift; // Відсуваємо назад
}

// Приклад
let originalNumber = 47;
let shift = 6;

let encrypted = encryptCaesar(originalNumber, shift);
let decrypted = decryptCaesar(encrypted, shift);

console.log(`Зашифровано: ${encrypted}, Розшифровано: ${decrypted}`);

var foo = 1; 
function bar() { 
    if (!foo) { 
        var foo = 10; 
    } 
    alert(foo); 
} 
bar();

// Масив
var varArray = [1, 2, 3, 4, 5];

// Об'єкт
var varObject = {
    name: "Іван",
    age: 30
};

// Функція
var varFunction = function() {
    return "Це функція";
};

// Виведення типів змінних
console.log(typeof varString);  // "string"
console.log(typeof varNumber);  // "number"
console.log(typeof varArray);    // "object"
console.log(typeof varObject);   // "object"
console.log(typeof varFunction);  // "function"
