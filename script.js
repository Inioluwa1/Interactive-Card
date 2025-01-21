const cardcomponent = document.getElementById("cardcomponent")
const cardname = document.getElementById("cardname")
const cardnamevalue = document.getElementById("cardnamevalue")
const cardnum = document.getElementById("cardnum")
const cardnumvalue = document.getElementById("cardnumvalue")
const month = document.getElementById("expdate1")
const year = document.getElementById("expdate2")
const yearmonval = document.getElementById("yearmonval")
const cvc = document.getElementById("cvc")
const cvcnum = document.getElementById("cvcnum")
const aftersubmission = document.getElementById("aftersubmission")
const error1 = document.getElementById("error1")
const error2 = document.getElementById("error2")
const error3 = document.getElementById("error3")
const error4 = document.getElementById("error4")

cardnamevalue.addEventListener('input', 
  (e) => {
    let value = e.target.value.replace(/\s+/g, '');
    let formattedvalue = value.match(/.{1,4}/g)?.join(' ') || '';
    e.target.value = formattedvalue;
  }
)

function handleSubmit(){
  console.log("pressed")

  if (cardname.value == "" || cardnum.value.length !== 16 || month.value.length !== 2 || year.value.length !== 2 || cvc.value.length !== 3){
      cardcomponent.style.display = "flex"
      aftersubmission.style.display = "none"
  } else {
      cardcomponent.style.display = "none"
      aftersubmission.style.display = "flex"
  }


  console.log(cardnum.value.length)

  errorMessage()
  cardDetails()
}

//handling changing the card value
const cardDetails = () => {
  if (cardname.value !== "" && cardnum.value.length == 16 && month.value.length == 2 && year.value.length == 2 && cvc.value.length == 3){
  cvcnum.innerHTML = `${cvc.value}`
  cardnumvalue.innerHTML = `${cardnum.value}`
  cardnamevalue.innerHTML = `${cardname.value}`
  yearmonval.innerHTML = `${month.value}/${year.value}`
  }
}

//handling the error messages
const errorMessage =  () => {
  //handling the error of the card owner
  if(cardname.value == ""){
    error1.innerHTML = "This cannot be left blank"
    cardname.style.borderColor= "red"
  } else{
    error1.innerHTML = ""
    cardname.style.borderColor= "blue"
  }

  //handling the error of the card number
  if(cardnum.value == ""){
    error2.innerHTML = "This cannot be left blank"
    cardnum.style.borderColor= "red"
  } else if (cardnum.value !== "" && cardnum.value.length !== 16 ){
    error2.innerHTML = "Wrong format (Has to be 16 values)"
    cardnum.style.borderColor= "red"
  } else {
  error2.innerHTML = ""
  cardnum.style.borderColor= "blue"
  }


  //handling the error of the expiry date
  if(month.value == ""){
    error3.innerHTML = "Can't be blank"
    month.style.borderColor= "red"
  } else if (month.value !== "" && month.value.length != 2 ){
    error3.innerHTML = "Wrong format"
    month.style.borderColor= "red"
  } else{
    error3.innerHTML = ""
    month.style.borderColor= "blue"
  }

  if(year.value == ""){
    error3.innerHTML = "Can't be blank"
    year.style.borderColor= "red"
  } else if (year.value !== "" && year.value.length != 2 ){
    error3.innerHTML = "Wrong format"
    year.style.borderColor= "red"
  } else{
    error3.innerHTML = ""
    year.style.borderColor= "blue"
  }

  //handling the error og the cvc
  if(cvc.value == ""){
    error4.innerHTML = "Can't be blank"
    cvc.style.borderColor= "red"
  } else if (cvc.value !== "" && cvc.value.length != 3 ){
    error4.innerHTML = "Wrong format"
    cvc.style.borderColor= "red"
  } else{
    error4.innerHTML = ""
    cvc.style.borderColor= "blue"
  } 
}

//handling clearing the form after submission
function clearForm(){
  cardname.value = "";
  cardnum.value = "";
  month.value = "";
  year.value = "";
  cvc.value = "";

  cardname.style.borderColor= "grey"
  cardnum.style.borderColor= "grey"
  month.style.borderColor= "grey"
  year.style.borderColor= "grey"
  cvc.style.borderColor= "grey"

  cvcnum.innerHTML = "000"
  cardnumvalue.innerHTML = "0000 0000 0000 0000"
  cardnamevalue.innerHTML = "Adesanya Ayomide"
  yearmonval.innerHTML = "00/00"

  cardcomponent.style.display = "flex"
  aftersubmission.style.display = "none"
}

//handling the continue button after submission
// function handleRevert(){
//   cardcomponent.style.display = "flex"
//   aftersubmission.style.display = "none"
// }

// console.log(cardnum.value.length)

