let name = "Light";

let age = 16;

let isStudent = true;

let score = 95;

console.log(name);

console.log(age);

console.log(isStudent);

console.log(score);

console.log(typeof name);

console.log(typeof age);

console.log(typeof isStudent);

console.log(typeof score);

let price = 100;

let quantity = 3;

let total = price * quantity;

console.log(total);

function greet(name) {
    return "Hello, " + name;
}

let message = greet("Light");

console.log(message);

function calculateTotal(price, quantity) {
    return price * quantity;
}

let calculatedTotal = calculateTotal(100, 4);

console.log(calculatedTotal);

if (age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child");
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const title = document.getElementById("title");

const button = document.getElementById("change-button");

button.addEventListener("click", function () {
    title.textContent = "Operation Build - Day 9";
});

const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills);

console.log(skills[0]);

console.log(skills[2]);