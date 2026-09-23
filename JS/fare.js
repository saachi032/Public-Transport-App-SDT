// =====================================
// Transit Mumbai - Fare Calculator Logic
// =====================================



// Route data

const fareData = {


    bus: {

        routes: [
            {
                name:"Andheri → Bandra",
                fare:20
            },

            {
                name:"Dadar → Kurla",
                fare:18
            },

            {
                name:"Borivali → Kandivali",
                fare:15
            }

        ]

    },





    metro: {


        routes:[

            {
                name:"Versova → Ghatkopar",
                fare:40
            },


            {
                name:"Dahisar → Andheri",
                fare:50
            },


            {
                name:"Airport Road → DN Nagar",
                fare:30
            }


        ]


    },







    rail:{


        routes:[

            {
                name:"Churchgate → Borivali",
                fare:15
            },


            {
                name:"CSMT → Thane",
                fare:20
            },


            {
                name:"Dadar → Kalyan",
                fare:25
            }


        ]


    }



};










// UPDATE ROUTE DROPDOWN


function updateRoutes(){



    let mode =
    document.getElementById("fareMode").value;



    let routeSelect =
    document.getElementById("fareRoute");



    routeSelect.innerHTML = "";




    fareData[mode].routes.forEach(route=>{


        let option =
        document.createElement("option");


        option.value = route.fare;


        option.innerHTML =
        route.name;



        routeSelect.appendChild(option);



    });



}










// CALCULATE FARE


function calculateFare(){



    let route =
    document.getElementById("fareRoute");



    let fare =
    route.value;




    document.getElementById("fareAmount")
    .innerHTML =
    "₹" + fare;



}









// LOAD DEFAULT DATA


window.addEventListener(
"load",
()=>{


    updateRoutes();


    console.log(
        "Fare Calculator Loaded"
    );


});