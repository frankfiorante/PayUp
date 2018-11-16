$(document).ready(function() {
    console.log("names " + localStorage.getItem('names'));
    console.log("descriptions " + localStorage.getItem('descriptions'));
    console.log("amounts " + localStorage.getItem('amounts'));
    console.log("dates " + localStorage.getItem('dates'));

    //Payment amount was made
    if (localStorage.length > 0) {
        
    //No amount made
    } else {
        
    }
});