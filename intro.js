//uses jQuery

var index = 0;
$(document).ready(function(){
    
    //step listener and function
    $('#next').click(function(){
        if(index == $(".step").length - 1){
            document.getElementById('viewer').className = "last";
            setTimeout(function(){location.assign('home.html');}, 1900);
        }
        else{
            $(".step")[index].className = "off step";
            index++;
            $(".step")[index].className = "on step";
        }
    });
});