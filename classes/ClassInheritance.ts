class Vehicle{
    wheels: number;
    power: number;
    speed: number = 0;
    constructor(wheels:number, power:number){
        this.wheels = wheels;
        this.power = power;
    }
    accelerate(time: number):void{
        this.speed = this.speed + 0.5 * this.power * time
    }
}

const myVehicle: Vehicle = new Vehicle(4, 200);
myVehicle.accelerate(10);
console.log(myVehicle.speed);