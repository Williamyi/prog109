var vFeedback = document.getElementById("feedback");

function validateFirstname() {
  var vFirstname = document.getElementById("firstname").value;

  //Conditions: required and less or equal than 20 characters
  if (vFirstname === null || vFirstname === "" || vFirstname.length > 20) {
    console.log(vFirstname);
    //There is an error
    vFeedback.textContent = "Firstname is REQUIRED and should not be greater than 20 characters";
    return false;
  } else
    return true;

}

function validateLastname() {
  var vLastname = document.getElementById("lastname").value;
  console.log(vLastname);
  //Conditions: required and less or equal than 20 characters
  if (vLastname === null || vLastname === "" || vLastname.length > 50) {
    console.log(vLastname);
    //There is an error
    vFeedback.textContent = "Lastname is REQUIRED and should not be greater than 50 characters";
    return false;
  } else
    return true;

}

function validateEmail() {
  var vEmail = document.getElementById("email").value;
  var atpos = vEmail.indexOf("@");
  var dotpos = vEmail.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= vEmail.length || vEmail === null || vEmail === "") {
    vFeedback.textContent = "Not a valid e-mail address";
    return false;
  } else
    return true;
}

function validatePhoneNumber() {
  var vPhone = document.getElementById("phone").value;
  if (vPhone === null || vPhone === "" || isNaN(vPhone)) {
    vFeedback.textContent = "Phone number is not valid";
    return false;
  }
  else
    return true;

}

function validateAddress(){
  var vAddress = document.getElementById("address").value;
  if (vAddress===null || vAddress===""){
    vFeedback.textcontent = "Address is not vaild";
    return false;
  }
  else
    return true;

}

function validateCity(){
  var vCity = document.getElementById("city").value;
  if (vCity===null || vCity===""){
    vFeedback.textcontent = "City is not valid";
    return false;
  }
  else
    return true;
}

function validateZipCode() {
  var vCountry = document.getElementById("countries").value;
  if (vCountry === "USA") {
    //validate the zip code
    var vZipcode = document.getElementById("zipcode").value;
    if (vZipcode === null || vZipcode === "" || vZipcode.length > 5) {

      //There is an error
      vFeedback.textContent = "Zipcode is REQUIRED for USA";
      return false;
    } else
      return true;

  }
  return true;
}

function validateUsername() {
  var vUsername = document.getElementById("username").value;
  if (vUsername === null || vUsername === "" || vUsername.length > 12) {
    console.log(vUsername);
    vFeedback.textContent = "Username is REQUIRED and should not be greater than 12";
    return false;
  } else
    return true;
}

function validatePassword() {
  var vPassword = document.getElementById("password").value
  if (vPassword === null || vPassword === "" || vPassword.lenght > 7) {
    vFeedback.textContent = "Password is REQUIRED and should not be greater than 7";
    return false;
  } else
    return true;
}

function validateForm() {
  return validateFirstname() && validateLastname() && validateEmail() && validatePhoneNumber() && validateZipCode() && validateUsername() && validatePassword() && validateAddress() && validateCity();
}
