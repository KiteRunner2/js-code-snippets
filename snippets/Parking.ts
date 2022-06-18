class Parking {
  parkingSize: number;
  parking: Map<string, true>;
  constructor(parkingSize: number) {
    this.parkingSize = parkingSize;
    this.parking = new Map();
  }

  get takenSpaces() {
    return this.parking.size;
  }

  get freeSpaces() {
    return this.parkingSize - this.takenSpaces;
  }

  get canPark() {
    return this.freeSpaces > 0;
  }

  parkCar(carRegistration: string) {
    if (this.canPark) {
      this.parking.set(carRegistration, true);
    } else throw Error("Parking is full");
  }

  removeCar(carRegistration: string) {
    this.parking.delete(carRegistration);
  }
}

const parking = new Parking(3);

try {
  parking.parkCar("a");
  parking.parkCar("B");
  parking.parkCar("C");
  parking.parkCar("C");
} catch (err) {
  console.log(err);
}

parking.removeCar("C");

console.log(`Currently occupied spaces: ${parking.takenSpaces}`);
console.log(`Free spaces: ${parking.freeSpaces}`);
