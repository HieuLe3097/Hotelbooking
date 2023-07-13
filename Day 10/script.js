const car = {
    brand: "Honda",
    year: 2023,
    color: "red"
}
console.log(car.brand)

car.color = 'blue'
console.log(car)

// delete car.year
// console.log(car)

const carPrice = {
    price: 10000
}

const carDetailInfo = Object.assign(car, carPrice)
console.log(carDetailInfo)

function sayHello() {
    console.log("Hello")
    console.log("World")
}
sayHello()

// console.log(text)
// var text = 'this is a text'

doSomething()
function doSomething() {
    console.log(action)
    var action = 'I do homework'
}

function sayHello(name) {
	console.log("Hello " + name + "! Nice to meet you");
}

sayHello("Alice") // "Hello Alice! Nice to meet you"
sayHello("Bob") // "Hello Bob! Nice to meet you"

function sum(x, y) {
	console.log(x, y)
}

sum(1, 2) // 3
sum(3, 4) // 7

function sayHello(name) {
    console.log("Hello, I'm " + name)
    console.log(`Hello, I'm ${name}   `)
}
sayHello('Hieu')

function sum(x, y) {
    // let sum = x + y
    // console.log(sum)
    console.log(`${x + y}`)
}
sum(3, 4)
sum(2, 9)



function sum(x, y) {
    return x + y // 6
    
}

function average(x, y) {
    let result = sum(x, y)/2 // 3
    return result
}

const x = average(2, 4) // 3
console.log(x)
