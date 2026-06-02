let events = [

    {
        name: "Tree Plantation Drive",
        category: "Environment"
    },

    {
        name: "Health Camp",
        category: "Health"
    },

    {
        name: "Music Night",
        category: "Music"
    }

];

function addEvent(name, category){

    events.push({
        name: name,
        category: category
    });

    document.getElementById("output").innerHTML =
    "New Event Added Successfully";
}

function registerUser(category){

    let total = registrationCounter(category);

    document.getElementById("output").innerHTML =
    "Total " + category +
    " Registrations: " + total;
}


function filterEventsByCategory(category, callback){

    let result = events.filter(function(event){

        return event.category === category;

    });

    callback(result);
}


function createCounter(){

    let count = 0;

    return function(){

        count++;

        return count;
    };
}

const registrationCounter = createCounter();


function displayEvents(eventList){

    let text = "";

    eventList.forEach(function(event){

        text += event.name + "<br>";

    });

    document.getElementById("output").innerHTML =
    text;
}

function showMusicEvents(){

    filterEventsByCategory(
        "Music",
        displayEvents
    );

}