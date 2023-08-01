// ---------------------------------------- Assignment: Ninja ----------------------------------------

//Example Ouputs:

//Create a Ninja class
//add an attribute: name
//add an attribute: health - give a default value of 90
//add a attribute: speed - give a default value of 3
//add a attribute: strength - give a default value of 3
//add a method: sayName() - This should log that Ninja's name to the console
//add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
//add a method: drinkSake() - This should add +10 Health to the Ninja


//pair programming with Richard, Anthony, Eric, Viviana, Kye

class Ninja{
    constructor (name, health = 90, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`The ninja's name is ${this.name}.`)
        return this;
    }
    showStats(){
        console.log(`The ninja's name is ${this.name}.`)
        console.log(`The ninja's health is ${this.health}.`)
        console.log(`The ninja's speed is ${this.speed}.`)
        console.log(`The ninja's strength is ${this.strength}.`)
        return this;
    }
// pair programming with Eric and Richard for making this a table
    //showStats(){
    //     console.table(this)
    // }
    drinkSake(){
        this.health +=10;
        console.log(`Ninja's updated health is ${this.health}`)
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
//could also be written as: 
ninja1.sayName().showStats().drinkSake().showStats();

