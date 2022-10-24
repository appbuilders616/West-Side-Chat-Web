let chatArr = "how are you?, I'm fine👌, That's great to hear!, Thanks for asking 🤩, Sure thing, Would you like to receive  a gift from me?, that would be very cool, 😏, 🤣,  😷😷😷".split(", ");
let sender = ["chat_msg--left", "chat_msg--right"]
const chats = document.getElementsByClassName("chats")[0];

function updateChat() {
    let chatHtml = '';

    chatArr.forEach((text, index) => {
        chatHtml += `
    <div class="chat_msg ${(index % 2 == 0) ? sender[1] : sender[0]}">
        <div class="bubble"> ${text}</div> 
    </div>`
    })

    chats.innerHTML = chatHtml;
}
// fill the page with random number chats instead of manually typing it in the html

const backNavigation = document.getElementsByClassName("header")[0];
const sendIcon = document.getElementsByClassName("msg_actions_send")[0];
const msgInput = document.getElementsByClassName("msg_actions_input")[0];


backNavigation.addEventListener("click", openMessages)

function openMessages() {
    window.location.href = "/messages.html"
}
function addMsg() {
    if (msgInput.value) {
        chatArr.push(msgInput.value);
        msgInput.value = "";
    }
}
sendIcon.addEventListener("click", () => {
    addMsg();
    updateChat();
})
updateChat();   