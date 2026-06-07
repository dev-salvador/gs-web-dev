const perguntas = [
{
    pergunta:"Qual componente principal foi usado?",
    resposta:"Arduino Uno"
},
{
    pergunta:"Qual sensor foi utilizado?",
    resposta:"LDR"
},
{
    pergunta:"O projeto reduz o quê?",
    resposta:"Consumo de energia"
},
{
    pergunta:"O projeto é inspirado em qual área?",
    resposta:"Tecnologias espaciais"
},
{
    pergunta:"Pode ser aplicado na agricultura?",
    resposta:"Sim"
},
{
    pergunta:"O projeto monitora dados?",
    resposta:"Sim"
},
{
    pergunta:"Utiliza IoT?",
    resposta:"Sim"
},
{
    pergunta:"Promove sustentabilidade?",
    resposta:"Sim"
},
{
    pergunta:"Evita desperdício energético?",
    resposta:"Sim"
},
{
    pergunta:"Melhora sincronização?",
    resposta:"Sim"
}
];

const quiz = document.getElementById("quiz");

perguntas.forEach((p, i) => {

    quiz.innerHTML += `
        <div class="pergunta">

            <h3>${p.pergunta}</h3>

            <input
                type="text"
                id="resposta${i}"
            >

            <p
                id="feedback${i}"
                class="feedback"
            ></p>

        </div>
    `;
});

document
.getElementById("corrigir")
.addEventListener("click", () => {

    let pontos = 0;

    perguntas.forEach((p, i) => {

        const input =
        document.getElementById(`resposta${i}`);

        const feedback =
        document.getElementById(`feedback${i}`);

        const respostaUsuario =
        input.value.trim().toLowerCase();

        const respostaCorreta =
        p.resposta.toLowerCase();

        if (respostaUsuario === respostaCorreta) {

            pontos++;

            input.style.border =
            "3px solid #4CAF50";

            feedback.innerHTML =
            "✓ Resposta correta";

            feedback.style.color =
            "#4CAF50";

        } else {

            input.style.border =
            "3px solid #ff4d4d";

            feedback.innerHTML =
            `Sua resposta: "${input.value}"<br>
            Resposta correta: "${p.resposta}"`;

            feedback.style.color =
            "#ff4d4d";
        }
    });

    document
    .getElementById("resultado")
    .innerHTML =
    `Você acertou ${pontos} de ${perguntas.length} perguntas`;
});