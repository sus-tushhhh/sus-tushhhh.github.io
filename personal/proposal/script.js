function randint(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let list = ["Are you sure❓", "Am I not good for u❓"];

function teleport_random() {
    var b = document.getElementById("no");
    if (b.innerHTML.includes("I don't") || b.innerHTML == list[0]) {
        b.innerHTML = list[0];
    } else {
        b.style.position = "absolute";
        b.style.bottom = `${randint(0, 60)}%`;
        b.style.left = `${randint(20, 70)}%`;
    }
}

function mouseex() {
    var b = document.getElementById("no");
    if (b.innerHTML == list[0]) {
        b.innerHTML = "No, I don't <span id='rb'>love</span> you 😓";
    }
}

function no_click() {
    var b = document.getElementById("no");
    if (b.innerHTML == list[1]) {
        teleport_random();
    } else {
        b.innerHTML = list[1];
        teleport_random();
    }
}

function isMobile() {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
        )
    ) {
        return true;
    } else {
        return false;
    }
}

// function load(){
//     var body = document.getElementById('body');
//     if(isMobile() == true){
//         body.innerHTML = "Mobile phones (iPhone, Android) are not supported";
//     }
// }

function set_text() {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("relation")) {
        var h = document.getElementById("relation");
        h.innerHTML = searchParams.get("relation");
    }
    if (searchParams.has("loveto")) {
        var h = document.getElementById("loveto");
        h.innerHTML = searchParams.get("loveto");
    }
    if (searchParams.has("heading")) {
        var h = document.getElementById("heading");
        h.innerHTML = searchParams.get("heading");
    }
}

async function fireworks() {
    var f = document.getElementById("fireworks");
    var f2 = document.getElementById("fireworks2");
    f.style.display = "block";
    f2.style.display = "block";
}
