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
    iterator.addEventListener('click', function (event) {

        const ticketPrice = 550;

        const currentSeat = event.target.id;
        console.log(currentSeat);
        setBackGroundColor(currentSeat);

        if (event.target.id == currentSeat) {
            setBackGroundColor(currentSeat);
        }

        td('resultPrint', currentSeat);
        td('resultPrint', "Economoy");
        td('resultPrint', ticketPrice);

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
        }

        const totalPrice = selectSeat * ticketPrice;
        setInnerText('total-price', totalPrice);

        const applyButton = document.getElementById('apply-button');

        if (selectSeat === 4) {

            applyButton.removeAttribute("disabled");
        }

    })
}
