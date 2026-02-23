const str = "Hello World";
let vowels = 0;
let consonants = 0;
const vowelCount = {};

const lowerStr = str.toLowerCase();

for (let i = 0; i < lowerStr.length; i++) {
    const ch = lowerStr[i];

    if (ch >= 'a' && ch <= 'z') {
        if ("aeiou".includes(ch)) {
            vowels++;
            vowelCount[ch] = (vowelCount[ch] || 0) + 1;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
console.log("Vowel Occurrence:", vowelCount);