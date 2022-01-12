// Add a new contact fetch
$("#newContactBtn").on("click", async function () {
    
    event.preventDefault();

    const first_name = $(`#firstName-contact`).val().trim();
    const last_name = $(`#lastName-contact`).val().trim()
    const phone = $(`#phone-contact`).val().trim()
    const email = $(`#email-contact`).val().trim()
    const notes = $(`#notes-contact`).val().trim()
    
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

// const updateUser = (first_name,last_name,phone,email,notes)

// Update a contact fetch
$(".updateContact").on("click", async function () {
    let id = $(this).data("id")
    console.log('ID TO CONTACT TO CHANGE!',id)
    const first_name = $(`#updateContactModal${id} :input#firstName-Ucontact`).val().trim();
    const last_name = $(`#updateContactModal${id} :input#lastName-Ucontact`).val().trim()
    const phone = $(`#updateContactModal${id} :input#phone-Ucontact`).val().trim()
    const email = $(`#updateContactModal${id} :input#email-Ucontact`).val()
    const notes = $(`#updateContactModal${id} :input#notes-Ucontact`).val().trim()

    const response = await fetch(`/api/contacts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ first_name, last_name, phone, email, notes }),
        headers: { 'Content-Type': 'application/json' },
    });

    console.log(`response body is`, response.body)
    if (response.ok) {
        document.location.replace('/contacts');
        console.log("success", response)
    } else {
        console.log('Failed to create a contact');
    }

})

$('.deleteContact').on("click", async function() {
    event.preventDefault(),
    console.log("click")
    let id = $(this).data("id")
    var confirm = await Swal.fire({
        title: 'Are you sure you would like to delete this item?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      console.log(confirm.isConfirmed)
      if (confirm.isConfirmed === true) {
    const response = await fetch(`/api/contacts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/contacts');
      } else {
        alert('Failed to delete project');
      }
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

// Update Contact Modal Clicks
// When the user clicks on the button, open the modal

$('.updateContactOpen').on("click", function () {
    let id = $(this).data("id")
    event.preventDefault();
    console.log('click')
    $(`#updateContactModal${id}`).css("display", "block")
})

// When the user clicks on <span> (x), close the modal
$(".close").on("click", function () {
    event.preventDefault();
    $(`.closeModal`).css("display", "none")
})

