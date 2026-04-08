/*
Busca por ID com Generics
Objetivo: Compreender a abstração com Generics.
Crie uma função genérica chamada buscarPorId<T>.
Ela deve receber um array de objetos do tipo T (onde T deve possuir obrigatoriamente a propriedade id) e um id numérico.
A função deve retornar o objeto encontrado ou undefined.
*/


interface Identificavel {
    id: number;
}


function buscarPorId<T extends Identificavel>(lista: T[], id: number): T | undefined {
    return lista.find(item => item.id === id);
}


interface User extends Identificavel {
    nome: string;
    email: string;
}

const usuarios: User[] = [
    { id: 1, nome: "Ana", email: "ana@email.com" },
    { id: 2, nome: "Carlos", email: "carlos@email.com" },
    { id: 3, nome: "Beatriz", email: "beatriz@email.com" }
];

const usuarioEncontrado = buscarPorId(usuarios, 2);
console.log(usuarioEncontrado);
