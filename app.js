// event handler for the form
function submitForm() {
  // get the form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // call the sendEmail function
  sendEmail(name, email, message);
}
