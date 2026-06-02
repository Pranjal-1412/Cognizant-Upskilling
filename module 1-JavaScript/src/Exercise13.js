document.getElementById("regForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    console.log("Form submission started");

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    console.log("Name:", name);
    console.log("Email:", email);

    const userData = {

        name: name,
        email: email

    };

    console.log("Payload:", userData);

    fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(userData)
        }
    )

    .then(function(response){

        console.log("Response received");

        return response.json();

    })

    .then(function(data){

        console.log("Success:", data);

        document.getElementById("message").innerHTML =
        "Registration Successful";

    })

    .catch(function(error){

        console.log("Error:", error);

        document.getElementById("message").innerHTML =
        "Registration Failed";

    });

});