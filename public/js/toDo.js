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

// todo items


$(".addItemBtn").on("click", async function () {


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
      console.log(name)
    event.preventDefault();

    let id = $(this).data("id")
    // const name = $(`#todoItemTitle${id}`).val();
    
    console.log("CLICK!! TODO ITEMS!! " + id + " after ID", + name)
    
    if (name) {
        console.log('ABOUT TO SAVE TODO SMACKING THE ROUTE!!')
        const response = await fetch('/api/todos/items', {
            method: 'POST',
            body: JSON.stringify({ name, id }),
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

  $('.expand-one').click(function(){
      console.log("CLICKY CLICKY!!!!")
    let id = $(this).data("id")
    $(`.content${id}`).slideToggle('slow')
});