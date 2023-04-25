//selecting elements 
const form = document.querySelector(".card-details")
const button = document.querySelector(".submit-btn");
 const alert = document.querySelector(".alert")
 const details = document.getElementById("details")
//edit option
let editFlag = false;
let editElement;


//add event listerner 
button.addEventListener("click", addCardDetails)
details.addEventListener("input", updateCardholderName)

//function
// updateCardholderName function retrieves the current 
//value of the cardholder name field from the event object, and sets the text content of the cardholder
// preview element to that value.

function updateCardholderName(e) {
  const cardholderName = e.target.value;
  cardholderPreview.textContent = cardholderName;

  //the event object, and sets the text content of the card number preview element to that value.
  // Note that this function also masks the actual card number 
  //with "XXXX XXXX XXXX XXXX", to protect the user's sensitive information.

  const cardNumber = e.target.value;
  cardNumberPreview.textContent = cardNumber;

  // the event object, and sets the text content of the expiration preview element to that value.

  const expirationDate = e.target.value;
  expirationPreview.textContent = expirationDate;
    

}


function addCardDetails(e){
    e.preventDefault();
    const value =details.value.trim();
    const id = new Date().getTime().toString();
    let cardDetails = value;
    
    if (value && !editFlag){
    console.log("details added")
    }
   else if(value === ""){  //check for empty string
    console.log("empty value")
    displayAlert("please enter card details", "danger");

  
  if (checkCardValidity(cardDetails))
  {
  displayAlert("valid card details", "success"); 
  }else
  {
    displayAlert("please enter valid card details", "danger"); 
  }
    };    
}
console.log(displayAlert)
// display alert 
function displayAlert(text, action){
    alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //remove alert display use set time-out function
  setTimeout(function (){
    alert.textContent ="";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
} 

// card validation using luhn's algorith'
function checkCardValidity(cardDetails){

//check card length 
cardNo = cardDetails.length;
secondNum = false;
//iterate through the loop in reverse order (moving backwards towards the first dight)
for (i = cardNo -1; i>= 0; i--)
{
  //converting to get the unicode value of the card details
  convertNum = cardDetails[i].charCodeAt() - '0'.charCodeAt();

  //check if the second number from the card details is true 
  //(if it is at the second poisition there by mutipltying it by 2)
  if(secondNum == true)
{
//following the luhn algorithm rule 
//the line of code  show that any number greater than 10 the sum of digit will be added to the secondNum variable
secondNum += parseInt(secondNum + convertNum/10, 10) 
secondNum = secondNum + (convertNum % 10)
secondNum = !secondNum //true
}
return (secondNum %  10 == 0) //card is valid 
}

}
//selecting elements 
const form = document.querySelector(".card-details")
const button = document.querySelector(".submit-btn");
 const alert = document.querySelector(".alert")
 const details = document.getElementById("details")
//edit option
let editFlag = false;
let editElement;


//add event listerner 
button.addEventListener("click", addCardDetails)
details.addEventListener("input", updateCardholderName)

//function
// updateCardholderName function retrieves the current 
//value of the cardholder name field from the event object, and sets the text content of the cardholder
// preview element to that value.

function updateCardholderName(e) {
  const cardholderName = e.target.value;
  cardholderPreview.textContent = cardholderName;

  //the event object, and sets the text content of the card number preview element to that value.
  // Note that this function also masks the actual card number 
  //with "XXXX XXXX XXXX XXXX", to protect the user's sensitive information.

  const cardNumber = e.target.value;
  cardNumberPreview.textContent = cardNumber;

  // the event object, and sets the text content of the expiration preview element to that value.

  const expirationDate = e.target.value;
  expirationPreview.textContent = expirationDate;
    

}


function addCardDetails(e){
    e.preventDefault();
    const value =details.value.trim();
    const id = new Date().getTime().toString();
    let cardDetails = value;
    
    if (value && !editFlag){
    console.log("details added")
    }
   else if(value === ""){  //check for empty string
    console.log("empty value")
    displayAlert("please enter card details", "danger");

  
  if (checkCardValidity(cardDetails))
  {
  displayAlert("valid card details", "success"); 
  }else
  {
    displayAlert("please enter valid card details", "danger"); 
  }
    };    
}
console.log(displayAlert)
// display alert 
function displayAlert(text, action){
    alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //remove alert display use set time-out function
  setTimeout(function (){
    alert.textContent ="";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
} 

// card validation using luhn's algorith'
function checkCardValidity(cardDetails){

//check card length 
cardNo = cardDetails.length;
secondNum = false;
//iterate through the loop in reverse order (moving backwards towards the first dight)
for (i = cardNo -1; i>= 0; i--)
{
  //converting to get the unicode value of the card details
  convertNum = cardDetails[i].charCodeAt() - '0'.charCodeAt();

  //check if the second number from the card details is true 
  //(if it is at the second poisition there by mutipltying it by 2)
  if(secondNum == true)
{
//following the luhn algorithm rule 
//the line of code  show that any number greater than 10 the sum of digit will be added to the secondNum variable
secondNum += parseInt(secondNum + convertNum/10, 10) 
secondNum = secondNum + (convertNum % 10)
secondNum = !secondNum //true
}
return (secondNum %  10 == 0) //card is valid 
}

}
//selecting elements 
const form = document.querySelector(".card-details")
const button = document.querySelector(".submit-btn");
 const alert = document.querySelector(".alert")
 const details = document.getElementById("details")
//edit option
let editFlag = false;
let editElement;


//add event listerner 
button.addEventListener("click", addCardDetails)
details.addEventListener("input", updateCardholderName)

//function
// updateCardholderName function retrieves the current 
//value of the cardholder name field from the event object, and sets the text content of the cardholder
// preview element to that value.

function updateCardholderName(e) {
  const cardholderName = e.target.value;
  cardholderPreview.textContent = cardholderName;

  //the event object, and sets the text content of the card number preview element to that value.
  // Note that this function also masks the actual card number 
  //with "XXXX XXXX XXXX XXXX", to protect the user's sensitive information.

  const cardNumber = e.target.value;
  cardNumberPreview.textContent = cardNumber;

  // the event object, and sets the text content of the expiration preview element to that value.

  const expirationDate = e.target.value;
  expirationPreview.textContent = expirationDate;
    

}


function addCardDetails(e){
    e.preventDefault();
    const value =details.value.trim();
    const id = new Date().getTime().toString();
    let cardDetails = value;
    
    if (value && !editFlag){
    console.log("details added")
    }
   else if(value === ""){  //check for empty string
    console.log("empty value")
    displayAlert("please enter card details", "danger");

  
  if (checkCardValidity(cardDetails))
  {
  displayAlert("valid card details", "success"); 
  }else
  {
    displayAlert("please enter valid card details", "danger"); 
  }
    };    
}
console.log(displayAlert)
// display alert 
function displayAlert(text, action){
    alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //remove alert display use set time-out function
  setTimeout(function (){
    alert.textContent ="";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
} 

// card validation using luhn's algorith'
function checkCardValidity(cardDetails){

//check card length 
cardNo = cardDetails.length;
secondNum = false;
//iterate through the loop in reverse order (moving backwards towards the first dight)
for (i = cardNo -1; i>= 0; i--)
{
  //converting to get the unicode value of the card details
  convertNum = cardDetails[i].charCodeAt() - '0'.charCodeAt();

  //check if the second number from the card details is true 
  //(if it is at the second poisition there by mutipltying it by 2)
  if(secondNum == true)
{
//following the luhn algorithm rule 
//the line of code  show that any number greater than 10 the sum of digit will be added to the secondNum variable
secondNum += parseInt(secondNum + convertNum/10, 10) 
secondNum = secondNum + (convertNum % 10)
secondNum = !secondNum //true
}
return (secondNum %  10 == 0) //card is valid 
}

}
//selecting elements 
const form = document.querySelector(".card-details")
const button = document.querySelector(".submit-btn");
 const alert = document.querySelector(".alert")
 const details = document.getElementById("details")
//edit option
let editFlag = false;
let editElement;


//add event listerner 
button.addEventListener("click", addCardDetails)
details.addEventListener("input", updateCardholderName)

//function
// updateCardholderName function retrieves the current 
//value of the cardholder name field from the event object, and sets the text content of the cardholder
// preview element to that value.

function updateCardholderName(e) {
  const cardholderName = e.target.value;
  cardholderPreview.textContent = cardholderName;

  //the event object, and sets the text content of the card number preview element to that value.
  // Note that this function also masks the actual card number 
  //with "XXXX XXXX XXXX XXXX", to protect the user's sensitive information.

  const cardNumber = e.target.value;
  cardNumberPreview.textContent = cardNumber;

  // the event object, and sets the text content of the expiration preview element to that value.

  const expirationDate = e.target.value;
  expirationPreview.textContent = expirationDate;
    

}


function addCardDetails(e){
    e.preventDefault();
    const value =details.value.trim();
    const id = new Date().getTime().toString();
    let cardDetails = value;
    
    if (value && !editFlag){
    console.log("details added")
    }
   else if(value === ""){  //check for empty string
    console.log("empty value")
    displayAlert("please enter card details", "danger");

  
  if (checkCardValidity(cardDetails))
  {
  displayAlert("valid card details", "success"); 
  }else
  {
    displayAlert("please enter valid card details", "danger"); 
  }
    };    
}
console.log(displayAlert)
// display alert 
function displayAlert(text, action){
    alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //remove alert display use set time-out function
  setTimeout(function (){
    alert.textContent ="";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
} 

// card validation using luhn's algorith'
function checkCardValidity(cardDetails){

//check card length 
cardNo = cardDetails.length;
secondNum = false;
//iterate through the loop in reverse order (moving backwards towards the first dight)
for (i = cardNo -1; i>= 0; i--)
{
  //converting to get the unicode value of the card details
  convertNum = cardDetails[i].charCodeAt() - '0'.charCodeAt();

  //check if the second number from the card details is true 
  //(if it is at the second poisition there by mutipltying it by 2)
  if(secondNum == true)
{
//following the luhn algorithm rule 
//the line of code  show that any number greater than 10 the sum of digit will be added to the secondNum variable
secondNum += parseInt(secondNum + convertNum/10, 10) 
secondNum = secondNum + (convertNum % 10)
secondNum = !secondNum //true
}
return (secondNum %  10 == 0) //card is valid 
}

}
//selecting elements 
const form = document.querySelector(".card-details")
const button = document.querySelector(".submit-btn");
 const alert = document.querySelector(".alert")
 const details = document.getElementById("details")
//edit option
let editFlag = false;
let editElement;


//add event listerner 
button.addEventListener("click", addCardDetails)
details.addEventListener("input", updateCardholderName)

//function
// updateCardholderName function retrieves the current 
//value of the cardholder name field from the event object, and sets the text content of the cardholder
// preview element to that value.

function updateCardholderName(e) {
  const cardholderName = e.target.value;
  cardholderPreview.textContent = cardholderName;

  //the event object, and sets the text content of the card number preview element to that value.
  // Note that this function also masks the actual card number 
  //with "XXXX XXXX XXXX XXXX", to protect the user's sensitive information.

  const cardNumber = e.target.value;
  cardNumberPreview.textContent = cardNumber;

  // the event object, and sets the text content of the expiration preview element to that value.

  const expirationDate = e.target.value;
  expirationPreview.textContent = expirationDate;
    

}


function addCardDetails(e){
    e.preventDefault();
    const value =details.value.trim();
    const id = new Date().getTime().toString();
    let cardDetails = value;
    
    if (value && !editFlag){
    console.log("details added")
    }
   else if(value === ""){  //check for empty string
    console.log("empty value")
    displayAlert("please enter card details", "danger");

  
  if (checkCardValidity(cardDetails))
  {
  displayAlert("valid card details", "success"); 
  }else
  {
    displayAlert("please enter valid card details", "danger"); 
  }
    };    
}
console.log(displayAlert)
// display alert 
function displayAlert(text, action){
    alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //remove alert display use set time-out function
  setTimeout(function (){
    alert.textContent ="";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
} 

// card validation using luhn's algorith'
function checkCardValidity(cardDetails){

//check card length 
cardNo = cardDetails.length;
secondNum = false;
//iterate through the loop in reverse order (moving backwards towards the first dight)
for (i = cardNo -1; i>= 0; i--)
{
  //converting to get the unicode value of the card details
  convertNum = cardDetails[i].charCodeAt() - '0'.charCodeAt();

  //check if the second number from the card details is true 
  //(if it is at the second poisition there by mutipltying it by 2)
  if(secondNum == true)
{
//following the luhn algorithm rule 
//the line of code  show that any number greater than 10 the sum of digit will be added to the secondNum variable
secondNum += parseInt(secondNum + convertNum/10, 10) 
secondNum = secondNum + (convertNum % 10)
secondNum = !secondNum //true
}
return (secondNum %  10 == 0) //card is valid 
}

}
//selecting elements 
const form = document.querySelector(".card-details")
const button = document.querySelector(".submit-btn");
 const alert = document.querySelector(".alert")
 const details = document.getElementById("details")
//edit option
let editFlag = false;
let editElement;


//add event listerner 
button.addEventListener("click", addCardDetails)
details.addEventListener("input", updateCardholderName)

//function
// updateCardholderName function retrieves the current 
//value of the cardholder name field from the event object, and sets the text content of the cardholder
// preview element to that value.

function updateCardholderName(e) {
  const cardholderName = e.target.value;
  cardholderPreview.textContent = cardholderName;

  //the event object, and sets the text content of the card number preview element to that value.
  // Note that this function also masks the actual card number 
  //with "XXXX XXXX XXXX XXXX", to protect the user's sensitive information.

  const cardNumber = e.target.value;
  cardNumberPreview.textContent = cardNumber;

  // the event object, and sets the text content of the expiration preview element to that value.

  const expirationDate = e.target.value;
  expirationPreview.textContent = expirationDate;
    

}


function addCardDetails(e){
    e.preventDefault();
    const value =details.value.trim();
    const id = new Date().getTime().toString();
    let cardDetails = value;
    
    if (value && !editFlag){
    console.log("details added")
    }
   else if(value === ""){  //check for empty string
    console.log("empty value")
    displayAlert("please enter card details", "danger");

  
  if (checkCardValidity(cardDetails))
  {
  displayAlert("valid card details", "success"); 
  }else
  {
    displayAlert("please enter valid card details", "danger"); 
  }
    };    
}
console.log(displayAlert)
// display alert 
function displayAlert(text, action){
    alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //remove alert display use set time-out function
  setTimeout(function (){
    alert.textContent ="";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
} 

// card validation using luhn's algorith'
function checkCardValidity(cardDetails){

//check card length 
cardNo = cardDetails.length;
secondNum = false;
//iterate through the loop in reverse order (moving backwards towards the first dight)
for (i = cardNo -1; i>= 0; i--)
{
  //converting to get the unicode value of the card details
  convertNum = cardDetails[i].charCodeAt() - '0'.charCodeAt();

  //check if the second number from the card details is true 
  //(if it is at the second poisition there by mutipltying it by 2)
  if(secondNum == true)
{
//following the luhn algorithm rule 
//the line of code  show that any number greater than 10 the sum of digit will be added to the secondNum variable
secondNum += parseInt(secondNum + convertNum/10, 10) 
secondNum = secondNum + (convertNum % 10)
secondNum = !secondNum //true
}
return (secondNum %  10 == 0) //card is valid 
}

}

