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
        for (i = 0; i < namesData.length; i++) {
            for (j = 0; j < namesData.length; j++) 
            var newRowContent1 = "<tr><td>" + namesData[i] + "</td><td>" + amountsData[i] + "</td></tr>";
            $(newRowContent1).appendTo($('#transTable'));
        }
        
    //No amount made
    } else {
        $('#trans').hide();
        $('#transTable').hide();

    }
});