
function toggleModal() {
    modal1.classList.toggle("show-modal");
}

function windowOnClick(event) {

    if (event.target === modal1) {
        toggleModal();
    }
}
var modal1 = document.querySelector(".modal1");
var trigger = document.querySelector(".trigger");
var trigger1 = document.querySelector(".trigger1");
var closeButton = document.querySelector(".close-button");
var cancelButton = document.querySelector("#cancel");

trigger.addEventListener("click", toggleModal);
trigger1.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
//  cancel.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
