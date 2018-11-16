const namesData = JSON.parse(localStorage.getItem('names'));
const amountsData = JSON.parse(localStorage.getItem('amounts'));

$(document).ready(function() {
    var items = ["names","descriptions","amounts","dates","owners"];
    items.forEach(element => {
        console.log(element + " :" + localStorage.getItem(element));
    });
    
    //Payment amount was made
    if (localStorage.length > 0) {
        $('#trans').show();
        $('#transTable').show();
        
    //No amount made
    } else {
        $('#trans').hide();
        $('#transTable').hide();

    }
});