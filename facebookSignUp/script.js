function validateFirstName() {
  let firstName = document.querySelector(".first-name");
  let firstNameTooltip = document.querySelector(".first-name-tooltip");
  if(firstName.value == ''){
    firstName.style.border = "1px solid red";
    firstNameTooltip.style.display = "block"
  } else {
    firstName.style.border = "1px solid #dddfe2";
    firstNameTooltip.style.display = "none";
  }
}

function validateSurName() {
  let surName = document.querySelector(".sur-name");
  let surNameTooltip = document.querySelector(".sur-name-tooltip");
  if(surName.value == ''){
    surName.style.border = "1px solid red";
    surNameTooltip.style.display = "block"
  } else {
    surName.style.border = "1px solid #dddfe2";
    surNameTooltip.style.display = "none";
  }
}

function validateMobileNo() {
  let mobileNum = document.querySelector(".mobile-num");
  let mobileNumTooltip = document.querySelector(".mobile-num-tooltip");
  if(mobileNum.value == ''){
    mobileNum.style.border = "1px solid red";
    mobileNumTooltip.style.display = "block"
  } else {
    mobileNum.style.border = "1px solid #dddfe2";
    mobileNumTooltip.style.display = "none";
  }
}

function validatePassword(){
  let password = document.querySelector(".password");
  let passwordTooltip = document.querySelector(".password-tooltip");
  if(password.value == ''){
    password.style.border = "1px solid red";
    passwordTooltip.style.display = "block"
  } else {
    password.style.border = "1px solid #dddfe2";
    passwordTooltip.style.display = "none";
  }
}

function validateDateOfBirth() {}

function validateGender() {}

function validateForm() {
  validateFirstName();
  validateSurName();
  validateMobileNo();
  validateDateOfBirth();
  validateGender();
  validatePassword();
}

