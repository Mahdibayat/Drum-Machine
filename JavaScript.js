function qSong() {
    q = document.getElementById('qSong');
    if (q.paused) {
        q.play();
    } else {
        q.pause();
    }
    q.volume = 0.75;
    var r = document.getElementById('display');
    r.innerHTML = '<p><b>the sea sounge</b> ...<br /> Duration: 00:57</p>';
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
    r.innerHTML = '<p><b>the sea sounge</b> ...<br /> Duration: 01:40</p>'
}
function eSong() {
    e = document.getElementById('eSong');
    if (e.paused) {
        e.play();
    } else {
        e.pause();
    }
    var r = document.getElementById('display');
    r.innerHTML = '<p><b>Fire</b><br /> Duration: 00:38</p>'
}
function aSong() {
    a = document.getElementById('aSong');
    if (a.paused) {
        a.play();
    } else {
        a.pause();
    }
    var r = document.getElementById('display');
    r.innerHTML = '<p><b>Rain <3</b> ...<br /> Duration: 01:40</p>'
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
    r.innerHTML = '<p><b>Gitar</b> ...<br /> Duration: 03:15</p>'
}
function dSong() {
    d = document.getElementById('dSong');
    if (d.paused) {
        d.play();
    } else {
        d.pause();
    }
    var r = document.getElementById('display');
    r.innerHTML = '<p><b>Dog barking</b> ...<br /> Duration: 01:40</p>'
}
function zSong() {
    z = document.getElementById('zSong');
    if (z.paused) {
        z.play();
    } else {
        z.pause();
    }
    var r = document.getElementById('display');
    r.innerHTML = '<p><b>Wind</b> ...<br /> Duration: 01:29</p>'
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
    r.innerHTML = '<p><b>Night and car</b> ...<br /> Duration: 03:31</p>'
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
    r.innerHTML = '<p><b>Ducks</b> ...<br /> Duration: 01:28</p>'
}

function pausee(){
    q.pause();
    w.pause();
    e.pause();
    a.pause();
    s.pause();
    d.pause();
    z.pause();
    x.pause();
    c.pause();
}
