//HTTP request
async function getData(){
    const response = await fetch("https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad");

    const produtos = await response.json();
    
    const iconVerify = "../Images/verify.svg";
    const iconLike = "../Images/heart.svg";
    const iconTalk = "../Images/talk.svg";
    const iconShare = "../Images/share.svg";
    const iconSave = "../Images/save.svg";
    const iconDelete = "../Images/delete.svg";

    for(let contador = 0; contador < (produtos.length); contador++){
        const {user} = produtos[contador];
        const {first_name, last_name, username, photo} = user;
        const {text} = produtos[contador];
        NewPiu(first_name, last_name, username, photo, text, iconVerify, 
            iconLike, iconTalk, iconShare, iconSave, iconDelete);
    }

    //console.log(produtos)
}

getData();

function NewPiu(first_name, last_name, username, photo, text, iconVerify, 
    iconLike, iconTalk, iconShare, iconSave, iconDelete) {
    const piuFeed = document.createElement("div");
    const userInformation = document.createElement("div");
    const foto = document.createElement("img");
    const nome = document.createElement("p")
    const iconVerificar = document.createElement("img");
    const user = document.createElement("p");
    const piu = document.createElement("div");
    const textoPiu = document.createElement("p");
    const iconBar = document.createElement("div");
    const iconGostar = document.createElement("img");
    const iconConversar = document.createElement("img");
    const iconCompartilhar = document.createElement("img");
    const iconSalvar = document.createElement("img");
    const iconDeletar = document.createElement("img");

    foto.src = photo;
    nome.innerText = first_name + " " + last_name;
    iconVerificar.src = iconVerify;
    user.innerText = "@" + username;
    textoPiu.innerText = text;
    iconGostar.src = iconLike;
    iconConversar.src = iconTalk;
    iconCompartilhar.src = iconShare;
    iconSalvar.src = iconSave;
    iconDeletar.src = iconDelete;

    piuFeed.classList.add("piu-feed");
    userInformation.classList.add("user-information");
    foto.classList.add("photo");
    nome.classList.add("name");
    iconVerificar.classList.add("icon-verify");
    user.classList.add("user");
    piu.classList.add("piu");
    textoPiu.classList.add("texto-piu");
    iconBar.classList.add("icon-bar");
    iconGostar.classList.add("icon-like");
    iconConversar.classList.add("icon-talk");
    iconCompartilhar.classList.add("icon-share");
    iconSalvar.classList.add("icon-save");
    iconDeletar.classList.add("icon-delete");

    const piuWrapper = document.querySelector(".wrapper-3");

    piuWrapper.appendChild(piuFeed);

    piuFeed.appendChild(userInformation);

    userInformation.appendChild(foto);
    userInformation.appendChild(nome);
    userInformation.appendChild(iconVerificar);
    userInformation.appendChild(user);

    piuFeed.appendChild(piu);

    piu.appendChild(textoPiu);

    piuFeed.appendChild(iconBar);

    iconBar.appendChild(iconGostar);
    iconBar.appendChild(iconConversar);
    iconBar.appendChild(iconCompartilhar);

    let cont = 0
    iconSalvar.addEventListener("click", () => {
        if (cont == 0) {
            piuFeed.classList.add("fixedTop");
        }
        else if (cont > 0) {
            piuFeed.classList.add("fixedTop");
        }
    })
    
    iconBar.appendChild(iconSalvar);

    iconDeletar.addEventListener("click", () => {
        piuFeed.classList.add("remover");
    });

    iconBar.appendChild(iconDeletar);
}


var publicar = document.getElementById("publish");
var texto = document.getElementById("texto-publicar");

var maxima = 140;
var resta = document.getElementById("resta");

resta.textContent = maxima;

texto.addEventListener("input", () => {
    let digitos = texto.value.length;
    let saldo = maxima - digitos
    var mensagem = document.getElementById("message");

    if (saldo < 0){
        resta.textContent = 0;
    } else {
        resta.textContent = saldo;
    }

    if (saldo >= 128) {
        mensagem.textContent = "Caracteres insuficientes";
    }
    else if (saldo < 0) {
        mensagem.textContent = "Caracteres excedidos";
    }
    else {
        mensagem.textContent = "";
    }
    
});

publicar.addEventListener("click", () => {
    const first_name = "João";
    const last_name = "Fernandes";
    const username = "joaofernandes_";
    const photo = "../Images/photo.svg";
    const text = document.getElementById("texto-publicar").value;
    const mensagem = document.getElementById("message");

    const iconVerify = "../Images/verify.svg";
    const iconLike = "../Images/heart.svg";
    const iconTalk = "../Images/talk.svg";
    const iconShare = "../Images/share.svg";
    const iconSave = "../Images/save.svg";
    const iconDelete = "../Images/delete.svg";

    NewPiu(first_name, last_name, username, photo, text, iconVerify, 
        iconLike, iconTalk, iconShare, iconSave, iconDelete);

    document.getElementById("texto-publicar").value = "";

    resta.textContent = maxima
    mensagem.textContent = "";
});