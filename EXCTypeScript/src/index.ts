import { nomesUsuarios, User } from "./exercicios/FiltrodeUsuarios.ts";
import { calculoDesconto } from "./exercicios/CalculoDesconto.ts";
import { agruparEstoque, Produto } from "./exercicios/AgrupadordeEstoques.ts";
import { buscarPorId } from "./exercicios/BuscaporID.ts";
import { mensagemStatus, Status } from "./exercicios/SistemasdePedidos.ts";

console.log("=== CalculoDesconto ===");
console.log(calculoDesconto(1000, "ELETRONICOS"));
console.log(calculoDesconto(500, "VESTUARIO"));
console.log(calculoDesconto(200, "OUTROS"));

console.log("\n=== FiltrodeUsuarios ===");
const listaUsuarios: User[] = [
  { id: 1, nome: "Ana", email: "ana@email.com" },
  { id: 2, nome: "Carlos", email: "carlos@email.com" }
];
console.log(nomesUsuarios(listaUsuarios));

console.log("\n=== AgrupadordeEstoques ===");
const estoque: Produto[] = [
  { categoria: "ELETRONICOS", quantidade: 10 },
  { categoria: "VESTUARIO", quantidade: 5 },
  { categoria: "ELETRONICOS", quantidade: 3 }
];
console.log(agruparEstoque(estoque));

console.log("\n=== BuscarporID ===");
console.log(buscarPorId(listaUsuarios, 2));
console.log(buscarPorId(listaUsuarios, 3));

console.log("\n=== SistemadePedidos ===");
console.log(mensagemStatus(Status.Pendente));
console.log(mensagemStatus(Status.Enviado));
console.log(mensagemStatus(Status.Entregue));
