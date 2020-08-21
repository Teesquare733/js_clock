let clock = document.getElementById('clock');
let clock1 = document.getElementById('clockone');
let clock2 = document.getElementById('clocktwo');
let clock3 = document.getElementById('clockthree');
let clock4 = document.getElementById('clockfour');

function showClock() {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    if(hours >= 24) {
        hours = hours - 24;
    }
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = 'AM';
    if(hours >= 12) {
        meridian = 'PM';
    }
    let column = ':';

    
    let time = `${hours} ${column} ${minutes} ${column} ${seconds} ${meridian}`;
    clock.innerHTML = time;
}
setInterval( function(){showClock()}, 1);


function showClockone() {
    let currentTime = new Date();

    let hours = currentTime.getHours()+2;
    if(hours >= 24) {
        hours = hours - 24;
    }
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = 'AM';
    if(hours >= 12) {
        meridian = 'PM';
    }
    let column = ':';
    
    let timeone = `${hours} ${column} ${minutes} ${column} ${seconds} ${meridian}`;
    clockone.innerHTML = timeone;
}
setInterval( function(){showClockone()}, 1);


function showClocktwo() {
    let currentTime = new Date();

    let hours = currentTime.getHours()-5;
    if(hours >= 24) {
        hours = hours - 24;
    }
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = 'AM';
    if(hours >= 12) {
        meridian = 'PM';
    }
    let column = ':';
    
    let timetwo = `${hours} ${column} ${minutes} ${column} ${seconds} ${meridian}`;
    clocktwo.innerHTML = timetwo;
}
setInterval( function(){showClocktwo()}, 1);


function showClockthree() {
    let currentTime = new Date();

    let hours = currentTime.getHours()-4;
    if(hours >= 24) {
        hours = hours - 24;
    }
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = 'AM';
    if(hours >= 12) {
        meridian = 'PM';
    }
    let column = ':';
    let timethree = `${hours} ${column} ${minutes} ${column} ${seconds} ${meridian}`;
    clockthree.innerHTML = timethree;
}
setInterval( function(){showClockthree()}, 1);


function showClockfour() {
    let currentTime = new Date();

    let hours = currentTime.getHours()+8;
    if(hours >= 24) {
        hours = hours - 24;
    }
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = 'AM';
    if(hours >= 12) {
        meridian = 'PM';
    }
    let column = ':';
    let timefour = `${hours} ${column} ${minutes} ${column} ${seconds} ${meridian}`;
    clockfour.innerHTML = timefour;
}
setInterval( function(){showClockfour()}, 1);
