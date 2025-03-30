

const submitBtn = document.getElementById("submitBtn");
const inputs = document.querySelectorAll("input");
const errorMessages = document.querySelectorAll(".error-alert");
const p2 = document.getElementById("p2");
console.log(errorMessages);
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let hasError = false;
    let nameValue = "", emailValue = "", githubValue = "";
    inputs.forEach((input, index) => {
        const value = input.value.trim();
        const type = input.getAttribute("type");
        let errorMessage = input.nextElementSibling;
        

        if (!errorMessage || !errorMessage.classList.contains("error-alert")) {
            errorMessage = input.parentNode.querySelector(".error-alert");
        }

        if (!errorMessage) return; 

        if ((type === "text" || type === "email") && value === "") {
            input.classList.add("error");
            errorMessage.style.display = "block";
            hasError = true;
        } else if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            input.classList.add("error");
            errorMessage.style.display = "block";
            hasError = true;
        } else if(type === "file" && value === ""){
            input.classList.add("error");
            p2.textContent = "Please Insert a Photo";
            p2.style.color = "var(--color-6)";
            p2.style.textAlign = "left";
            hasError = true;
        }
        else {
            input.classList.remove("error");
            errorMessage.style.display = "none";
        }

        if (input.name === "username") {
            nameValue = value;
        }else if(input.name === "e-mail"){
            emailValue = value;
        }else{
            githubValue = value;
        }
        
          console.log("Error message for", input.name, ":", errorMessage);
    });

    if (!hasError) {
        console.log("Email before saving:", emailValue);
        let ticketNum = Math.floor(Math.random() * 3000);
        localStorage.setItem("username", nameValue);
        localStorage.setItem("email", emailValue);
        localStorage.setItem("githubUser", githubValue);
        localStorage.setItem("ticketNumber", ticketNum);
        window.location.href = "./ticket.html";

        
        }

});


