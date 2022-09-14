console.log('connecté!');

const form = document.getElementById('formulaire');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');
const msgError = document.querySelectorAll('.error')
const titre = document.getElementById('titre');

form.addEventListener('submit', function(e)
{
    e.preventDefault();
    console.log('formulaire envoyé');

    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    msgError.forEach(error =>
        {
        error.classList.add('invisible');
        })

    if(prenomValue.length <2 || prenomValue.length > 10)
    {
        console.log('erreur1');
        prenom.nextElementSibling.classList.remove('invisible');
    }
    else if (nomValue.length < 3 || nomValue.length > 15)
    {
        console.log('erreur2');
        
        nom.nextElementSibling.classList.remove('invisible');
    }
    else if (messageValue.length < 10 || messageValue.length > 100)
    {
        console.log('erreur3');
        
        email.nextElementSibling.classList.remove('invisible');
    }
    else
    {
        console.log('succes')
        titre.innerText = "Votre message a bien été envoyé !";
        form.remove();
    }
})