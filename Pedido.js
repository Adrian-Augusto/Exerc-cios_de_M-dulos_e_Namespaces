"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var cliente_1 = require("./cliente"); // Corrigido!
var Pedido = /** @class */ (function () {
    function Pedido(cliente, produto, valor) {
        this.client = cliente;
        this.produto = produto;
        this.valor = valor;
    }
    Pedido.prototype.exibirPedido = function () {
        return "Cliente: ".concat(this.client.nome, ", Produto: ").concat(this.produto, ", Valor: R$").concat(this.valor);
    };
    return Pedido;
}());
exports.Pedido = Pedido;
// Criando um cliente e um pedido (FORA da classe)
var cliente1 = new cliente_1.Cliente("Roberto"); // Supondo que Cliente tem um segundo parâmetro
var pedido1 = new Pedido(cliente1, "PC GAMER", 12313);
console.log(pedido1.exibirPedido()); // Testando a saída
