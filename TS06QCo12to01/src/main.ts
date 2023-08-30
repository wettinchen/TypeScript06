class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        // Next line is not necessary 
        // this.name = name
        this.id = ++Peeps.count
    }
}