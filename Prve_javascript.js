function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "inline") {
        x.style.display = "none";
    } else {
        x.style.display = "inline";
    }
}

var i = 0;
var images = [];
var time = 3000;


images[0] = "Fotky/Photo.jpg";
images[1] = "Fotky/Photo_2.jpg";
images[2] = "Fotky/Photo.jpg";
images[3] = "Fotky/Photo_2.jpg";


function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }


    setTimeout("changeImg()", time);
}


window.onload = changeImg;
