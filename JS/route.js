// =====================================
// Transit Mumbai - Route Search Logic
// =====================================



// Sample transport data

const routes = [


{
    mode:"bus",
    name:"BEST Bus 315",
    route:"Andheri → Bandra",
    time:"45 min",
    fare:"₹20",
    status:"On Time"
},



{
    mode:"bus",
    name:"BEST Bus 221",
    route:"Dadar → Kurla",
    time:"35 min",
    fare:"₹18",
    status:"Running"
},



{
    mode:"metro",
    name:"Metro Line 1",
    route:"Versova → Ghatkopar",
    time:"32 min",
    fare:"₹40",
    status:"Normal"
},



{
    mode:"metro",
    name:"Metro Line 2A",
    route:"Dahisar → Andheri",
    time:"50 min",
    fare:"₹50",
    status:"Running"
},



{
    mode:"rail",
    name:"Western Railway",
    route:"Churchgate → Borivali",
    time:"38 min",
    fare:"₹15",
    status:"On Time"
},



{
    mode:"rail",
    name:"Central Railway",
    route:"CSMT → Thane",
    time:"55 min",
    fare:"₹20",
    status:"Delayed"
}



];








// SEARCH FUNCTION


function searchRoute(selectedMode){



let source =
document.getElementById("source").value;



let destination =
document.getElementById("destination").value;



let resultBox =
document.getElementById("routeResults");





let filteredRoutes = routes;



// Filter based on mode


if(selectedMode !== "all"){


filteredRoutes =
routes.filter(
route => route.mode === selectedMode
);


}






// Generate cards


resultBox.innerHTML = "";




filteredRoutes.forEach(route => {



let card =
document.createElement("div");



card.className =
"route-card " + route.mode + "-card";



card.innerHTML = `


<div>

<h3>
${route.name}
</h3>


<p>
${route.route}
</p>

</div>



<div>

<h3>
${route.time}
</h3>


<p>
${route.fare}
</p>

</div>



<span>
${route.status}
</span>



`;



resultBox.appendChild(card);



});






// If no routes


if(filteredRoutes.length === 0){


resultBox.innerHTML = `

<div class="white-card">

<h3>
No routes available
</h3>

<p>
Try another transport mode.
</p>

</div>

`;

}


}







// ENTER KEY SEARCH


document.addEventListener(
"keydown",
function(event){


if(event.key==="Enter"){


searchRoute("all");


}


});