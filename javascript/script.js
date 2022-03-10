//HTTP request
async function getData(){
    const response = await fetch("https://api.json-generator.com/templates/BQZ3wDrI6ts0/data?access_token=n7lhzp6uj5oi5goj0h2qify7mi2o8wrmebe3n5ad");

    const dataPiu = await response.json();
    
    const iconVerify = "../Images/verify.svg";
    const iconLike = "../Images/heart.svg";
    const iconTalk = "../Images/talk.svg";
    const iconShare = "../Images/share.svg";
    const iconSave = "../Images/save.svg";
    const iconDelete = "../Images/delete.svg";

    let newPost = false;

    for(let contador = 0; contador < (dataPiu.length); contador++){
        const {user} = dataPiu[contador];
        const {first_name, last_name, username, photo} = user;
        const {text} = dataPiu[contador];
        NewPiu(first_name, last_name, username, photo, text, iconVerify, 
            iconLike, iconTalk, iconShare, iconSave, iconDelete, newPost);
    }
}

getData();

// Novo piu
function NewPiu(first_name, last_name, username, photo, text, iconVerify, 
    iconLike, iconTalk, iconShare, iconSave, iconDelete, newPost) {
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

    if (photo == "") {
        foto.src = "../Images/photo.svg";
    } else {
        foto.src = photo;
    }
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

    iconSalvar.addEventListener("click", () => {
        piuWrapper.prepend(piuFeed);
        piuFeed.classList.add("fixedTop");
    })
    
    iconBar.appendChild(iconSalvar);

    iconDeletar.addEventListener("click", () => {
        piuFeed.classList.add("remover");
    });

    iconBar.appendChild(iconDeletar);

    if (newPost) {
        piuWrapper.prepend(piuFeed);
    }
}

//Pegando variáveis do html
const publicar = document.getElementById("publish");

const texto = document.getElementById("texto-publicar");

const limite = document.getElementById("limit-char");

const maxima = 140;

const resta = document.getElementById("resta");

resta.textContent = maxima;

// Evento digitar piu
texto.addEventListener("input", () => {
    let digitos = texto.value.length;
    let saldo = maxima - digitos;

    const mensagem = document.getElementById("message");

    if (saldo < 0){
        resta.textContent = 0;
    } else {
        resta.textContent = saldo;
    }

    if (saldo >= 128) {
        texto.style.color = "#FD6584";
        limite.style.color = "#FD6584";
    }
    else if (saldo < 0) {
        texto.style.color = "#FD6584";
        limite.style.color = "#FD6584";
    }
    else {
        texto.style.color = "black";
        limite.style.color = "black";
    }
    mensagem.textContent = "";
});

// Evento Publicar

publicar.addEventListener("click", () => {

    let digitos = texto.value.length;
    let saldo = maxima - digitos;

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

    let newPost = true;

    if (saldo >= 128) {

        mensagem.style.color = "#FD6584";

        if (text.trim() === "") {
            mensagem.textContent = "Não digite só espaços!";
        }
        else {
            mensagem.textContent = "Caracteres insuficientes";
        }
    }
    else if (saldo < 0) {
        
        mensagem.style.color = "#FD6584";

        if (text.trim() === "") {
            mensagem.textContent = "Não digite só espaços!";
        }
        else {
            mensagem.textContent = "Caracteres insuficientes";
        }
    }

    if (0 < saldo && saldo < 128) {
        if (text.trim() !== "") {
            NewPiu(first_name, last_name, username, photo, text, iconVerify, 
                iconLike, iconTalk, iconShare, iconSave, iconDelete, newPost);
            console.log(text)
            document.getElementById("texto-publicar").value = "";

            resta.textContent = maxima;
            mensagem.textContent = "";
            limite.style.color = "black";
    }
        else {
            mensagem.textContent = "Não digite só espaços!";
            mensagem.style.color = "#FD6584";
        }
    }

});

// Search function

const searchBar = document.querySelector("#search");

searchBar.addEventListener("keyup", Search);

function Search() {
    let input = document.querySelector("#search").value.toLowerCase();

    const name = Array.from(document.getElementsByClassName("name"));
    const user = document.getElementsByClassName("user");

    name.forEach( (name, i) => {
        if (!(name.innerText.toLowerCase().includes(input) || user[i].innerText.
        toLowerCase().includes(input))) {
            name.parentNode.parentNode.classList.add("remover");
        } else {
            name.parentNode.parentNode.classList.remove("remover");
        }
    });
}