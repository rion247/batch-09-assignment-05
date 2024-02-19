function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function stringToNumber(elementId) {
    const string = document.getElementById(elementId).innerText;
    const number = parseInt(string);
    return number;
}

function setBackGroundColor(id) {
    const element = document.getElementById(id);
    element.classList.remove( 'bg-neutral-300' );
    element.classList.add('bg-lime-500');
}

function removeBackGroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-lime-500');
    element.classList.add( 'bg-neutral-300' );
}

function td(id, value) {
    
    const resultPush = document.getElementById( id );  

    const ticketPrice = 550;

    const tr = document.createElement( 'tr' );
    resultPush.appendChild( tr );

    const td1 = document.createElement('td');
    td1.innerText = value;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.innerText = "Economoy";
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.innerText = ticketPrice;
    tr.appendChild(td3);
    
}
