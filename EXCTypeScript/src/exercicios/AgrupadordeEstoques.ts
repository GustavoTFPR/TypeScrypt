/*
Agrupador de Estoque
Objetivo: Manipulação de objetos e acumuladores (reduce).
Crie um array de produtos, onde cada produto tem categoria (string) e quantidade (number).
Escreva uma função que transforme esse array em um único objeto, onde as chaves são as categorias e o valor é a soma total das quantidades daquela categoria.
*/

export interface Produto {
    categoria: string;
    quantidade: number;
  }
  
  export function agruparEstoque(produtos: Produto[]): Record<string, number> {
    return produtos.reduce((acc, produto) => {
      acc[produto.categoria] = (acc[produto.categoria] || 0) + produto.quantidade;
      return acc;
    }, {} as Record<string, number>);
  }
  


