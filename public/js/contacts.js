$("#newContactBtn").on("click", async function () {
    event.preventDefault();

    const first_name = $('#firstName-contact').val().trim();
    const last_name = $('#lastName-contact').val().trim()
    const phone = $('#phone-contact').val().trim()
    const email = $('#email-contact').val().trim()
    const notes = $('#notes-contact').val().trim()

    if (first_name && last_name && phone && email && notes) {
        const response = await fetch('/api/contacts', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, phone, email, notes }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.ok) {
            document.location.replace('/contacts');
            console.log("success", response)
        } else {
            console.log('Failed to create a contact');
        }
    }
})


// Get the modal
var modal = document.getElementById("newContactmodal");
// Get the button that opens the modal
var newContactOpen= document.getElementById("newContactOpen");
var newContactBtn = document.getElementById("newContactBtn");
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
newContactOpen.onclick = function () {
    event.preventDefault();
    console.log('click')
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
    event.preventDefault();
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    event.preventDefault();
    if (event.target == modal) {
        modal.style.display = "none";
    }
}