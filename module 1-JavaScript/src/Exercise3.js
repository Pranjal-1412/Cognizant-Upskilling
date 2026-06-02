const events = [

    {
        name: "Tree Plantation Drive",
        seats: 20,
        upcoming: true
    },

    {
        name: "Old Cultural Program",
        seats: 15,
        upcoming: false
    },

    {
        name: "Health Camp",
        seats: 0,
        upcoming: true
    }

];

const eventDiv = document.getElementById("eventList");

events.forEach(function(event){

    if(event.upcoming && event.seats > 0){

        eventDiv.innerHTML +=
        "<p>" +
        event.name +
        " | Seats Available: " +
        event.seats +
        "</p>";

    }

});


function register(){

    try{

        let selectedEvent = events[0];

        if(selectedEvent.seats <= 0){

            throw "No seats available";

        }

        selectedEvent.seats--;

        document.getElementById("message").innerHTML =
        "Registration Successful. Remaining Seats: "
        + selectedEvent.seats;

    }

    catch(error){

        document.getElementById("message").innerHTML =
        "Error: " + error;

    }

}