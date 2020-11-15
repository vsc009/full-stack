//Selectors
var time = document.getElementById("time");
var greeting = document.getElementById("greeting");
var myname = document.getElementById("name");
var date = document.getElementById("date");

//Event Handlers
myname.addEventListener("keypress", setName);
myname.addEventListener("blur", setName);

//Functions
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let dates = today.toDateString();

    date.innerHTML = dates;

    const amPm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);
}

function addZero(n) {
    var s = (parseInt(n) < 10 ? "0" : "") + n;
    return s;
}

function setGreeting() {
    let today = new Date();
    let hour = today.getHours();

    if (hour < 12) {
        greeting.innerHTML = "Good Morning";
        document.body.style.backgroundImage = 'url("../img/morning.jpg")';
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "position";
    } else if (hour < 18) {
        greeting.innerHTML = "Good Afternoon";
        document.body.style.backgroundImage = 'url("../img/afternoon.jpg")';
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "position";
        document.body.style.color = "white";
    } else {
        greeting.innerHTML = "Good Evening";
        document.body.style.backgroundImage = 'url("../img/evening.jpg")';
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "position";
        document.body.style.color = "white";
    }
}

function getName() {
    if (localStorage.getItem("myName") == null)
        myname.innerHTML = "[Enter Name]";
    else
        myname.innerHTML = localStorage.getItem("myName");
}

function setName(e) {
    if (e.type == "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem("myName", e.target.innerHTML);
            myname.blur();
        }
    } else
        localStorage.setItem("myName", e.target.innerHTML);
}


//Function calls
showTime();
setGreeting();
getName();