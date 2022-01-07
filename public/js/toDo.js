// // Create a "close" button and append it to each list item
// const myNodelist = document.getElementsByTagName("LI");
// const i;
// for (i = 0; i < myNodelist.length; i++) {
//   const span = document.createElement("SPAN");
//   const txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// const close = document.getElementsByClassName("close");
// const i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     const div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// const list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   const li = document.createElement("li");
//   const inputValue = document.getElementById("myInput").value;
//   const t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   const span = document.createElement("SPAN");
//   const txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       const div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }
$("#todoBtn").on("click", async function () {

  event.preventDefault();

  const title = $('#todoTitle').val().trim();
  //const content = $('#todoBody').val().trim()

  if (title) {
      console.log('ABOUT TO SAVE TODO SMACKING THE ROUTE!!')
      const response = await fetch('/api/todos', {
          method: 'POST',
          body: JSON.stringify({ title }),
          headers: { 'Content-Type': 'application/json' },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/toDo');
          console.log("success", response)
      } else {
          console.log('todo failed');
      }
  }
})

$('.deletetodo').on("click", async function () {
  event.preventDefault(),
      console.log("click")
  let id = $(this).data("id")
  console.log(id)
  const response = await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
  });

  if (response.ok) {
      document.location.replace('/todos');
  } else {
      alert('Failed to delete todo');
  }
})

$('.updateBtn').on("click", function () {
  let id = $(this).data("id")
  event.preventDefault();
  console.log('click')
  $(`#updateTODOModal${id}`).css("display", "block")
})


$(".updateTODOBtn").on("click", async function () {
  let id = $(this).data("id")
  console.log(id)
  const name = $('#todoNameUpdate').val()
  const user_id = $('#noteContentUpdate').val().trim()

  const response = await fetch(`/api/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, user_id }),
      headers: { 'Content-Type': 'application/json' },
  });
  console.log(response.body)
  if (response.ok) {
      document.location.replace('/todos');
      console.log("success", response)
  } else {
      console.log('Failed to create a todo');
  }

})