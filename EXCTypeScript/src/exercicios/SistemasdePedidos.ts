/*
Sistema de Pedidos com Enum
Objetivo: Padronização de estados do sistema.
Crie um enum Status com os valores: Pendente, Enviado, Entregue.
Crie uma função que receba esse Enum como parâmetro e retorne uma mensagem personalizada para cada status (ex: "Seu pedido já saiu para entrega!").
*/


enum Status {
        Pendente = "Pendente",
        Enviado = "Enviado",
        Entregue = "Entregue"
}

function mensagemStatus(status: Status): string {
        switch (status) {
case Status.Pendente:
        return "Seu pedido está pendente e será processado em breve.";
case Status.Enviado:
        return "Seu pedido já saiu para entrega!";
case Status.Entregue:
        return "Seu pedido foi entregue com sucesso.";
default:
        return "Status desconhecido.";
}
}
console.log(mensagemStatus(Status.Pendente));  
console.log(mensagemStatus(Status.Enviado));   
console.log(mensagemStatus(Status.Entregue));
