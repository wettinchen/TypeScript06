class Coder {

    secondLanguage!: string

    constructor (
        public readonly name: string,
        public music: string,
        private age: number,
        protected language: string = "TypeScript"
    ) {
        // No body necessary
    }

    public getAge() {
        return `Hello, I am ${this.age}`
    }
}

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        // No body necessary below
        // this.computer = computer
    }

    public getLanguage() {
        return `I write ${this.language}`
    }
}