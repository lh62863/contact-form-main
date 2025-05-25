const form = document.querySelector("form")


form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    const  inputs = document.querySelectorAll("input[required],textarea[required]");
    inputs.forEach(input => {
        
        if (!input.checkValidity()) {
            if (input.getAttribute("id") === "firstName") {
                document.querySelector(".firstname_error").classList.add("invalid");
            }
            if (input.getAttribute("id") === "lastName") {
                document.querySelector(".lastname_error").classList.add("invalid");
            }
            if (input.getAttribute("id") === "email") {
                document.querySelector(".email_error").classList.add("invalid");
            }
            if (input.getAttribute("id") === "general" || input.getAttribute("for") === "support") {
                document.querySelector(".query_error").classList.add("invalid");
            }
            if (input.getAttribute("id") === "message") {
                document.querySelector(".message_error").classList.add("invalid");
            }
            if (input.getAttribute("id") === "consent") {
                document.querySelector(".consent_error").classList.add("invalid");
            }
        }else {
            if (input.getAttribute("id") === "firstName") {
                document.querySelector(".firstname_error").classList.remove("invalid");
            }
            if (input.getAttribute("id") === "lastName") {
                document.querySelector(".lastname_error").classList.remove("invalid");
            }
            if (input.getAttribute("id") === "email") {
                document.querySelector(".email_error").classList.remove("invalid");
            }
            if (input.getAttribute("id") === "general" || input.getAttribute("for") === "support") {
                document.querySelector(".query_error").classList.remove("invalid");
            }
            if (input.getAttribute("id") === "message") {
                document.querySelector(".message_error").classList.remove("invalid");
            }
            if (input.getAttribute("id") === "consent") {
                document.querySelector(".consent_error").classList.remove("invalid");
            }
        }
    });
});

