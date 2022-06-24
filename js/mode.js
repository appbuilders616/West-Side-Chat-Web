let savedMode = localStorage.getItem("mode");
const modeToggle = document.getElementsByClassName("header_mode")[0];

if (savedMode) {
    document.body.className = savedMode;
    if (savedMode = "dark-mode" && modeToggle) {
        modeToggle.children[0].classList.replace("fa-moon",  "fa-sun") ;
    } else {
        modeToggle.children[0].classList.replace("fa-sun",  "fa-moon") ;
    }
}
if (modeToggle) {
    modeToggle.addEventListener("click", setMode);
}

function setMode (){
    if (document.body.classList.contains("light-mode")) {
        document.body.classList.replace("light-mode","dark-mode");   
        modeToggle.children[0].classList.replace("fa-moon",  "fa-sun") ;
        localStorage.setItem("mode", "dark-mode") ;
    } else {
        document.body.classList.replace("dark-mode", "light-mode");
        modeToggle.children[0].classList.replace("fa-sun",  "fa-moon") ;
        localStorage.setItem("mode", "light-mode") ;
    }
}