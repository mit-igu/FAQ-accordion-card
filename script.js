// var accordion = document.getElementsByClassName("accordion");
// var i;

// for(i=0; i< accordion.length; i++){
//     accordion[i].addEventListener("click", function(){
//         this.classList.toggle("active");
//         var accordion_text = this.nextElementSibling;
//         if(accordion_text.style.display ==="block"){
//             accordion_text.style.display = "none";
//         }else{
//             for(i=0; i<accordion.length; i++){
//                 if(accordion[i].nextElementSibling.style.display === "block"){
//                     accordion[i].nextElementSibling.style.display = "none";
//                     accordion[i].classList.toggle("active");
//                 }
//             }
//             accordion_text.style.display = "block";
//         }
//     })
// }



var accordion = document.getElementsByClassName("accordion");
var i;

document.body.onload = function(){
    at = document.getElementsByClassName("accordion-text");
    for(i=0; i<at.length; i++){
        at[i].style.fontSize = 0+"px";
    }
}

for(i=0; i< accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var accordion_text = this.nextElementSibling;
        if(accordion_text.style.fontSize != 0+"px"){
            accordion_text.style.fontSize = 0+"px";
        }else{
            for(i=0; i<accordion.length; i++){
                if(accordion[i].nextElementSibling.style.fontSize != "0px"){
                    accordion[i].nextElementSibling.style.fontSize = 0;
                    accordion[i].classList.toggle("active");
                }
            }
            accordion_text.style.fontSize = 0.8 + "em";
        }
    })
}

