
// Create New User via the Sign-up Form
$("#signupBtn").on("click", async function () {
    event.preventDefault();

    const first_name = $('#first-name-signup').val().trim();
    const last_name = $('#last-name-signup').val().trim();
    const display_name = $('#display-name-signup').val().trim();
    const email = $('#email-signup').val().trim();
    const password = $('#password-signup').val().trim();

    if (first_name && last_name && display_name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, display_name, email, password }),
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


// Create New User via the Sign-up Form
$("#loginBtn").on("click", async function () {
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
            Swal.fire({
                icon: 'error',
                title: 'Any fool can use a computer',
                text: 'Try using a valid login!'

            })
        }
    }
})


// Get the modal
var modal = document.getElementById("loginModal");
// Get the button that opens the modal
var loginBtnOpen = document.getElementById("loginBtnOpen");
var signUpBtn = document.getElementById("signUpBtn");
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
loginBtnOpen.onclick = function () {
    event.preventDefault();
    console.log('click')
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
    event.preventDefault();
    modal.style.display = "none";
}

var modal2 = document.getElementById("signUpModal");
// Get the button that opens the modal
var loginBtnOpen = document.getElementById("signUpBtnOpen");
var signUpBtn = document.getElementById("signUpBtn");
var closeBtn2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
loginBtnOpen.onclick = function () {
    event.preventDefault();
    console.log('click')
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn2.onclick = function () {
    event.preventDefault();
    modal2.style.display = "none";
}
