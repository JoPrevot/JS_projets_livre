console.log('connecté!');

let titre = document.getElementById('titre');
let compteur = 0;
console.log('compteur au démarrage = ', compteur);

// Je sélectionne et je stocke le bouton rouge
const btnRed = document.getElementById('btn-red');
console.log(btnRed);

// Je sélectionne et je stocke le bouton bleu
const btnBlue = document.getElementById('btn-blue');
console.log(btnBlue);

function AddCompteur ()
{
    console.log('cliqué');
    compteur = compteur +1;
    console.log(compteur);
    titre.innerText = compteur;
}

setTimeout(function ()
{
    console.log('fin du chrono');
    btnRed.remove();
    btnBlue.remove();
}, 10000);

// Je soumets le cercle rouge à une action
btnRed.addEventListener("click", function()
{
    AddCompteur();
});

// Je soumets le cercle bleu à une action
btnBlue.addEventListener("click", function()
{
    AddCompteur();
});