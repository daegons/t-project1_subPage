class Animal {
  constructor(name) {
    this.name = name;
  }
  get_message() {
    return "하이";
  }
}
console.log(Animal);

Animal.prototype.age = 10;
console.log(Animal);

const daegon = new Animal("daegon");

console.log(daegon);
