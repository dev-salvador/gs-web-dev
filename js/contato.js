const form =
document.getElementById("formContato");

const feedbacksDiv =
document.getElementById("feedbacks");

let feedbacks =
JSON.parse(
    localStorage.getItem("feedbacks")
) || [];

function renderizarFeedbacks(){

    feedbacksDiv.innerHTML = "";

    feedbacks.forEach((item)=>{

        feedbacksDiv.innerHTML += `
            <div class="feedback-card">

                <strong>
                    ${item.nome}
                </strong>

                <p>
                    ${item.mensagem}
                </p>

            </div>
        `;
    });
}

renderizarFeedbacks();

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome =
    document
    .getElementById("nome")
    .value
    .trim();

    const mensagem =
    document
    .getElementById("mensagem")
    .value
    .trim();

    if(
        nome === "" ||
        mensagem === ""
    ){
        alert(
            "Preencha todos os campos."
        );
        return;
    }

    feedbacks.push({

        nome: nome,

        mensagem: mensagem

    });

    localStorage.setItem(
        "feedbacks",
        JSON.stringify(feedbacks)
    );

    form.reset();

    renderizarFeedbacks();
});