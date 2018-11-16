//Set Date to Current Date
var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day);
$('#date').val(today);

//Set Buttons to Blue When Clicked
var pressed = 0;
function btnSelectGet(){
    $('#btnget').addClass("w3-blue");
    $('#btnowe').removeClass("w3-blue");
    pressed = 1;
}

function btnSelectOwe(){
    $('#btnowe').addClass("w3-blue");
    $('#btnget').removeClass("w3-blue");
    pressed = 2;
}

//Save names through local storage
let namesArray = localStorage.getItem('names') ? JSON.parse(localStorage.getItem('names')) : [];
let descriptionsArray = localStorage.getItem('descriptions') ? JSON.parse(localStorage.getItem('descriptions')) : [];
let amountsArray = localStorage.getItem('amounts') ? JSON.parse(localStorage.getItem('amounts')) : [];
let datesArray = localStorage.getItem('dates') ? JSON.parse(localStorage.getItem('dates')) : [];
let ownersArray = localStorage.getItem('owners') ? JSON.parse(localStorage.getItem('owners')) : [];

document.getElementById('form').addEventListener('submit', function() {
    var names = document.getElementById('name').value;
    var descriptions = document.getElementById('description').value;
    var amounts = document.getElementById('amount').value;
    var dates = document.getElementById('date').value;
    
    var owners = "";
    if (pressed == 1) { owners = "get"; } 
    else if (pressed == 2) { owners = "owe"; } 
    else { owners = ""; }

    namesArray.push(names);
    descriptionsArray.push(descriptions);
    amountsArray.push(amounts);
    datesArray.push(dates);
    ownersArray.push(owners);

    localStorage.setItem('names', JSON.stringify(namesArray));
    localStorage.setItem('descriptions', JSON.stringify(descriptionsArray));
    localStorage.setItem('amounts', JSON.stringify(amountsArray));
    localStorage.setItem('dates', JSON.stringify(datesArray));
    localStorage.setItem('owners', JSON.stringify(ownersArray));
})