

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, { 
    initialView: 'dayGridMonth',
    windowResize: function (arg) { },
    height: "auto",
    selectable: true,
    editable: true,
    droppable: true,
    // eventDidMount: function(info) {
    //   var tooltip = new Tooltip(info.el, {
    //     title: info.el.title,
    //     placement: 'top',
    //     trigger: 'hover',
    //     container: 'body'
    //   });
    // },

    eventSources: [
      {
        url: '../api/calendar', // use the `url` property
      }
    ],
   

    eventDrop: function (arg) {
      var start = moment(arg.event.start).local().format()
      var end = moment(arg.event.end).local().format()

      $.ajax({
        url: `./api/calendar/${arg.event.id}`,
        type: "PUT",
        data: { id: arg.event.id, start: start, end: end },
      });
    },
    eventClick: function (arg) {
      var id = arg.event.id;
      var confirm = Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          $.ajax({
            url: `./api/calendar/${arg.event.id}`,
            type: "DELETE",
            dataType: 'json',
            data: { id: id },
          });
          location.reload()
        }
      })
      

    

    },
  })
  calendar.render();
});


$('#newEventOpen').on("click", function () {
  event.preventDefault();
  console.log('click')
  $('#newEventmodal').css("display", "block")
})


$('#newEventBtn').on("click", async function () {
  console.log("in the new event!!")
  event.preventDefault();

  const title = $('#title-event').val().trim();
  const start = $('#start-event').val().trim()
  const end = $('#end-event').val().trim()

  console.log(title, start, end)

  if (title && start && end) {
    const response = await fetch('/api/calendar', {
      method: 'POST',
      body: JSON.stringify({ title, start, end }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
    if (response.ok) {
      document.location.replace('/calendar');
      console.log("success", response)
    } else {
      console.log('Failed to create a contact');
    }
  }
})