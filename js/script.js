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
    // const seatBtn = button.innerText;

    button.addEventListener('click', function (e) {
        const buttonId = button.innerText;
        const ticketPriceText = getElementsInnerTextById('ticket-price');
        const ticketPrice = parseFloat(ticketPriceText);


        const selectedSeatText = getElementsInnerTextById('seat-count');
        const selectedSeat = parseInt(selectedSeatText);
        if (selectedSeat === 3) {
            removeElementsAttributeById('coupon-field', 'disabled');
            removeElementsAttributeById('apply-btn', 'disabled');
        }
        else {
            setElementsAttributeById('coupon-field', 'disabled');
            setElementsAttributeById('apply-btn', 'disabled');
        }

        const btn = getElementsById(buttonId);
        if (btn.classList.contains('selected')) {
            btn.classList.remove('selected');

            seatCount -= 1;
            setElementsInnerTextById('seat-count', seatCount);
            if (seatCount < 4) {
                const discountedContainer = getElementsById('discounted-container');
                const couponInput = getElementsById('coupon-field');
                couponInput.value = '';
                removeElementsAttributeById('coupon-input-container', 'hidden');
                discountedContainer.classList.add('hidden');
            }

            if (seatCount === 0) {
                setElementsAttributeById('next-btn', 'disabled');
            }

            availableSeat = availableSeat + 1;
            setElementsInnerTextById('available-seat', availableSeat);

            btn.style.backgroundColor = '';
            btn.style.color = '';

            totalPrice = totalPrice - ticketPrice;
            setElementsInnerTextById('total-price', totalPrice);

            grandTotal = totalPrice;
            setElementsInnerTextById('grand-total', grandTotal);

            const tableBody = getElementsById('tbody');
            const tableRow = tableBody.childNodes[3];
            tableBody.removeChild(tableRow);
            return;
        }
        btn.classList.add('selected');

        seatCount += 1;
        if (seatCount > 4) {
            btn.classList.remove('selected');

            seatCount -= 1;
            setElementsInnerTextById('seat-count', seatCount);

            alert('A maximum of 4 seats can be purchased.');
            return;
        }

        const numberField = getElementsById('number-field')
        const fieldValue = numberField.value;
        if (fieldValue.length === 11) {
            removeElementsAttributeById('next-btn', 'disabled');
        }

        availableSeat = availableSeat - 1;
        setElementsInnerTextById('available-seat', availableSeat);

        setElementsInnerTextById('seat-count', seatCount);
        setElementsColorById(buttonId);
        // setElementsAttributeById(buttonId, 'disabled');

        // const ticketPriceText = getElementsInnerTextById('ticket-price');
        // const ticketPrice = parseFloat(ticketPriceText);
        appendTableDataById('tbody', buttonId, 'Economy', ticketPriceText);

        totalPrice = totalPrice + ticketPrice;
        setElementsInnerTextById('total-price', totalPrice);
        grandTotal = totalPrice;
        setElementsInnerTextById('grand-total', grandTotal);
    })
}

// number input field function for enable next button
const numberField = getElementsById('number-field');
numberField.addEventListener('keyup', function (e) {
    let phoneNumberText = e.target.value;
    const selectedSeatText = getElementsInnerTextById('seat-count');
    const selectedSeat = parseInt(selectedSeatText);
    if (selectedSeat > 0 && phoneNumberText.length === 11) {
        removeElementsAttributeById('next-btn', 'disabled');
    }
    else {
        setElementsAttributeById('next-btn', 'disabled');
    }
})

// coupon code apply
function couponCodeApply() {
    const inputValue = getInputValueById('coupon-field');
    const discountedContainer = getElementsById('discounted-container');
    if (inputValue === 'NEW15' || inputValue === 'Couple 20') {
        if (inputValue === 'NEW15') {
            const discount = (totalPrice * 15) / 100;
            const discountedPrice = grandTotal - discount;
            setElementsInnerTextById('total-discount', discount);
            setElementsInnerTextById('grand-total', discountedPrice);
            setElementsAttributeById('coupon-input-container', 'hidden');
            discountedContainer.classList.remove('hidden');
        }
        else if (inputValue === 'Couple 20') {
            const discount = (totalPrice * 20) / 100;
            const discountedPrice = grandTotal - discount;
            setElementsInnerTextById('total-discount', discount);
            setElementsInnerTextById('grand-total', discountedPrice);
            setElementsAttributeById('coupon-input-container', 'hidden');
            discountedContainer.classList.remove('hidden');
        }
    }
    else {
        alert('Invalid Coupon Code');
    }
}

// successful purchase ticket modal
function successModal() {
    const myModal = getElementsById('my-modal');
    myModal.showModal();
}

// continue button clear all
function continueClearAll() {
    const navContainer = getElementsById('nav-section');
    navContainer.scrollIntoView()
    location.reload();
    return false;
}