function showEvents(events){

    let result = "";

    events.forEach(function(event){

        result += event.title + "<br>";

    });

    document.getElementById("output").innerHTML = result;
}


function loadEventsUsingPromise(){

    document.getElementById("loading").innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")

    .then(function(response){

        return response.json();

    })

    .then(function(data){

        document.getElementById("loading").innerHTML = "";

        showEvents(data);

    })

    .catch(function(error){

        document.getElementById("loading").innerHTML =
        "Error loading data";

        console.log(error);

    });

}


async function loadEventsAsync(){

    document.getElementById("loading").innerHTML = "Loading...";

    try{

        const response =
        await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

        const data = await response.json();

        document.getElementById("loading").innerHTML = "";

        showEvents(data);

    }

    catch(error){

        document.getElementById("loading").innerHTML =
        "Error loading data";

        console.log(error);

    }

}