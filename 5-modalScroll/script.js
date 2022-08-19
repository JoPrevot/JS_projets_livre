console.log('connecté!');

const modal = document.querySelector(".modal-container");
console.log(modal);

const btn = document.querySelector(".btn-success");
console.log(btn);

const code = document.querySelector(".code");
console.log(code);

const icone = document.querySelector(".fa-times");
console.log(icone);

window.addEventListener("scroll", DisplayModal) 

function DisplayModal()
{
    console.log("défilemennt détecté");

    let hauteur = document.documentElement.scrollTop;
    console.log(hauteur, "nombre de pixels depuis le haut de la page");

    if(hauteur > 400)
    {
        console.log("affichage de la modale");
        modal.style.display = "flex";
    }
};

btn.addEventListener("click", function()
{
    console.log("bouton cliqué");
    code.style.display = "block";
    btn.style.display = "none";
});

icone.addEventListener("click", function()
{
    console.log("icone cliquée");
    modal.style.display = "none";
    window.removeEventListener("scroll",DisplayModal);
})