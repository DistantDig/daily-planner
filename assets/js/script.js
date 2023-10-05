var today = dayjs();

$('#date-display').text(today.format('MMMM D, YYYY'));

function saveEvent() {
    console.log('Saving event');
}