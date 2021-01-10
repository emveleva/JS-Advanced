class Parking {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
        this.currentWorkload = 0;

    }
    addCar(carModel, carNumber){
        if (this.currentWorkload >= this.capacity) {
            throw new Error("Not enough parking space.");
        } 
        let currentCar = {
                carModel, 
                carNumber,
                payed: false
            }
            this.vehicles.push(currentCar);
            this.currentWorkload++;

            return `The ${carModel}, with a registration number ${carNumber}, parked.`
        
        
    }
    removeCar(carNumber){
        let carToBeRemoved = this.vehicles.find(x => x.carNumber == carNumber);
    
        if (!carToBeRemoved){
            throw new Error("The car, you're looking for, is not found.")
        }
        if (carToBeRemoved.payed === false){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        } 
        let index = this.vehicles.indexOf(carToBeRemoved);
        this.vehicles.splice(index, 1);
        this.currentWorkload--;
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber){
        let carToPay = this.vehicles.find(x => x.carNumber == carNumber);
    
        if (!carToPay){
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (carToPay.payed === true){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        carToPay.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber = undefined){
        if (!carNumber){
            let emptySlots = this.capacity - this.currentWorkload;
            let result = `The Parking Lot has ${ emptySlots } empty spots left.`
            let sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            
            sorted.forEach(element => {
                result += '\n';
                result +=  `${element.carModel} == ${element.carNumber} - `
                if (element.payed === false){
                    result += `Not payed.`
                } else {
                    result += `Has payed.`
                }
            });
            return result;
        } else {
            let currentCarInfo = this.vehicles.find(x => x.carNumber == carNumber);
            let result = `${currentCarInfo.carModel} == ${carNumber} - `;
                if (currentCarInfo.payed === false){
                    result += `Not payed.`
                } else {
                    result += `Has payed.`
                }
            return result;
        }

    }
    
}

const parking = new Parking(55);

console.log(parking.addCar("Skoda", "TX3691CA"));
console.log(parking.addCar("Skoda", "TX3691CA"));

console.log(parking.addCar("Alfa", "TX3692CA"));
console.log(parking.addCar("Volvo t600", "TX3693CA"));

console.log(parking.pay("TX3693CA"));
console.log(parking.getStatistics());
// console.log(parking.removeCar("TX3691CA"));
// console.log(parking.pay("TX3691CA"));
// console.log(parking.removeCar("TX36988CA"));


