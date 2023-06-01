//list elements 
const form = document.querySelector('.form');
const input = document.querySelectorAll("#details")
const submit = document.querySelector('.submit_btn')
const alert = document.querySelector('.alert')
const errorText = document.querySelector("#errorText")
const thankYou = document.querySelector(".thank-you");


//add eventlisterner
submit.addEventListener("click", function (e) {
    e.preventDefault();
    displayError(e);
    replaceForm();
})

input.forEach(inputElement => {
    inputElement.addEventListener("keyup", displayInRealTime);
});

//check if input field is not empty
function displayError(e) {
    e.preventDefault();


    //iterate over the inputs using for each
    input.forEach(input => {

        const value = input.value.trim();
        if (!input.value) {

            input.classList.add("error");
            input.parentElement.classList.add("error_message")
        } else {
            input.classList.remove("error");
            input.parentElement.classList.remove("error_message")
        }

        //Replace form with thank you image
        if (input.value) {
            thankYou.classList.remove("hidden");
            form.replaceWith(thankYou)
        }

    });
}

//display card details in real time 
function displayInRealTime() {
    const cardNumber = document.getElementById('number');
    const cardName = document.getElementById('display-name');
    const cardMonth = document.getElementById('month');
    const cardYear = document.getElementById('year');
    const cardCv = document.getElementById('cvc');

    cardName.textContent = document.querySelector(".card-name").value;
    cardNumber.textContent = document.querySelector(".card-number").value;
    cardMonth.textContent = document.querySelector(".card-month").value;
    cardYear.textContent = document.querySelector(".card-year").value;
    cardCv.textContent = document.querySelector(".card-cvc").value;
}



//set input to not be in correct format 

//target card number
const cardN = document.querySelector(".card-number")
const cardM = document.querySelector(".card-month")
const cardY = document.querySelector(".card-year")

//Where card num id being displayed 
const cardNumber = document.getElementById('number');

cardN.addEventListener("keyup", setCardNumber);


function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

//function to display error message 
function displayErrorMessage(message) {
    const errMessage = document.getElementById("error");
    errMessage.textContent = message;
}

function clearErrorMessage() {
    const errMessage = document.getElementById("error");
    errMessage.textContent = ""
}

