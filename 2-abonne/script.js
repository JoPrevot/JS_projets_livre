console.log('connecté!');

const icone = document.querySelector("i");
console.log(icone);

icone.addEventListener("click", function()
{
    console.log('cliqué');
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy');
})

const btn = document.querySelector(".btn");
console.log(btn);

btn.addEventListener("click", function()
{
    console.log('btn cliqué');
    btn.classList.toggle('abonne');
    if(btn.innerText === "Abonné")
    {
        btn.innerText = "Abonnez-vous";
    }
    else
    {
        btn.innerText = "Abonné";
    }
})