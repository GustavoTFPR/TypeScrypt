/*
Agrupador de Estoque
Objetivo: Manipulação de objetos e acumuladores (reduce).
Crie um array de produtos, onde cada produto tem categoria (string) e quantidade (number).
Escreva uma função que transforme esse array em um único objeto, onde as chaves são as categorias e o valor é a soma total das quantidades daquela categoria.
*/

type Produto = {
    categoria: string;
    quantidade: number;
};

const produtos: Produto[] = [
    { categoria: "frutas", quantidade: 10 },
    { categoria: "verduras", quantidade: 5 },
    { categoria: "frutas", quantidade: 7 },
    { categoria: "bebidas", quantidade: 12 },
    { categoria: "verduras", quantidade: 3 }
];

function agruparEstoque(lista: Produto[]): Record<string, number> {
    return lista.reduce<Record<string, number>>((acumulador, produto) => {
        acumulador[produto.categoria] = (acumulador[produto.categoria] || 0) + produto.quantidade;
        return acumulador;
    }, {});
}

const estoqueAgrupado = agruparEstoque(produtos);
console.log(estoqueAgrupado);


