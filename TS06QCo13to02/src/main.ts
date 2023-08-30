class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(element => typeof element === "string")) {
            this.dataState = value
            return
        } else throw new Error("Parameter is not an array of strings")

    }
}

const MyBands = new Bands()
MyBands.data = ["Neil Young", "Led Zep"]
console.log(MyBands.data)
MyBands.data = [...MyBands.data, "ZZ Top"]
console.log(MyBands.data)
MyBands.data = ["Van Halen", 5150]