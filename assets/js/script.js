var today = dayjs();
var nineEvent = $('input[name="9am-event"]');
var tenEvent = $('input[name="10am-event"]');
var elevenEvent = $('input[name="11am-event"]');
var twelveEvent = $('input[name="12pm-event"]');
var oneEvent = $('input[name="1pm-event"]');
var twoEvent = $('input[name="2pm-event"]');
var threeEvent = $('input[name="3pm-event"]');
var fourEvent = $('input[name="4pm-event"]');
var fiveEvent = $('input[name="5pm-event"]');
var events = [nineEvent, tenEvent, elevenEvent, twelveEvent, oneEvent, twoEvent, threeEvent, fourEvent, fiveEvent];

$('#date-display').text(today.format('MMMM D, YYYY'));

renderEvents();
renderColors();

function renderEvents() {
    for (var i = 0; i < events.length; i++) {
        var stringedObject = JSON.stringify(events[i].attr('name'));
        events[i].attr('value', localStorage.getItem(stringedObject));
    }
}


function saveEvent(index) {
    console.log('Saving event');
    var stringedObject = JSON.stringify(events[index].attr('name'));
    localStorage.setItem(stringedObject, events[index].val());
    events[index].attr('value', localStorage.getItem(stringedObject));
}

function renderColors() {
    var hour = today.hour();
    // var hour = 13
    for (var i = 0; i < events.length; i++) {
        if (9 + i < hour) {
            events[i].addClass('text-primary-emphasis bg-dark-subtle border border-light-subtle');
        } else if (9 + i > hour) {
            events[i].addClass('text-primary-emphasis bg-success-subtle border border-success-subtle');
        } else {
            events[i].addClass('text-primary-emphasis bg-primary-subtle border border-primary-subtle');
        }
    }
}