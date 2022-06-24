// fill the page with random number notifications instead of manually typing it in the html


let notificationHtml = ``;
let loremArr = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci natus provident. Fuga consequuntur".split(". ")
const notifications = document.getElementsByClassName("notifications")[0];

for (let i = 0; i < 30; i++) {
    let txt, numOfParagraph = Math.ceil(Math.random() * 3)
    switch (numOfParagraph) {
        case 1:
            txt = loremArr[0];
            break;
        case 2:
            txt = loremArr[0] + ". " + loremArr[1];
            break;
        case 3:
            txt = loremArr[0] + ". " + loremArr[1] + ". " + loremArr[2];
            break;
        default:
            txt = loremArr[0];
    }
    notificationHtml += `<div class="notification">${txt}</div>`
}

notifications.innerHTML = notificationHtml;