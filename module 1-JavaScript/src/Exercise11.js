document.getElementById("registrationForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("eventError").innerHTML = "";

    const form = event.target;

    const name = form.elements["userName"].value;
    const email = form.elements["email"].value;
    const selectedEvent = form.elements["eventName"].value;

    let valid = true;

    if(name === ""){

        document.getElementById("nameError").innerHTML =
        " Name is required";

        valid = false;
    }

    if(email === ""){

        document.getElementById("emailError").innerHTML =
        " Email is required";

        valid = false;
    }

    if(selectedEvent === ""){

        document.getElementById("eventError").innerHTML =
        " Select an event";

        valid = false;
    }

    if(valid){

        document.getElementById("message").innerHTML =
        "Registration Successful";
    }

});