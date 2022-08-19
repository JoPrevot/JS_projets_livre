console.log('connecté!');

const questions = document.querySelectorAll(".question");
console.log(questions);

/* questions.addEventListener("click", function ()
{
    console.log("tableau cliqué");
}); */

questions.forEach((item)=>
{
    console.log(item, 'item');
    item.addEventListener("click", function()
    {
        console.log("item cliqué");

        const next = item.nextElementSibling;
        console.log(next);

        next.classList.toggle("visible");
        
        icone = item.lastElementChild;
        console.log(icone);
        icone.classList.toggle("fa-chevron-up");
    })
});

/* for(let item of questions)
{
    console.log(item, 'item');
}; */