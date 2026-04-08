/*
Filtro de Usuários
Objetivo: Aplicar Interfaces e métodos de array (map).
Crie uma interface User com as propriedades: id (number), nome (string) e email (string).
Crie uma função que receba um array de objetos do tipo User.
A função deve retornar um novo array contendo apenas as strings com os nomes dos usuários.
*/

interface User {
    id: number;
    nome: string;
    email: string;
}

function filtrarNomesUsuarios(usuarios: User[]): string[] {
    for (const usuario of usuarios) {
        if (!usuario.nome || typeof usuario.nome !== "string") {
            throw new Error(`Usuário com id ${usuario.id} tem um nome inválido.`);
        }
    }
    return usuarios.map(usuario => usuario.nome);
}

const listaUsuarios: User[] = [
    { id: 1, nome: "Ana", email: "ana@email.com" },
    { id: 2, nome: "Carlos", email: "carlos@email.com" },
    { id: 3, nome: "Beatriz", email: "beatriz@email.com" }
];

const nomes = filtrarNomesUsuarios(listaUsuarios);
console.log(nomes);



