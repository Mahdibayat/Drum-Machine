function qSong() {
    q = document.getElementById('qSong');
    if (q.paused) {
        q.play();
    } else {
        q.pause();
    }
    q.volume = 0.75;
    var r = document.getElementById('display');
    r.innerHTML = '<p><b>دریا</b></p>';
}
function wSong() {
    w = document.getElementById('wSong');
    if (w.paused) {
        w.play();
    } else {
        w.pause();
    }
    w.volume= 0.75;
    var r = document.getElementById('display');
    r.innerHTML = '<p><b>پرندگان در صبح</b></p>'
}
function eSong() {
    e = document.getElementById('eSong');
    if (e.paused) {
        e.play();
    } else {
        e.pause();
    }
    var r = document.getElementById('display');
    r.innerHTML = '<p><b> آتش </b></p>'
}
function aSong() {
    a = document.getElementById('aSong');
    if (a.paused) {
        a.play();
    } else {
        a.pause();
    }
    var r = document.getElementById('display');
    r.innerHTML = '<p><b>باران</b></p>'
}
function sSong() {
    s = document.getElementById('sSong');
    if (s.paused) {
        s.play();
    } else {
        s.pause();
    }
    s.volume=0.4;
    var r = document.getElementById('display');
    r.innerHTML = '<p><b>موزیک گیتار</b></p>'
}
function dSong() {
    d = document.getElementById('dSong');
    if (d.paused) {
        d.play();
    } else {
        d.pause();
    }
    var r = document.getElementById('display');
    r.innerHTML = '<p><b>پارس سگ</b></p>'
}
function zSong() {
    z = document.getElementById('zSong');
    if (z.paused) {
        z.play();
    } else {
        z.pause();
    }
    var r = document.getElementById('display');
    r.innerHTML = '<p><b>باد</b></p>'
}
function xSong() {
    x = document.getElementById('xSong');
    if (x.paused) {
        x.play();
    } else {
        x.pause();
    }
    x.volume = 0.45;
    var r = document.getElementById('display');
    r.innerHTML = '<p><b>شب اتومبیل</b></p>'
}
function cSong() {
    c = document.getElementById('cSong');
    if (c.paused) {
        c.play();
    } else {
        c.pause();
    }
    c.volume = 0.7;
    var r = document.getElementById('display');
    r.innerHTML = '<p><b>مرغابی</b></p>'
}
function Volomee() {
    var x = document.getElementById('volumee');
    var val = x.value;
    var code = document.getElementById('code').value;
    var y = document.getElementById(code + 'Song');
    y.volume = val / 10;
}
function pausee() {
    
}
