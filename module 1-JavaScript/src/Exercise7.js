let events = [

    {
        name: "Tree Plantation Drive",
        seats: 20
    },

    {
        name: "Health Camp",
        seats: 15
    },

    {
        name: "Music Festival",
        seats: 10
    }

];


const container = document.querySelector("#eventContainer");

function displayEvents(){

    container.innerHTML = "";

    events.forEach(function(event){

        let card = document.createElement("div");

        card.style.border = "1px solid black";
        card.style.padding = "10px";
        card.style.margin = "10px";

        card.innerHTML =
        "<h3>" + event.name + "</h3>" +
        "<p>Seats Available: " + event.seats + "</p>";

        container.appendChild(card);

    });

}

function registerEvent(){

    if(events[0].seats > 0){

        events[0].seats--;

        document.querySelector("#message").innerHTML =
        "Registration Successful";

        displayEvents();
    }

}

function cancelRegistration(){

    events[0].seats++;

    document.querySelector("#message").innerHTML =
    "Registration Cancelled";

    displayEvents();

}