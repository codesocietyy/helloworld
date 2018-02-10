"use strict";

window.addEventListener("load", function(){

    let panel = this.document.getElementById("p");
    console.log(panel);

    console.log(panel.innerHTML);

    let heading = document.getElementById("heading");

    heading.addEventListener("click", function(){
        heading.style.color = "red";

    }, false)
},false)