window.addEventListener('click', function (event) {

    const nextButton = document.getElementById('next-button');
    const modalBox = document.querySelector('.box');

    if (event.target === nextButton) {
        modalBox.classList.add('show');
    } else if (event.target === modalBox) {
        modalBox.classList.remove('show');
    }

})

const seatBooking = document.getElementsByClassName('commonClassName');

for (const iterator of seatBooking) {
    iterator.addEventListener('click', function totalPrice(event) {

        const ticketPrice = 550;

        const currentSeat = event.target.id;

        if (event.target.id == currentSeat) {

            event.target.classList.add('pointer-events-none');
            setBackGroundColor(currentSeat);

        }

        const selectSeatNumber = stringToNumber('select-seat');
        const seatLeftNumber = stringToNumber('seat-left');

        const selectSeat = selectSeatNumber + 1;
        setInnerText('select-seat', selectSeat);

        if (selectSeat > 4) {
            alert("You Are Out Now!");
            setInnerText('select-seat', 4);
            removeBackGroundColor(currentSeat);
        } else {
            const seatLeft = seatLeftNumber - 1;
            setInnerText('seat-left', seatLeft);
            td('resultPrint', currentSeat);
            const totalPrice = selectSeat * ticketPrice;
            setInnerText('total-price', totalPrice);
        }

        const applyButton = document.getElementById('apply-button');

        if (selectSeat === 4) {

            applyButton.removeAttribute("disabled");

        }
        
    })

}

document.addEventListener('click', function grandTotal() {

    const totalPrice = stringToNumber('total-price');

    const inputFieldValue = document.getElementById('couponField').value;

    const inputField = inputFieldValue.toLowerCase();

    const coupon = document.getElementById('coupon');

    if (inputField === "new15") {
        setInnerText('grand-total', totalPrice - (totalPrice * 0.15));
        coupon.classList.add('hidden');
    } else if (inputField === "couple 20") {
        setInnerText('grand-total', totalPrice - (totalPrice * 0.20));
        coupon.classList.add('hidden');
    } else {
        setInnerText('grand-total', totalPrice);
    }

})

function myFuntion() {
    
    const nextButton = document.getElementById("next-button");

    const phoneNumberString = document.getElementById('numberInput').value;

    console.log( phoneNumberString );

    if (phoneNumberString.charAt(0) = 0 ) {

        nextButton.removeAttribute("disabled");

    }

}




