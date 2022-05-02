// const Asmuo = function(a, b, c){
//   this.vardas = a;
//   this.pavarde = b;
//   this.amzius = c;
//   this.pasisveikinti = function(vardas){
//     console.log(`Labas ${vardas}, mano vardas ${this.vardas}.`);
//     //console.log("Labas " + vardas + ", mano vardas " + this.vardas + ".");
//   }
// }

class Asmuo{
  constructor(a, b, c) {
    this.vardas = a;
    this.pavarde = b;
    this.amzius = c;
    this.pilnasVardas = this.vardas + " " + this.pavarde;
  }
  pasisveikinti = function (vardas) {
    console.log(`Labas ${vardas}, mano vardas ${this.vardas}.`);
    return this.pilnasVardas;
    //console.log("Labas " + vardas + ", mano vardas " + this.vardas + ".");
  };
}

/* Užduotys */

// 1
class Car{
  constructor(name, year){
    this.name = name;
    this.year = year;
    this.helloCar = `Labas, čia mano mašina ${this.name} ir ji buvo pagaminta ${this.year} metais.`;
  }
  age = () => {
    // let data = new Date();
    // data = data.getFullYear();
    // let amzius = data - this.year;
    // return amzius;
    return new Date().getFullYear() - this.year;
  }
}
const manoMasina = new Car("Fiat", "2001");
console.log(manoMasina);
console.log(manoMasina.age());

// 2
class Rectangle{
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.color = `#${Math.floor(Math.random()*16777215).toString(16)}`; // hex
    //this.color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`; // rgb
  }
  area = () => {
    return this.width * this.height;
  }
  perimeter = () => {
    return this.width*2 + this.height*2;
  }
}
const manoKvadratas = new Rectangle(10, 12);
console.log(manoKvadratas);
console.log(manoKvadratas.area());
console.log(manoKvadratas.perimeter());