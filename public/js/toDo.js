// todo lists ******** //

// add new todo list
$("#todoBtn").on("click", async function () {

  event.preventDefault();

  const name = $('#todoTitle').val().trim();
  //const content = $('#todoBody').val().trim()

  if (name) {
      console.log('ABOUT TO SAVE TODO SMACKING THE ROUTE!!')
      const response = await fetch('/api/todos', {
          method: 'POST',
          body: JSON.stringify({ name }),
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

// Delete todo list
$('.deletetodo').on("click", async function () {
  event.preventDefault(),
      console.log("click")
  let id = $(this).data("id")
  console.log(id)
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
  const response = await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    })
  
  if (response.ok) {
      document.location.replace('/todo');
  } else {
      alert('Failed to delete todo');
  }
}

})

// update todo list name
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
      document.location.replace('/todo');
      console.log("success", response)
  } else {
      console.log('Failed to create a todo');
  }

})

// todo items ******** //

// Add items to a list
$(".addItemBtn").on("click", async function () {
    event.preventDefault();
    const { value: name } = await Swal.fire({
        title: 'What item would you like to add?',
        input: 'text',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
          }
        }
      })

    let id = $(this).data("id")    
    if (name) {
        console.log('ABOUT TO SAVE TODO SMACKING THE ROUTE!!')
        const response = await fetch('/api/todos/items', {
            method: 'POST',
            body: JSON.stringify({ name, id }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.replace('/todo');
        } else {
            console.log('todo failed');
        }
    }
  })
  
  $('.deleteItemBtn').on("click", async function () {
    event.preventDefault(),
        console.log("click")
    let id = $(this).data("id")
    console.log(id)
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
    const response = await fetch(`/api/todos/items/${id}`, {
        method: 'DELETE',
    });
        if (response.ok) {
            document.location.replace('/todo');
        } else {
            alert('Failed to delete todo');
        }
    
}
    
  })
  
  var togSrc = [ "./images/down.png", "./images/collapse.png" ];

  $(".tog").click(function() {
     this.src =  togSrc.reverse()[0];
  });

  $('.expand-one').click(function(){
      console.log("CLICKY CLICKY!!!!")
    let id = $(this).data("id")
    $(`.content${id}`).slideToggle('slow')
    $(this).find('img').toggle();
})