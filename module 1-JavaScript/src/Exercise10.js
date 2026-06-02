const events = [

    {
        name: "Music Night",
        date: "10 June 2026",
        category: "Music"
    },

    {
        name: "Health Camp",
        date: "15 June 2026",
        category: "Health"
    },

    {
        name: "Sports Competition",
        date: "20 June 2026",
        category: "Sports"
    }

];


function displayEvent(eventName = "Community Event"){

    return "Event: " + eventName;

}


function showDetails(){

    const {name, date, category} = events[0];

    const copiedEvents = [...events];

    let result = "";

    result += "<h3>Using Default Parameter</h3>";
    result += displayEvent() + "<br><br>";

    result += "<h3>Using Destructuring</h3>";
    result += "Name: " + name + "<br>";
    result += "Date: " + date + "<br>";
    result += "Category: " + category + "<br><br>";

    result += "<h3>Using Spread Operator</h3>";
    result += "Total Events in Cloned List: ";
    result += copiedEvents.length;

    document.getElementById("output").innerHTML =
    result;
}