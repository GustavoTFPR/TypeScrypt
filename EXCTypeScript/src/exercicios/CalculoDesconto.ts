const calculoDesconto = (valor: number, categoria: string): number => {
    if (categoria === "Eletrônicos") {
        return valor * 0.9; // 10% de desconto
    }
    if (categoria === "Vestuário") {
        return valor * 0.95; // 5% de desconto
    }
    return -1; // Categoria inválida
}

console.log(calculoDesconto(3000, "Eletrônicos")); // Saída: 2700
console.log(calculoDesconto(150, "Vestuário")); // Saída: 142.5