// =====================================
// Transit Mumbai - Journey Planner Logic
// =====================================



let selectedPreference = "fastest";





// ROUTE PREFERENCE SWITCH


function selectPreference(type){


    selectedPreference = type;



    let fastest =
    document.getElementById("fastestBtn");


    let transfer =
    document.getElementById("transferBtn");



    fastest.classList.remove("selected");

    transfer.classList.remove("selected");




    if(type === "fastest"){


        fastest.classList.add("selected");


    }

    else{


        transfer.classList.add("selected");


    }


}








// PLAN JOURNEY FUNCTION


function planJourney(){



    let start =
    document.getElementById("startPoint").value;



    let destination =
    document.getElementById("endPoint").value;



    let message =
    document.getElementById("journeyMessage");





    if(start === "" || destination === ""){


        message.innerHTML = `

        <div class="white-card">

        <h3>
        Enter journey details
        </h3>

        <p>
        Please provide starting point and destination.
        </p>

        </div>

        `;


        return;

    }






    let routeType = 
    selectedPreference === "fastest"
    ? "Fastest Route Selected"
    : "Fewest Transfer Route Selected";







    message.innerHTML = `


    <div class="white-card">


    <p class="eyebrow">
    JOURNEY CREATED
    </p>



    <h2>
    ${start} → ${destination}
    </h2>



    <p>
    ${routeType}
    </p>



    <br>



    <p>
    🚌 BEST Bus 315 → 🚇 Metro Line 1 → 🚆 Suburban Rail
    </p>



    <p>
    Estimated Time: 52 minutes
    </p>



    <p>
    Total Fare: ₹55
    </p>



    </div>


    `;



}







// DEMO DEFAULT ROUTE


window.addEventListener("load",()=>{


    console.log(
        "Journey Planner Ready"
    );


});