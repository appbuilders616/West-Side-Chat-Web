const notifications = document.getElementsByClassName("notifications")[0];

let notificationHtml = `
    <div class="notification">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci natus provident. Fuga consequuntur
    </div>
`;

notifications.innerHTML = notificationHtml.repeat(40);
// fill the page with random number notifications instead of manually typing it in the html