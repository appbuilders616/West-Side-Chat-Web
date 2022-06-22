const messages = document.getElementsByClassName("messages")[0];

let msgsHtml = '    ';


let names = "Nathaniel Micheal Arthur Josephine Lucy Akosua".split(" ");
let text = "Lorem ipsum dolor sit amet consectetur adipisicing"
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
    msgsHtml +=  `
    <div class="msg">
        <div class="msg_sender"> ${names[Math.floor(Math.random()*names.length)]}</div>
        <div class="msg_pic"> <img class="msg_pic_src" src="/imgs/${img}"></div>
        <div class="msg_text"> ${text}</div> 
    </div>`
})
console.log(msgsHtml);

messages.innerHTML = msgsHtml;
// fill the page with random number messages instead of manually typing it in the html