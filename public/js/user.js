
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
