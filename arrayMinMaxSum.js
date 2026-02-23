const numbers = [12, 5, 8, 130, 44];

let smallest = numbers[0];
let largest = numbers[0];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    sum += numbers[i];
}

console.log("Smallest:", smallest);
console.log("Largest:", largest);
console.log("Sum:", sum);