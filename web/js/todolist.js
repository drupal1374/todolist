
$(document).ready(function(){

    $('#new-todo').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
        {
            console.log('pressed enter');
        }
    });

});

