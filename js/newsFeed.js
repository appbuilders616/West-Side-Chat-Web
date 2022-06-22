const posts = document.getElementsByClassName("posts")[0];
let postsHtml = '';

let names = "Nathaniel Micheal Arthur Josephine Lucy Akosua".split(" ");
let lastSeen = "12 days ago"
let imgs = `boys.jpg
brain.png
calc.png
download.png
first-sroll.jpg
girls.jpg
grp.png
grp2.jpg
images.png
img (1).jpg
img (2).jpg
img (3).jpg
img (4).jpg
img (5).jpg
`.split("\n");

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
            <div class="post_reactions_like"><i class="fas fa-heart"></i> like</div>
            <div class="post_reactions_comment"><i class="fas fa-comment"></i> comment</div>
            <div class="post_reactions_share"><i class="fas fa-share"></i> share</div>
        </div> 
    </div>    
    `
})

posts.innerHTML = postsHtml;
// fill the page with random number posts instead of manually typing it in the html