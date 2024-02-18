window.addEventListener( 'click', function( event ){

    const nextButton = document.getElementById('next-button');
    const modalBox = document.querySelector('.box');

    if (event.target === nextButton) {
        modalBox.classList.add('show');
    }else if( event.target === modalBox ){
        modalBox.classList.remove( 'show' );
    }

})
