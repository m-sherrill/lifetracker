// // If user adds a note, add it to the localStorage
// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", function(e) {
//     let addTxt = document.getElementById("addTxt");
//     let notes = localStorage.getItem("notes");

//     if (notes == null) notesObj = [];
//     else notesObj = JSON.parse(notes);

//     notesObj.push(addTxt.value);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     addTxt.value = "";

//     showNotes();
// });

// // Function to show elements from localStorage.
// function showNotes() {
//     let notes = localStorage.getItem("notes");

//     if (notes == null) notesObj = [];
//     else notesObj = JSON.parse(notes);

//     let html = "";

//     notesObj.forEach(function(element, index) {
//         html += `<div class="noteCard my-2 mx-2 card" 
//             style="width: 18rem;">
//                 <div class="card-body">
//                     <h5 class="card-title">
//                         Note ${index + 1}
//                     </h5>
//                     <p class="card-text"> 
//                         ${element}
//                     </p>

//                   <button id="${index}" onclick=
//                     "deleteNote(this.id)"
//                     class="btn btn-primary">
//                     Delete Note
//                 </button>
//             </div>
//         </div>`;
//     });

//     let notesElm = document.getElementById("notes");

//     if (notesObj.length != 0) notesElm.innerHTML = html;
//     else
//         notesElm.innerHTML = `Nothing to show! 
//         Use "Add a Note" section above to add notes.`;
// }

// // Function to delete a note
// function deleteNote(index) {
//     let notes = localStorage.getItem("notes");

//     if (notes == null) notesObj = [];
//     else notesObj = JSON.parse(notes);

//     notesObj.splice(index, 1);

//     localStorage.setItem("notes", 
//         JSON.stringify(notesObj));

//     showNotes();
// }


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
    console.log(id)
    const title = $('#noteTitleUpdate').val()
    const content = $('#noteContentUpdate').val().trim()

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
        console.log('Failed to create a contact');
    }

})