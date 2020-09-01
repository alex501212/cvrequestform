//this script handles the cookie banner and its functionality
var cookiesEnabled = false;

$(document).ready(function() { //wait until document is ready
    const cookieContainer = document.querySelector(".cookie_container");
    const cookieButton = document.querySelector(".cookie_btn");

    //waits for the user to click the "accept" button
    cookieButton.addEventListener("click", () => {
        cookieContainer.classList.remove("active"); //removes the banner for cookies
        localStorage.setItem("cookieBannerDisplayed", "true"); //adds local storage item showing cookies were accepted
        cookiesEnabled = true;
    });

    setTimeout(() => {
        if (!localStorage.getItem("cookieBannerDisplayed")) { //if local storage item for cookies are not found (if cookies arent accepted)
            cookieContainer.classList.add("active"); //dispalys the banner for cookies
        }
    }, 2000); //wait 2 seconds
});