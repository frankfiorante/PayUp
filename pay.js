//Set Date to Current Date
var now = new Date();
var day = ("0" + now.getDate()).slice(-2);
var month = ("0" + (now.getMonth() + 1)).slice(-2);
var today = now.getFullYear()+"-"+(month)+"-"+(day);
$('#date').val(today);

//Set Buttons to Blue When Clicked
function btnSelectGet(){
    $('#btnget').addClass("w3-blue");
    $('#btnowe').removeClass("w3-blue");
}

function btnSelectOwe(){
    $('#btnowe').addClass("w3-blue");
    $('#btnget').removeClass("w3-blue");
}

//Save names through local storage
let namesArray = localStorage.getItem('names') ? JSON.parse(localStorage.getItem('names')) : [];
let descriptionsArray = localStorage.getItem('descriptions') ? JSON.parse(localStorage.getItem('descriptions')) : [];
let amountsArray = localStorage.getItem('amounts') ? JSON.parse(localStorage.getItem('amounts')) : [];
let datesArray = localStorage.getItem('dates') ? JSON.parse(localStorage.getItem('dates')) : [];

document.getElementById('form').addEventListener('submit', function() {
    var names = document.getElementById('name').value;
    var descriptions = document.getElementById('description').value;
    var amounts = document.getElementById('amount').value;
    var dates = document.getElementById('date').value;

    namesArray.push(names);
    descriptionsArray.push(descriptions);
    amountsArray.push(amounts);
    datesArray.push(dates);

    localStorage.setItem('names', JSON.stringify(namesArray));
    localStorage.setItem('descriptions', JSON.stringify(descriptionsArray));
    localStorage.setItem('amounts', JSON.stringify(amountsArray));
    localStorage.setItem('dates', JSON.stringify(datesArray));
})