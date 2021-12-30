// Add a new contact fetch
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

// Update a contact fetch
$(".updateContact").on("click", async function () {
    let id = $(this).data("id")
    console.log(id)
    const first_name = $('#firstName-Ucontact').val().trim();
    const last_name = $('#lastName-Ucontact').val().trim()
    const phone = $('#phone-Ucontact').val().trim()
    const email = $('#email-Ucontact').val()
    const notes = $('#notes-Ucontact').val().trim()

    
    const response = await fetch(`/api/contacts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ first_name, last_name, phone, email, notes }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response.body)
    if (response.ok) {
        document.location.replace('/contacts');
        console.log("success", response)
    } else {
        console.log('Failed to create a contact');
    }

})

// New Contact Modal Clicks
// When the user clicks on the button, open the modal
$('#newContactOpen').on("click", function () {
    event.preventDefault();
    console.log('click')
    $('#newContactmodal').css("display", "block")
})

// When the user clicks on <span> (x), close the modal
$(".close").on("click", function () {
    event.preventDefault();
    $('#newContactmodal').css("display", "none")
})

// When the user clicks anywhere outside of the modal, close it
$(window).on("click", function (event) {
    event.preventDefault();
    
    const modal = $("#newContactmodal")
    if (event.target == modal) {
        $('#newContactmodal').css("display", "none")
    }
})

// Update Contact Modal Clicks
// When the user clicks on the button, open the modal
$('.updateContactOpen').on("click", function () {
    event.preventDefault();
    console.log('click')
    $('#updateContactModal').css("display", "block")
})

// When the user clicks on <span> (x), close the modal
$(".close").on("click", function () {
    event.preventDefault();
    $('#updateContactModal').css("display", "none")
})

// When the user clicks anywhere outside of the modal, close it
$(window).on("click", function (event) {
    event.preventDefault();
    const modal = $("#updateContactModal")
    if (event.target == modal) {
        $('#updateContactmodal').css("display", "none")
    }
})