const btnTema =
document.getElementById("btnTema");

const dropdown =
document.getElementById("temaDropdown");

btnTema.addEventListener("click", (e) => {

    e.preventDefault();

    dropdown.classList.toggle("ativo");
});

function trocarTema(tema){

    document.body.classList.remove(
        "tema-verde",
        "tema-azul",
        "tema-escuro"
    );

    document.body.classList.add(
        `tema-${tema}`
    );

    localStorage.setItem(
        "tema",
        tema
    );
}

const temaSalvo =
localStorage.getItem("tema");

if(temaSalvo){
    document.body.classList.add(
        `tema-${temaSalvo}`
    );
}