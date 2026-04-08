/*
Filtro de Usuários
Objetivo: Aplicar Interfaces e métodos de array (map).
Crie uma interface User com as propriedades: id (number), nome (string) e email (string).
Crie uma função que receba um array de objetos do tipo User.
A função deve retornar um novo array contendo apenas as strings com os nomes dos usuários.
*/

interface Usuario {
    id: number;
    nome: string;
    email: string;
}

function filtrarNomesUsuarios(usuarios: Usuario[]): string[] {
    return usuarios.map(usuario => usuario.nome);
}


const listaUsuarios: Usuario[] = [
    { id: 1, nome: "Ana", email: "ana@email.com" },
    { id: 2, nome: "Carlos", email: "carlos@email.com" },
    { id: 3, nome: "Beatriz", email: "beatriz@email.com" }
];

const nomes = filtrarNomesUsuarios(listaUsuarios);
console.log(nomes);



