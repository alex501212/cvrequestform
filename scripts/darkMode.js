//this script allows the page to be toggled between 2 css files to create a darkmode option
var toggled = true;

function toggleDarkMode() {
    if (toggled) {
        toggled = false;
        document.getElementById('style').setAttribute('href', 'css/webform_dark.css'); //switches out the page's stylesheet

        //if cookies were accepted then darkmode preferences are stored
        if (localStorage.getItem("cookieBannerDisplayed", "true")) {
            localStorage.setItem("darkMode", "true");
        }
        return;
    } else if (!toggled) {
        toggled = true;
        document.getElementById('style').setAttribute('href', 'css/webform.css'); //switches out the page's stylesheet

        //if cookies were accepted then darkmode preferences are removed
        if (localStorage.getItem("cookieBannerDisplayed", "true")) {
            localStorage.removeItem("darkMode");
        }
        return;
    }
}

$(document).ready(function() { //wait until document is ready
    //gets localstorage item for darmode preferences and if true will set the page to darkmode
    if (localStorage.getItem("darkMode", "true")) {
        toggled = false;
        document.getElementById('style').setAttribute('href', 'css/webform_dark.css'); // switches out the page's stylesheet
    }
});