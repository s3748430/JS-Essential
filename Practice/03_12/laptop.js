class Laptop {
  constructor(
    //define parameter
    name,
    brand,
    color,
    weight,
    model,
    power,
    strapLengthL,
    strapLengthR
  ) {
    //define properties
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.model = model;
    this.power = power;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
  }
  // add methods
  togglePower(powerStatus) {
    this.power = powerStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

export default Laptop;
