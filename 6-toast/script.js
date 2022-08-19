console.log('connecté!');

const btn = document.querySelector(".btn");
console.log(btn);

const ctn = document.querySelector(".container-notifications");
console.log(ctn);

btn.addEventListener("click", function()
{
    console.log("bouton cliqué");

    const notification = document.createElement("div");

    notification.classList.add("toast");
    notification.innerText = "Votre fichier est bien enregistré";
    console.log(notification);
    ctn.appendChild(notification);

    setTimeout(function()
    {
        notification.remove();
    }, 2000 );
});