document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      windowResize:  function(arg) {},
      height: "auto",
      selectable: true,
      editable: true,
      eventSources: [
        {
          url: '../api/calendar', // use the `url` property
          color: 'yellow',    // an option!
          textColor: 'black'  // an option!
        }
      ],
 
      
    });
  
    calendar.render();

      })
  

      $('#newEventOpen').on("click", function () {
        event.preventDefault();
        console.log('click')
        $('#newEventmodal').css("display", "block")
    })
    
    // When the user clicks on <span> (x), close the modal
    $(".close").on("click", function () {
        event.preventDefault();
        $('#newEventmodal').css("display", "none")
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