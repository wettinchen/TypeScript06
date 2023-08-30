"use strict";
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        // No body necessary
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "Guitar");
console.log(Page.play("strums"));
