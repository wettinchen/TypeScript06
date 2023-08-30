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
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        // No body necessary below
        // this.computer = computer
    }
    getLanguage() {
        return `I write ${this.language}`;
    }
}
