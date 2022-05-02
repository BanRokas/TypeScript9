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