
// Create New User via the Sign-up Form
$("#signupBtn").on("click", async function() {
    event.preventDefault();

  const firstName = $('#first-name-signup').val().trim();
  const lastName = $('#last-name-signup').val().trim();
  const displayName = $('#display-name-signup').val().trim();
  const email = $('#email-signup').val().trim();
  const password = $('#password-signup').val().trim();

  if (firstName && lastName && displayName && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, displayName , email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
console.log(response)
    if (response.ok) {
      console.log("success", response)
    } else {
      console.log('Failed to sign up.');
    }
}
})


// Create New User via the Sign-up Form
$("#loginBtn").on("click", async function() {
  event.preventDefault();
const email = $('#email-login').val().trim();
const password = $('#password-login').val().trim();

if (email && password) {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });
console.log(response)
  if (response.ok) {
    document.location.replace('/');
    console.log("success", response)
  } else {
    console.log('Failed to sign up.');
  }
}
})


// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var loginBtnOpen = document.getElementById("loginBtnOpen");
var signUpBtn = document.getElementById("signUpBtn");
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
loginBtnOpen.onclick = function() {
    console.log('click')
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}