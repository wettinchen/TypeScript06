interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    constructor(
        public name: string,
        public instrument: string
    ) {
        // No body necessary
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist("Jimmy", "Guitar")
console.log(Page.play("strums"))