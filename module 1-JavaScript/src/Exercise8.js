let events = [

    {
        name: "Music Night",
        category: "Music"
    },

    {
        name: "Health Camp",
        category: "Health"
    },

    {
        name: "Sports Competition",
        category: "Sports"
    }

];

function showEvents(eventArray){

    let output = "";

    eventArray.forEach(function(event){

        output +=
        "<p>" +
        event.name +
        " <button onclick='registerEvent(\"" +
        event.name +
        "\")'>Register</button></p>";

    });

    document.getElementById("eventList").innerHTML =
    output;
}

function registerEvent(eventName){

    alert("Registered for " + eventName);

}
function filterEvents(){

    let selectedCategory =
    document.getElementById("category").value;

    if(selectedCategory === "All"){

        showEvents(events);

    }
    else{

        let filteredEvents = events.filter(function(event){

            return event.category === selectedCategory;

        });

        showEvents(filteredEvents);

    }

}
function searchEvent(){

    let searchText =
    document.getElementById("searchBox").value.toLowerCase();

    let searchedEvents = events.filter(function(event){

        return event.name.toLowerCase().includes(searchText);

    });

    showEvents(searchedEvents);

}
showEvents(events);