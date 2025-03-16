import { Cliente } from './cliente'; // Corrigido!

export class Pedido {
    client: Cliente;
    produto: string;
    valor: number;

    constructor(cliente: Cliente, produto: string, valor: number) {
        this.client = cliente;
        this.produto = produto;
        this.valor = valor;
    }

    exibirPedido(): string {
        return `Cliente: ${this.client.nome}, Produto: ${this.produto}, Valor: R$${this.valor}`;
    }
}

// Criando um cliente e um pedido (FORA da classe)
const cliente1 = new Cliente("Roberto"); // Supondo que Cliente tem um segundo parâmetro
const pedido1 = new Pedido(cliente1, "PC GAMER", 12313);

console.log(pedido1.exibirPedido()); // Testando a saída
