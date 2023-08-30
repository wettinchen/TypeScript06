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

const Dave = new Coder("Dave", "Rock", 42)
console.log(Dave.age)
console.log(Dave.language)