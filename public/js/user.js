
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
        if (response.ok) {
            document.location.replace('/');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Any fool can use a computer',
                text: 'Try again!'

            })
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

        if (response.ok) {
            document.location.replace('/');

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Any fool can use a computer',
                text: 'Try using a valid login!'

            })
        }
    }
})


// Get the modal
var modal = document.getElementById("loginModal")


// When the user clicks on the button, open the modal
$("#loginBtnOpen").on("click", function () {
    event.preventDefault();

    modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
$('.close').on("click", function () {
    event.preventDefault();
    modal.style.display = "none";
})

var modal2 = document.getElementById("signUpModal");


// When the user clicks on the button, open the modal
$("#signUpBtnOpen").on("click", function () {
    event.preventDefault();

    modal2.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
$(".close2").on('click', function () {
    event.preventDefault();
    modal2.style.display = "none";
})
