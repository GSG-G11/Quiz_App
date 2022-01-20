// Start code for Qustion Page
// //St  of userName


// // End of userName

// Start code for Login Page
// Store userName in Local Storge

let input = document.querySelector("#input");
let btn = document.querySelector("#btn");

btn.addEventListener("click", (value) => {
    if (input.value != "") {
        localStorage.setItem("userName", input.value);
        location.href = "/question.html"
    } else {
        alert("Enter your Name Please!");
    }
});
// End code for Login Page




