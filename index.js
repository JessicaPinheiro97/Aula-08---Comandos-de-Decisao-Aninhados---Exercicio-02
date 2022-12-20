const prompt = require("prompt-sync")();

var a1 = parseInt(prompt("Digite o ângulo 01: "));
var a2 = parseInt(prompt("Digite o ângulo 02: "));
var a3 = parseInt(prompt("Digite o ângulo 03: "));

if (a1 + a2 + a3 == 180) {
  if (a1 < 90 && a2 < 90 && a3 < 90) {
    console.log("Triângulo Acutângulo!");
  } else if (a1 == 90 || a2 == 90 || a3 == 90) {
    console.log("Triângulo Retângulo!");
  } else {
    console.log("Triângulo Obtusângulo!");
  }
}
else {
  console.log("Não é um triângulo!");
}