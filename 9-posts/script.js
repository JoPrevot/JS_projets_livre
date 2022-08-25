console.log('connecté!');

const postContainer = document.querySelector('.posts');
console.log(postContainer);

const posts = [
    {
        titre : "SE0, les bonnes pratiques",
        hashtag : "#SE0",
        extrait : "lorem ipsum"
    },
    {
        titre : "Bien débuter",
        hashtag : "#référencement",
        extrait : "lorem ipsum"
    },
    {
        titre : "Marketing",
        hashtag : "#marketing",
        extrait : "lorem ipsum"
    }
];

posts.push({
    titre : "Les fraises",
    hashtag : "#fraises",
    extrait : "C'est délicieux"
});

posts.forEach(item =>
{
    const article =
    `
        <div class="post">
            <div class="post-titre"> ${item.titre}</div>
            <div class="post-extrait"> ${item.extrait}</div>
            <div class="post-hashtag"> ${item.hashtag}</div>
        </div>
    `
    console.log(article);

    postContainer.innerHTML += article;

})

