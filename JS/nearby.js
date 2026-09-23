// =====================================
// Transit Mumbai - Nearby Stops Logic
// =====================================



const nearbyStops = [


{
    name:"Andheri Metro Station",
    type:"Metro Line 1",
    distance:"0.4 km",
    walk:"5 min walk",
    crowd:"Low Crowd",
    crowdClass:"crowd-low"
},



{
    name:"Andheri Railway Station",
    type:"Western Railway",
    distance:"0.7 km",
    walk:"8 min walk",
    crowd:"Moderate",
    crowdClass:"crowd-medium"
},



{
    name:"BEST Bus Stop 215",
    type:"Andheri Market",
    distance:"0.2 km",
    walk:"3 min walk",
    crowd:"Low Crowd",
    crowdClass:"crowd-low"
},



{
    name:"DN Nagar Metro Station",
    type:"Metro Line 2A",
    distance:"1.2 km",
    walk:"14 min walk",
    crowd:"Moderate",
    crowdClass:"crowd-medium"
}



];








// REFRESH LOCATION


function refreshStops(){


    let stopList =
    document.getElementById("stopList");



    stopList.innerHTML = "";




    nearbyStops.forEach(stop => {



        let card =
        document.createElement("div");



        card.className =
        "stop-card";



        card.innerHTML = `


        <div>

            <h3>
            ${stop.name}
            </h3>

            <p>
            ${stop.type}
            </p>

        </div>



        <div>

            <strong>
            ${stop.distance}
            </strong>

            <p>
            ${stop.walk}
            </p>

        </div>



        <span class="${stop.crowdClass}">
            ${stop.crowd}
        </span>



        `;



        stopList.appendChild(card);



    });






    alert(
        "Nearby transit locations updated successfully"
    );


}







// INITIAL LOAD


window.addEventListener(
"load",
()=>{


    console.log(
        "Nearby Stops Loaded"
    );


});