var D = document.getElementById("centerLayer");
var i = 0.0;
var b = true;

setInterval(function () {
    if (D.style.opacity > 1.0)
        b = false;
    if (D.style.opacity < 0.1)
        b = true;
    if (b == true) {
        i += 0.002;
    } else {
        i -= 0.002;
    }
    D.style.opacity = i.toString();
}, 1);
