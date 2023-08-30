class Coder {

    secondLanguage!: string

    constructor (
        public readonly name: string,
        public music: string,
        private age: number,
        protected language: string
    ) {
        // No body necessary
    }
}

const Dave = new Coder("Dave", "Rock", 42, "TypeScript")