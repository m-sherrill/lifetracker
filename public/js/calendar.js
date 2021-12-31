document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      windowResize:  function(arg) {},
      height: "auto",
      selectable: true,
      editable: true,
      events: [
        { // this object will be "parsed" into an Event Object
          title: 'Sample Event 1', // a property!
          start: '2021-12-20', // a property!
          end: '2021-12-20' // a property! ** see important note below about 'end' **
        },
        { // this object will be "parsed" into an Event Object
            title: 'Sample Event 2', // a property!
            start: '2021-12-25', // a property!
            end: '2021-12-28' // a property! ** see important note below about 'end' **
          }
      ]
    });
    calendar.render();
  });