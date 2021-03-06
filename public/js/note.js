$("#noteBtn").on("click", async function () {

    event.preventDefault();

    const title = $('#noteTitle').val().trim();
    const content = $('#noteBody').val().trim()

    if (title) {
        const response = await fetch('/api/notes', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/notes');
        }
    }
})

$('.deleteNote').on("click", async function () {
    event.preventDefault()
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
    const response = await fetch(`/api/notes/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/notes');
    } else {
        alert('Failed to delete note');
    }
}
})

$('.updateBtn').on("click", function () {
    let id = $(this).data("id")
    event.preventDefault();

    $(`#updateNoteModal${id}`).css("display", "block")
})


$(".updateNoteBtn").on("click", async function () {
    let id = $(this).data("id")
    const title = $(`#updateNoteModal${id} :input#noteTitleUpdate${id}`).val()
    const content = $(`#updateNoteModal${id} :input#noteContentUpdate${id}`).val().trim()




    const response = await fetch(`/api/notes/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/notes');
    }

})