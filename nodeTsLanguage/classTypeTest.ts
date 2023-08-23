class Human {
    // private
    static newCount = 0;
    age = 10;
    name = "";

    constructor(name: string, age = 10) {
        this.name = name
        this.age = age
        Human.newCount++
    }

    hello() {
        console.log(`hello from ${this.name}`)
    }

    static get count() {
        return this.newCount
    }
}

let h = new Human("aaa", 11)
h.hello()
let h1 = new Human("bbb")
h1.hello()
console.log(`curr created count ${Human.count}`)

class Student extends Human {
    school: string;

    constructor(name: string, age: number, school: string) {
        super(name, age)
        this.school = school
    }

    hello() {
        console.log(`hello from student ${this.name} ${this.school}`)
    }
}

let s = new Student("sss", 111, "sch1")
s.hello()
console.log(`curr created count ${Human.count}`)
console.log(`curr created count ${Student.count}`)


class Data {
    d1 = "sss"
    d2: string = 'sss'
    d3 = 11
}

let d = new Data()
