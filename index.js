// Função que recebe um produto e retorna suas informações
function Payments(produto) {
    console.log("Nome: ".concat(produto.nome));
    console.log("Pre\u00E7o: R$".concat(produto.preco));
    console.log("Forma de Pagamento: ".concat(produto.formaPagamento));
    return produto;
}
// Criando um exemplo de produto
var produto1 = {
    nome: 'Camiseta',
    preco: 29.99,
    categoria: 1,
    formaPagamento: 'cartão'
};
// Chamando a função Payments com o produto
console.log(Payments(produto1));
