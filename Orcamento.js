/// <reference path="Financeiro.ts" />
var orcamento = new Financeiro.Orcamento(5000, ["Notebook", "Monitor", "Teclado"]);
console.log(orcamento.exibirOrcamento());
var imposto = Financeiro.calcularImposto(5000, 10);
var desconto = Financeiro.calcularDesconto(5000, 5);
console.log("Imposto: R$".concat(imposto));
console.log("Desconto: R$".concat(desconto));
