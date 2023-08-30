class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        // Next line is not necessary 
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps("John")
const Steve = new Peeps("Steve")
const Amy = new Peeps("Amy")

console.log(John.id)
console.log(Steve.id)
console.log(Amy.id)
console.log(Peeps.count)