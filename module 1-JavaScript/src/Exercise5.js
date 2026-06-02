function Event(name, date, seats){

    this.name = name;
    this.date = date;
    this.seats = seats;
}

Event.prototype.checkAvailability = function(){

    if(this.seats > 0){
        return "Seats Available";
    }
    else{
        return "Event Full";
    }

};

const event1 = new Event(
    "Tree Plantation Drive",
    "15 June 2026",
    25
);

const event2 = new Event(
    "Health Camp",
    "20 June 2026",
    0
);

function showEventDetails(){

    let output = "";

    output += "<h3>Event 1</h3>";

    for(let [key, value] of Object.entries(event1)){

        output += key + " : " + value + "<br>";

    }

    output +=
    "Status : "
    + event1.checkAvailability()
    + "<br><br>";


    output += "<h3>Event 2</h3>";

    for(let [key, value] of Object.entries(event2)){

        output += key + " : " + value + "<br>";

    }

    output +=
    "Status : "
    + event2.checkAvailability();

    document.getElementById("output").innerHTML =
    output;
}