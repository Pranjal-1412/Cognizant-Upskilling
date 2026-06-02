const eventName = "Community Clean-Up Drive";
const eventDate = "15 June 2026";

let availableSeats = 50;

document.getElementById("eventDetails").innerHTML =
`
Event Name: ${eventName} <br>
Event Date: ${eventDate} <br>
Available Seats: ${availableSeats}
`;

// Function for Registration

function registerUser(){

    availableSeats--;

    document.getElementById("seatInfo").innerHTML =
    "Seats Remaining: " + availableSeats;
}