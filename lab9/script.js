// Клас Vehicle (транспортний засіб) — це базовий клас
class Vehicle {
  constructor(brand, model) {
    this.brand = brand; // Зберігаємо назву бренду
    this.model = model; // Зберігаємо модель
  }

  displayInfo() {
    return `Brand: ${this.brand}, Model: ${this.model}`; // Виводимо інформацію
  }
}

// Клас Car (автомобіль) успадковує Vehicle
class Car extends Vehicle {
  constructor(brand, model) {
    super(brand, model); // Викликаємо конструктор батьківського класу
    this.speed = 0; // Початкова швидкість - 0
  }

  setSpeed(speed) {
    this.speed = speed; // Встановлюємо швидкість
    return this; // Дозволяє викликати методи підряд (ланцюжок)
  }

  getSpeed() {
    return this.speed; // Отримуємо поточну швидкість
  }

  clearSpeed() {
    this.speed = 0; // Скидаємо швидкість до 0
  }
}

// Клас Bike (велосипед) успадковує Vehicle
class Bike extends Vehicle {
  constructor(brand, model) {
    super(brand, model);
    this.gear = 1; // Початкова передача - 1
  }

  setGear(gear) {
    this.gear = gear; // Встановлюємо передачу
  }

  getGear() {
    return this.gear; // Отримуємо поточну передачу
  }

  clearGear() {
    this.gear = 1; // Скидаємо передачу до 1
  }
}

// Клас Truck (вантажівка) успадковує Vehicle
class Truck extends Vehicle {
  constructor(brand, model, capacity) {
    super(brand, model);
    this.capacity = capacity; // Вантажопідйомність у тоннах
    this.load = 0; // Початкове завантаження - 0
  }

  loadCargo(amount) {
    this.load += amount; // Додаємо вантаж
  }

  unloadCargo(amount) {
    this.load = Math.max(0, this.load - amount); // Вивантажуємо, не менше 0
  }

  getLoad() {
    return this.load; // Отримуємо поточне завантаження
  }
}

// Використання класу Car
const myCar = new Car("Toyota", "Camry"); // Створюємо об'єкт Car
myCar.setSpeed(100).setSpeed(150); // Встановлюємо швидкість 150
console.log(myCar.getSpeed()); // Виведе: 150
myCar.clearSpeed(); // Обнуляємо швидкість
console.log(myCar.getSpeed()); // Виведе: 0

// Використання класу Bike
const myBike = new Bike("Giant", "Mountain"); // Створюємо об'єкт Bike
myBike.setGear(3); // Встановлюємо 3 передачу
console.log(myBike.getGear()); // Виведе: 3
myBike.clearGear(); // Скидаємо передачу до 1
console.log(myBike.getGear()); // Виведе: 1

// Використання класу Truck
const myTruck = new Truck("Volvo", "FH", 10); // Створюємо вантажівку Volvo з місткістю 10 тонн
myTruck.loadCargo(5); // Завантажуємо 5 тонн
console.log(myTruck.getLoad()); // Виведе: 5
myTruck.unloadCargo(3); // Вивантажуємо 3 тонни
console.log(myTruck.getLoad()); // Виведе: 2
myTruck.unloadCargo(5); // Вивантажуємо ще 5 тонн (але не опуститься нижче 0)
console.log(myTruck.getLoad()); // Виведе: 0

// Відлік часу (таймер на 10 секунд)
const startTime = Date.now(); // Запам'ятовуємо час початку
const duration = 10000; // Час роботи таймера (10 секунд)

// Запускаємо таймер, який оновлюється щосекунди
const interval = setInterval(() => {
  const elapsedTime = Date.now() - startTime; // Розраховуємо час, що минув
  console.log(`Пройшло: ${(elapsedTime / 1000).toFixed(1)} секунд`); // Виводимо секунди

  if (elapsedTime >= duration) {
    // Якщо минуло 10 секунд
    clearInterval(interval); // Зупиняємо таймер
  }
}, 1000); // Оновлення кожну 1 секунду
