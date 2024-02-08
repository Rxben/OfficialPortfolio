window.onload = function() {
    bdaycheck()
}

function smoothscroll(element){
    var part = document.getElementById(element);
    console.log("scrollHeight: ",part.scrollHeight);
    console.log("clientHeight: ",part.clientHeight);
    console.log("offsetHeight: ",part.offsetHeight);


    part.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", alignToTop: true });
}

function bdaycheck(){
    // 10 feb 2003 until now
    var bday = document.getElementById("me");
    var startTime = new Date("2003-02-10T12:00:00");
    var endTime = new Date(); 

    var timeDifference = endTime - startTime;

    // var seconds = Math.floor(timeDifference / 1000);
    // var minutes = Math.floor(seconds / 60);
    // var hours = Math.floor(minutes / 60);
    // var days = Math.floor(hours / 24);
    // var year = Math.floor(days / 365)
    var year = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000)); //calculate years passed since 10 feb 2003

    console.log("TimeDifference in years: " + year);

    bday.innerText = "Hello there! 👋 I'm Ruben,  i am "+ year +" years of age and i am"
}

function aboutMe(index){
    var content = document.getElementsByClassName("content")
    switch(index){
        case 0:
            console.log("Index 0");
            content[0].style.display = "block";
            content[1].style.display = "none";
            content[2].style.display = "none";
            content[3].style.display = "none";
            content[4].style.display = "none";
            break;
        case 1:
            console.log("Index 1")
            content[0].style.display = "none";
            content[1].style.display = "block";
            content[2].style.display = "none";
            content[3].style.display = "none";
            content[4].style.display = "none";

            break;
        case 2:
            console.log("Index 2");
            content[0].style.display = "none";
            content[1].style.display = "none";
            content[2].style.display = "block";
            content[3].style.display = "none";
            content[4].style.display = "none";

            break;
        case 3:
            console.log("Index 3")
            content[0].style.display = "none";
            content[1].style.display = "none";
            content[2].style.display = "none";
            content[3].style.display = "block";
            content[4].style.display = "none";
            break;
        case 4:
            console.log("Index 4")
            content[0].style.display = "none";
            content[1].style.display = "none";
            content[2].style.display = "none";
            content[3].style.display = "none";
            content[4].style.display = "block";
            break;
    }
}

function expand(index){
    console.log(index);
    const idk = document.getElementsByClassName("hidden");

    switch(index){
        case 0:
            // if (idk[index].style.display == "block"){
            //     idk[index].style.display = "none" 
            // }else{
            //     idk[index].style.display = "block" 
            // } 

            // USE TERNARY OPERATOR
            idk[index].style.display = (idk[index].style.display === "block") ? "none" : "block";
            break;
        case 1:
            idk[index].style.display = (idk[index].style.display === "block") ? "none" : "block";
            break;
        case 2:
            idk[index].style.display = (idk[index].style.display === "block") ? "none" : "block";
            break;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var slideSection = document.getElementById("slide");
    var website = document.getElementById('website');
    website.style.display = "none"

    setTimeout(function() {
        website.style.opacity = 1;
        website.style.display = "block";
        document.getElementById("loadingscreen").style.display = "none";
    }, 1000); 

    website.style.opacity = 0;
    website.style.display = "block";
    setTimeout(function() {
        website.style.opacity = 1;
    }, 2000); 

    setTimeout(function() { slideSection.style.left = "0%"; }, 500);
});

document.getElementById('elementToShake').addEventListener('click', function() {
    var part = document.getElementById('website')
    part.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", alignToTop: true });
    this.classList.toggle('shake');
    setTimeout(() => {this.classList.toggle('shake');},700)
    });
