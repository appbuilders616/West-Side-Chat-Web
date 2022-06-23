const posts = document.getElementsByClassName("posts")[0];
// const reactions = document.getElementsByClassName("post_reactions");
let postsHtml = '';

let names = "Nathaniel Micheal Arthur Josephine Lucy Akosua".split(" ");
let lastSeen = "12 days ago"
let imgs = `boys.jpg
brain.png
calc.png
first-sroll.jpg
girls.jpg
grp.png
grp2.jpg
images.png
img (1).jpg
img (2).jpg
img (3).jpg
img (4).jpg
img (5).jpg`.split("\n");

imgs.forEach((img)=>{
    postsHtml +=  `
    <div class="post">
        <div class="post_header">
            <div class="post_sender-pic"> <img class="post_pic_src" src="/imgs/${img}"></div>
            <div class="post_sender-name"> ${names[Math.floor(Math.random()*names.length)]}</div>
            <div class="post_sender-last-seen"> ${lastSeen}</div>
        </div>
        <div class="post_content"><img class="post_content_src" src="/imgs/${img}"></div>
        <div class="post_reactions">
            <div class="post_reactions_like" onclick="handleReactions(this)"><i class="far fa-heart"></i> like</div>
            <div class="post_reactions_comment" onclick="handleReactions(this)"><i class="far fa-comment"></i> comment</div>
            <div class="post_reactions_share" onclick="handleReactions(this)"><i class="far fa-share-from-square"></i> share</div>
        </div> 
    </div>    
    `
})

posts.innerHTML = postsHtml;
// fill the page with random number posts instead of manually typing it in the html

// reactions.forEach((reaction)=> {
//     reaction.addEventListener("click",this)
// })
function handleReactions (event){
    if (event.children[0].classList.contains("fas")) {
        event.children[0].classList.replace("fas","far");
    } else {
        event.children[0].classList.replace("far","fas");        
    }
}