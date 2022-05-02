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