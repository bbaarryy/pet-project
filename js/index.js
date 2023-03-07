let inputNode = document.querySelector(`#finder`);
let feedbackNode = document.querySelector(`#feedback`);

inputNode.addEventListener(`input` , function(){
    inputNode.classList.add(`is-invalid`);
    feedbackNode.classList.remove(`d-none`);
});