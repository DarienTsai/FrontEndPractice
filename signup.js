//written in Vanilla JS
//DOM for the signup popup
let d = document;

//gets the signup box to appear
let navSign = d.getElementById('sign-a');
let sign = d.getElementById('log');

navSign.addEventListener(
    'click',
    signUp
);

sign.addEventListener(
    'click',
    signUp
);

let pop = d.getElementById('sign');
let close = d.getElementById('close');

function signUp() {
    pop.className = "active";
}

close.addEventListener(
    'click',
    function(){
        pop.className = "off";
    },
);

//switches between signing up or signing in
let upp = d.getElementById('upp');
let inns = d.getElementById('inn');
let up = d.getElementById('up');
let ins = d.getElementById('in');
let over = d.getElementById('over');

upp.addEventListener('click',
function(){
    ins.className="off";
    inns.className="";
    up.className="formed";
    upp.className="on";
}
);

inns.addEventListener('click',
function(){
    up.className="off";
    upp.className="";
    ins.className="formed";
    inns.className="on";
}
);

//Navigates to home or intro after start is clicked.
let start = d.getElementById('start-button');
let bod = d.getElementById('bod');

start.addEventListener('click',
function(){
    over.className="in";
    if(up.className=="off"){
        setTimeout(function(){location.assign("home.html");}, 1000);
    }
    else{
        setTimeout(function(){location.assign("intro.html");}, 1000);
    }
});