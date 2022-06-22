// DOM Elements For Tabs Switching########################################
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tabcontent');
const darkModeSwitch = document.querySelector('#dark-mode-switch');

// FormQuerySelectors#####################################################
const FormContainer = document.querySelector(".FormContainer");
const form = document.querySelector("form");
const eField = form.querySelector(".email");
const eInput = eField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input");
const SignUpBtn = document.querySelector(".SignUp");
// FormQuerySelectorsEnds#######################################################

// Functions For Tabs Switching######################################################
const activateTab = tabnum => {

    tabs.forEach(tab => {
        tab.classList.remove('active')
    })

    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    })

    document.querySelector('#tab' + tabnum).classList.add('active')
    document.querySelector('#tabcontent' + tabnum).classList.add('active')
    localStorage.setItem('jstabs-opentab', JSON.stringify(tabnum))

}

// Event Listeners
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab.dataset.tab)
    })
})

darkModeSwitch.addEventListener('change', () => {
    document.querySelector('body').classList.toggle('darkmode')
    localStorage.setItem('jstabs-darkmode', JSON.stringify(!darkmode))
})

// Retrieve stored data
let darkmode = JSON.parse(localStorage.getItem('jstabs-darkmode'))
const opentab = JSON.parse(localStorage.getItem('jstabs-opentab')) || '3'

// and..... Action!
if (darkmode === null) {
    darkmode = window.matchMedia("(prefers-color-scheme: dark)").matches // match to OS theme
}
if (darkmode) {
    document.querySelector('body').classList.add('darkmode')
    document.querySelector('#dark-mode-switch').checked = 'checked'
}
activateTab(opentab)
    // Function For Tab Switching Ends#################################################




// Functions For FormValidation################################################################3
// SignUpBtn.addEventListener("click", () => {
//     console.log("You clicked this shit");
//     FormContainer.classList.add("active");
// })

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hello darkLight");
    if (eInput.value == "") {
        eField.classList.add("shake", "error");
    } else {
        checkEmail();
    }

    if (pInput.value == "") {
        pField.classList.add("shake", "error");
    }

    setTimeout(function() {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = function() {
        checkEmail();
    }

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!eInput.value.match(pattern)) {
            console.log("didnt match baby");
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-text");

            (eInput.value != "") ? errorTxt.innerHTML = "Enter a valid email address": errorTxt.innerHTML = "Email cant be blank";
        } else {
            eField.classList.remove("error");
        }
    }

    pInput.onkeyup = function checkPassword() {
        if (pInput.value == "" || pInput.value < 4) {
            console.log("Check Password Length");
            pField.classList.add("error");

            let errorTxt = pField.querySelector(".error-text");
            (pInput.value != "") ? errorTxt.innerHTML = "Entern a valid password": errorTxt.innerHTML = "Password cant be too short";
        } else {
            pField.classList.remove("error");
        }
    }

    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = "/appSelf.html";
        console.log("credentials matches");
    }

});
// Functions For FormValidationsEnds##########################################################