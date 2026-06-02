let events = [

    {
        name: "Music Concert",
        category: "Music"
    },

    {
        name: "Health Camp",
        category: "Health"
    },

    {
        name: "Baking",
        category: "Workshop"
    }

];


function addEvent(){

    events.push({

        name: "Dance Night",
        category: "Music"

    });

    document.getElementById("output").innerHTML =
    "New Event Added Successfully";
}

function showMusicEvents(){

    let musicEvents = events.filter(function(event){

        return event.category === "Music";

    });

    let result = "<h3>Music Events</h3>";

    musicEvents.forEach(function(event){

        result += event.name + "<br>";

    });

    document.getElementById("output").innerHTML =
    result;
}

function showFormattedEvents(){

    let eventCards = events.map(function(event){

        return "Workshop on " + event.name;

    });

    let result = "<h3>Formatted Events</h3>";

    eventCards.forEach(function(item){

        result += item + "<br>";

    });

    document.getElementById("output").innerHTML =
    result;
}