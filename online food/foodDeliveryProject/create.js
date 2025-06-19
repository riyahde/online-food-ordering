document.addEventListener("DOMContentLoaded", () => {

    let un = document.querySelector(".input");
    let pass = document.querySelector(".input1");
    let submit = document.querySelector(".sub");
    let btn = document.querySelector(".localbtn");
    let localP = document.querySelector(".localp");


    let loginU = document.querySelector(".loginUser");
    let loginP = document.querySelector(".loginPass");
    let loginB = document.querySelector(".loginbtn");


    let specialButton = document.querySelector(".backbtn");


    function prd(event) {
        event.preventDefault();
    }



    if (submit) {
        submit.addEventListener("click", (e) => {
            prd(e);
            let user = un.value.trim();
            let password = pass.value.trim();
            if (user && password) {
                localStorage.setItem("storedText", user);
                localStorage.setItem("storedpass", password);
                alert("Account has been created");
            } else {
                alert("Enter both username and password");
            }
        });
    }

    // Display stored data
    // if (btn) {
    //     btn.addEventListener("click", (e) => {
    //         e.preventDefault();
    //         const local = localStorage.getItem("storedText");
    //         const local1 = localStorage.getItem("storedpass");
    //         if (local && local1) {
    //             localP.textContent = `Stored Username: ${local}, Password: ${local1}`;
    //         } else {
    //             localP.innerText = "Nothing is stored";
    //         }
    //     });
    // } else {
    //     console.error("Local storage button not found in the DOM.");
    // }

    if (loginB) {
        loginB.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent form refresh
            const userInput = loginU.value.trim();
            const passInput = loginP.value.trim();
            const storedUser = localStorage.getItem("storedText");
            const storedPass = localStorage.getItem("storedpass");

            if (!userInput || !passInput) {
                alert("Please fill in both fields.");
                return;
            }

            if (storedUser === userInput && storedPass === passInput) {
                alert("Password Matched! Please wait...");
                window.location.href = "homepage.html";
            } else {
                alert("Incorrect username or password.");
            }
        });
    }


    if (specialButton) {
        specialButton.addEventListener("click", (e) => {
            e.preventDefault();
            const link = specialButton.querySelector("a");
            if (link) {
                window.location.href = link.href;
            }
        });
    }
});
