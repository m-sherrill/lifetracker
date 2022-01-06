

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    weekends: true,
    navLinks: true,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    themeSystem: 'standard',
    windowResize: function (arg) { },
    height: "auto",
    selectable: true,
    editable: true,
    droppable: true,
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
        title: 'Are you sure you would like to delete this event?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          $.ajax({
            url: `./api/calendar/${arg.event.id}`,
            type: "DELETE",
            dataType: 'json',
            data: { id: id },
          });

        }
        location.reload()
      })




    },
  })
  calendar.render();
});



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
    } else {
      console.log('Failed to create a contact');
    }
  }
})