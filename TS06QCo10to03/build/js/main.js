"use strict";
class Coder {
    constructor(name, music, age, language = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const Dave = new Coder("Dave", "Rock", 42);
