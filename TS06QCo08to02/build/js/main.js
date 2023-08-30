"use strict";
class Coder {
    constructor(name, music, age, language = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
        // No body necessary
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge);
