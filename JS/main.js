// =====================================
// Transit Mumbai - Common JavaScript
// =====================================



// LIVE CLOCK

function updateTime() {

    const timeElement = document.getElementById("time");


    if (timeElement) {

        let now = new Date();


        let hours = now.getHours();

        let minutes = now.getMinutes();


        let ampm = hours >= 12 ? "PM" : "AM";


        hours = hours % 12;

        hours = hours ? hours : 12;


        minutes = minutes < 10 ? "0" + minutes : minutes;


        timeElement.innerHTML =
            hours + ":" + minutes + " " + ampm;

    }

}



// Update every second

setInterval(updateTime,1000);


// Run immediately

updateTime();







// CURRENT DATE DISPLAY

function getCurrentDate(){

    let today = new Date();


    return today.toLocaleDateString(
        "en-IN",
        {
            day:"2-digit",
            month:"short",
            year:"numeric"
        }
    );

}







// NAVIGATION ACTIVE STATE


const currentPage = window.location.pathname.split("/").pop();


const navLinks = document.querySelectorAll(".navigation a");


navLinks.forEach(link => {


    if(link.getAttribute("href") === currentPage){

        link.classList.add("active");

    }


});








// TRANSIT STATUS SIMULATION


function updateTransitStatus(){


    const statusMessages = [

        "MMR Transit: Normal Operations",

        "MMR Transit: All Corridors Active",

        "MMR Transit: Services Running Smoothly"

    ];



    const status =
        statusMessages[
            Math.floor(Math.random()*statusMessages.length)
        ];



    const statusElement =
        document.querySelector(".status-pill");



    if(statusElement){

        statusElement.innerHTML =
        "● " + status;

    }


}




// Change status every 30 seconds

setInterval(updateTransitStatus,30000);









// QUICK BUTTON CLICK EFFECT


const buttons =
document.querySelectorAll(".quick-buttons a");



buttons.forEach(button=>{


    button.addEventListener("click",()=>{


        button.style.transform="scale(0.95)";


        setTimeout(()=>{

            button.style.transform="scale(1)";

        },100);



    });


});






// PAGE LOAD MESSAGE


window.addEventListener("load",()=>{


    console.log(
        "Transit Mumbai Dashboard Loaded Successfully"
    );


});