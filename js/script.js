// Scroll down to ticket section
function scrollSection() {
    const ticketBooking = getElementsById('ticket-booking');
    ticketBooking.scrollIntoView();
}

// click seat button function
const seatButton = getElementsByClassName('.seat');
const availableSeatText = getElementsInnerTextById('available-seat');
let availableSeat = parseInt(availableSeatText);
let totalPrice = 0;
let grandTotal = 0;
let seatCount = 0;
for (const button of seatButton) {
    button.addEventListener('click', function (e) {
        const buttonId = button.innerText;
        setElementsBgColorById(buttonId);
        setElementsAttributeById(buttonId, 'disabled');

        availableSeat = availableSeat - 1;
        setElementsInnerTextById('available-seat', availableSeat);

        seatCount += 1;
        setElementsInnerTextById('seat-count', seatCount);

        const ticketPriceText = getElementsInnerTextById('ticket-price');
        const ticketPrice = parseFloat(ticketPriceText);
        appendTableDataById('tbody', buttonId, 'Economy', ticketPriceText);
    })
}