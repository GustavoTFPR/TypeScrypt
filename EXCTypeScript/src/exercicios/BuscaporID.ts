/*
Busca por ID com Generics
Objetivo: Compreender a abstração com Generics.
Crie uma função genérica chamada buscarPorId<T>.
Ela deve receber um array de objetos do tipo T (onde T deve possuir obrigatoriamente a propriedade id) e um id numérico.
A função deve retornar o objeto encontrado ou undefined.
*/


export interface Identificavel {
    id: number;
  }
  
  export function buscarPorId<T extends Identificavel>(array: T[], id: number): T | undefined {
    return array.find(item => item.id === id);
  }
  
