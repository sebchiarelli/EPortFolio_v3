var galleryIndex = 0;
setInterval("change_background()", 12000);

var divbg = document.querySelector(".background");

var gallery = ["puydufou", "ciotat", "road_trip"];
var nav = document.querySelector("nav");

function change_background(){
    
    divbg.setAttribute("style", "background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('images/"+ gallery[galleryIndex] +".jpg'); height: 100vh; background-size: cover;");         
    galleryIndex++;
    if(galleryIndex > 2){
        galleryIndex = 0;
    }
}

window.addEventListener('scroll',goingdown);

function goingdown(){
    nav.classList.add("scrollnav");
}































/*    switch (x) {

        case 0:
            divbg.setAttribute("style", "background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('images/paugres.jpg'); height: 100vh; background-size: cover;");
            
            break;
    
        case 1:
            divbg.setAttribute("style", "background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('images/sicile.jpg'); height: 100vh; background-size: cover;");
            
            break;
    
        case 2:
            divbg.setAttribute("style", "background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('images/italie.jpg'); height: 100vh; background-size: cover;");
            
            break;
    
        case 3:
            divbg.setAttribute("style", "background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('images/ciotat.jpg'); height: 100vh; background-size: cover;");
            
            break;
    
        case 4:
            divbg.setAttribute("style", "background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('images/puydufou.jpg'); height: 100vh; background-size: cover;");
            
            break; 
    
        default:
            x = 0;
            divbg.setAttribute("style", "background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('images/road_trip.jpg'); height: 100vh; background-size: cover;");
            break; 
    }    */

