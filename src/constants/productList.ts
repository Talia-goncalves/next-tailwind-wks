export const productList = [
  {
    id:1,
    nome: "Mouse Razer",
    preco: 149.9,
    preco_promocional: null,
    quantidade: 15,
    categorias: ["Periféricos", "Computadores"],
    avaliacao: 4.5,
  },
  {
    id:2,
    nome: "Teclado Logitech",
    preco: 350.9,
    preco_promocional: 259.9,
    quantidade: 25,
    categorias: ["Periféricos", "Computadores"],
    avaliacao: 4.84,
  },
  {
    id:3,
    nome: "Geladeira Philco",
    preco: 4500.9,
    preco_promocional: 2599.9,
    quantidade: 4,
    categorias: ["Cozinha", "Eletrodomesticos"],
    avaliacao: 4.5,
  }
];

console.log(productList[0].nome);
