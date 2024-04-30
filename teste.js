function verificarPrioridades(prioridades) {
    if (
        prioridades.includes("Deus") &&
        prioridades.includes("Família") &&
        prioridades.includes("Amigos verdadeiros") &&
        prioridades.indexOf("Deus") < prioridades.indexOf("Família") &&
        prioridades.indexOf("Família") < prioridades.indexOf("Amigos verdadeiros")
    ) {
        return "Você tem tudo que precisa!";
    } else {
        return "Erro: Prioridades ausentes ou na ordem errada.";
    }
}

// Exemplo de uso:
const minhasPrioridades = ["Família", "Deus", "Amigos verdadeiros"];
console.log(verificarPrioridades(minhasPrioridades)); // Saída: Erro: Prioridades ausentes ou na ordem errada.

const minhasPrioridadesCorretas = ["Deus", "Família", "Amigos verdadeiros"];
console.log(verificarPrioridades(minhasPrioridadesCorretas)); // Saída: Você tem tudo que precisa!
