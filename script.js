//your JS code here. If required.
let firstname = document.querySelector("#fname");
let lastname = document.querySelector("#lname");
let phone = document.querySelector("#phn");
let emailid = document.querySelector("#email");
let form = document.querySelector("form");
function showAlert(event) {
	  event.preventDefault();
	alert(`First Name: ${firstname.value}\nLast Name: ${lastname.value}\nPhone Number: ${phone.value}\nEmail ID: ${emailid.value}`)
}

form.addEventListener("submit",showAlert);
