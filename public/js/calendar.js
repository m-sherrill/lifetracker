


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
     
      initialView: 'dayGridMonth',
      windowResize:  function(arg) {},
      height: "auto",
      selectable: true,
      editable:true,
      droppable: true,
      slotEventOverlap: true,
      eventSources: [
        {
          url: '../api/calendar', // use the `url` property
        }
      ],
     
      eventDrop: function(arg) {
        var start = moment(arg.event.start).local().format()
        var end = moment(arg.event.end).local().format()
    
        $.ajax({
          url:`./api/calendar/${arg.event.id}`,
          type:"PUT",
          data:{id:arg.event.id, start:start, end:end},
        });
    },
    eventClick: function(arg) {
      var id = arg.event.id;
  
      $.ajax({
        url:`./api/calendar/${arg.event.id}`,
        type:"DELETE",
        dataType: 'json',
        data:{id:id},
      });
    
     }, 
    })  
     calendar.render();
    });
 

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