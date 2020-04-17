function CoffeeMaker(){}

CoffeeMaker.prototype.on = function(){
    console.log('Hello! I will make you a good coffee!')
}
CoffeeMaker.prototype.off = function(){
    console.log('Bye! Have a good day!')
}

function DripCoffeeMaker(){}

DripCoffeeMaker.prototype = Object.create(CoffeeMaker.prototype)
DripCoffeeMaker.prototype.lotCoffee = function(){
    console.log('You will have a lot of coffee. Share it with someone!')
}
DripCoffeeMaker.prototype.anyCoffeGrounds = function(){
    console.log('A good cogge with any coffee grounds')
}

function RoastCoffeeMaker(){}
RoastCoffeeMaker.prototype = Object.create(CoffeeMaker.prototype)
RoastCoffeeMaker.prototype.softCoffee = function(){
    console.log("I make coffee under pressure. It's always so soft")
}
RoastCoffeeMaker.prototype.perfectEspresso = function(){
    console.log('A few minutes for the perfect espresso')
}

function CoffeeMachine(){}
CoffeeMachine.prototype = Object.create(CoffeeMaker.prototype)
CoffeeMachine.prototype.softCoffee = function(){
    RoastCoffeeMaker.prototype.softCoffee()
}
CoffeeMachine.prototype.deliciousCoffee = function(){
    console.log('One side makes authentic 15-bar espresso, cappuccino and latte, while the other side brews exceptionally delicious coffee.')
}

const COFFEE = new CoffeeMachine()
COFFEE.softCoffee()
console.log(COFFEE)