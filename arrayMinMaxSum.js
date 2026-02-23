const a = 10;
const b = 25;
const c = 15;

let largest = a;

if (b > largest) {
    largest = b;
}
if (c > largest) {
    largest = c;
}

console.log("Largest number is:", largest);