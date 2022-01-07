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
        console.log(response)
        if (response.ok) {
            document.location.replace('/notes');
            console.log("success", response)
        } else {
            console.log('note failed');
        }
    }
})

$('.deleteNote').on("click", async function () {
    event.preventDefault(),
        console.log("click")
    let id = $(this).data("id")
    console.log(id)
    const response = await fetch(`/api/notes/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/notes');
    } else {
        alert('Failed to delete note');
    }
})

$('.updateBtn').on("click", function () {
    let id = $(this).data("id")
    event.preventDefault();
    console.log('click')
    $(`#updateNoteModal${id}`).css("display", "block")
})


$(".updateNoteBtn").on("click", async function () {
    let id = $(this).data("id")
    const title = $(`#noteTitleUpdate${id}`).val()
    const content = $(`#noteContentUpdate${id}`).val().trim()
    console.log(title)



    const response = await fetch(`/api/notes/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response.body)
    if (response.ok) {
        document.location.replace('/notes');
        console.log("success", response)
    } else {
        console.log('Failed to update the note');
    }

})