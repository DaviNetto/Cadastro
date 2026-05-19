  console.log ("Testes de Funções");

        function numeroduplicado (numero) {
            return numero * 2;
        }

        console.log(numeroduplicado(10))
        let num = 15
        console.log(numeroduplicado(num))

        console.error("isso não é um numero");   
        console.warn("testando o Warn")

        const Euteamo = (" eu amo mesmo")

        console.warn("Vc sabe ne" + Euteamo )
        
         let entrada = "150.7";
         let numero = parseFloat(entrada);

         if (numero > 10) {
            console.log("o numero é maior que 10!");
        } else {
            console.log("o numero é menor ou igual a 10.");
        }

        console.warn("vamos fazer uma soma simples de 5.5 + 2.5")

        let n1 = parseFloat("5.5");
        let n2 = parseFloat("2.5");

        let soma = n1 + n2 
        console.log(soma);

        function processar() {
        const input = document.getElementById("campoNumero");

        const valor = parseFloat(input.value);

        const display = document.getElementById("resultado");

        if (isNaN(valor)) {
        display.innerText = "Por favor, digite um número.";
        display.style.color = "red";
    } else {
        display.innerText = "Resultado: " + (valor * 2);
        display.style.color = "black";
    }
}

        let numerosDigitados = [];

for (let i = 0; i < 3; i++) {
    let entrada = prompt(`Digite o ${i+1}º número:`);
    numerosDigitados.push(parseFloat(entrada));
}

console.log("Sua lista de números:", numerosDigitados);
