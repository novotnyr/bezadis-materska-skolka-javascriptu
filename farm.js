class Animal {
    constructor(name, sound) {
        this._name = name;
        this._sound = sound;
    }

    makeSound() {
        return this.sound;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name
    }

    toString() {
        return this._name
    }
}

let animals = [
    new Animal("cow", "moo"),
    new Animal("cow", "moo, moo, moo"),
    new Animal("pig", "oink"),
];

let onlyCows = animals.filter(a => a.name === "cow")

console.log(onlyCows)
