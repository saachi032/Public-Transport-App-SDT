// =====================================
// Transit Mumbai - Timetable Logic
// =====================================


// LIVE SERVICE UPDATE SIMULATION


function updateServiceStatus(){


    const statuses = [

        "On Time",

        "Running",

        "5 min Delay",

        "Normal"

    ];



    let tags = document.querySelectorAll(
        ".normal-tag, .warning-tag"
    );



    tags.forEach(tag => {


        let randomStatus =
        statuses[
            Math.floor(
                Math.random() * statuses.length
            )
        ];



        tag.innerHTML = randomStatus;



        if(randomStatus === "5 min Delay"){


            tag.className = "warning-tag";


        }

        else{


            tag.className = "normal-tag";


        }


    });


}






// Update timetable status every minute

setInterval(
    updateServiceStatus,
    60000
);






// PAGE LOAD

window.addEventListener(
"load",
()=>{


    console.log(
        "Timetable Loaded Successfully"
    );


});