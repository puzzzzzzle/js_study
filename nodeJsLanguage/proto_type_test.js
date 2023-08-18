function Human(name, age) {
    this.name = name
    this.age = age
}

Human.prototype.hello = function () {
    console.log(`hello from ${this.name}`)
}

let p = new Human("ttt", 42)
p.hello()

function Student(name, age, school) {
    Human.call(this, name, age)
    this.school = school
    // function 也能放在这里实现, 但是: 每次new 对象, 都会创建一个函数实体, 比较浪费
    this.wastefulFunc = function () {
        console.log("this type is wasteful")
    }
}

Student.prototype.hello = function () {
    console.log(`student hello from ${this.name}`)
}
Student.prototype.speak = function (world) {
    console.log(`student ${this.name} speak ${world}`)
}

// 使用new标准创建
let s = new Student("sss", 11, "school1")
s.hello()
s.speak("aaaaa")
s.wastefulFunc()

// 手动说明下new的原理, 看着和lua很像
let s2 = new Object()
s2.__proto__ = Student.prototype
Student.call(s2, "s2", "12", "shc2")
s2.hello()
s2.speak("s2 aaa")

// 几乎没区别, {} 可能更直接些?
let s3 = {}
s3.__proto__ = Student.prototype
Student.call(s3, "s3", "12", "shc3")
s3.hello()
s3.speak("s3 aaa")