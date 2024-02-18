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

    const td = document.createElement('td');
    td.innerText = value;
    resultPush.appendChild(td);
    
}

