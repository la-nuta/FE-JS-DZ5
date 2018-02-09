(function () {
    'use strict';

    class Car {
        constructor(weight, fuelTank, power) {
            this.weight = weight;
            this.fuelTank = fuelTank;
            this.power = power;
        }

        race(distance) {
            let refuelTime = 0.3 * Math.floor((this.fuelConsumption * 500) / this.fuelTank);
            let timeInHours = distance / this.maxSpeed + refuelTime;
            let hh = Math.floor(timeInHours);
            let mmValue = (timeInHours - hh) * 60;
            let mm = Math.floor(mmValue);
            let ssValue = (mmValue - mm) * 60;
            let ss = Math.floor(ssValue);
            let SSS = Math.floor((ssValue - ss) * 1000);
            return `${hh}:${mm}:${ss}.${SSS}`;
        }


        get fuelConsumption() {
            const FUELRATIO = 0.17 / 1000000;
            return this.weight * this.power * FUELRATIO + 0.009;
        }

        get timeTo100() {
            const TIMETO100RATIO = 1.61;
            return this.weight * TIMETO100RATIO / (this.power + 51);
        }

        get maxSpeed() {
            const MAXSPEEDRATIO = 0.96 * 1000;
            return MAXSPEEDRATIO * this.power / this.weight;
        }
    }

    let ferrari = new Car(1235, 120, 478);
    let mini = new Car(1475, 47, 210);
    let alfaRomeo = new Car(895, 40, 240);

    console.log('ferrari(weight 1235, fuelTank 120, power 478)');
    console.log('ferrari.fuelConsumption ' + ferrari.fuelConsumption);
    console.log('ferrari.maxSpeed ' + ferrari.maxSpeed);
    console.log('ferrari.timeTo100 ' + ferrari.timeTo100);
    console.log('ferrari.race(500) ' + ferrari.race(500));

    console.log('mini(weight 1475, fuelTank 47, power 210)');
    console.log('mini.fuelConsumption ' + mini.fuelConsumption);
    console.log('mini.maxSpeed ' + mini.maxSpeed);
    console.log('mini.timeTo100) ' + mini.timeTo100);
    console.log('mini.race(500) ' + mini.race(500));

    console.log('alfaRomeo(weight 895, fuelTank 40, power 240)');
    console.log('alfaRomeo.fuelConsumption ' + alfaRomeo.fuelConsumption);
    console.log('alfaRomeo.maxSpeed ' + alfaRomeo.maxSpeed);
    console.log('alfaRomeo.timeTo100) ' + alfaRomeo.timeTo100);
    console.log('alfaRomeo.race(500) ' + alfaRomeo.race(500));

}());