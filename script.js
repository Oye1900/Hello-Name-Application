const spanElement = document.querySelector('span');
const buttonElement = document.getElementById('update-content');


buttonElement.onclick = function () {
    const yourName = prompt("Please enter your name:");
    spanElementElement.textContent = yourName;
};
