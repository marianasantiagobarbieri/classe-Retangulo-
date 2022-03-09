class Retangulo{
  constructor(altura, largura){
    this.altura = altura;
    this.largura = largura;
  }

  
  calcularArea(){
   return this.altura * this.largura
  }

  area(){
    return this.calcularArea();
  }
  
}

let quadrado = new Retangulo(10, 10);
let retangulo = new Retangulo(30, 60);
let retangulo = new Retangulo(20, 40);

console.log(quadrado.calcularArea())
console.log(retangulo.calcularArea())
