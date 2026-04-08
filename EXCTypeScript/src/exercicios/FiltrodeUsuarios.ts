/*
Filtro de Usuários
Objetivo: Aplicar Interfaces e métodos de array (map).
Crie uma interface User com as propriedades: id (number), nome (string) e email (string).
Crie uma função que receba um array de objetos do tipo User.
A função deve retornar um novo array contendo apenas as strings com os nomes dos usuários.
*/

export interface User {
    id: number;
    nome: string;
    email: string;
  }
  
  export function nomesUsuarios(usuarios: User[]): string[] {
    return usuarios.map(usuario => usuario.nome);
  }
  
