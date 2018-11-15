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
document.getElementById('form').addEventListener('submit', function() {
    var names = document.getElementById('name').value;
    namesArray.push(names);
    localStorage.setItem('names', JSON.stringify(namesArray));
})