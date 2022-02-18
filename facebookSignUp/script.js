function validateFirstName() {
  let firstName = document.querySelector(".first-name");
  let firstNameTooltip = document.querySelector(".first-name-tooltip");
  if(firstName.value == ''){
    firstName.style.border = "1px solid red";
    firstNameTooltip.style.display = "block"
  } else {
    console.log("normal behaviour")
    firstName.style.border = "1px solid #dddfe2";
    firstNameTooltip.style.display = "none";
  }
  
}

function validateSurName() {}

function validateMobileNo() {}

function validateDateOfBirth() {}

function validateGender() {}

function validateForm() {
  validateFirstName();
  validateLastName();
  validateMobileNo();
  validateDateOfBirth();
  validateGender();
}

