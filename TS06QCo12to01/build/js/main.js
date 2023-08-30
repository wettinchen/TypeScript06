"use strict";
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        // Next line is not necessary 
        // this.name = name
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
