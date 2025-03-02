//your JS code here. If required.
let firstname = document.querySelector("#fname");
let lastname = document.querySelector("#lname");
let phone = document.querySelector("#phn");
let emailid = document.querySelector("#email");

function showAlert(event) {
	  event.preventDefault();
	alert(`First Name: ${firstname.value}
	Last Name: ${lastname.value}
	Phone Number: ${phone.value}
	Email ID: ${emailid.value}`)
}

form.addEventListener("submit",showAlert);
