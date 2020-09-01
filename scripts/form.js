//this script is used for validation of the web form
function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // email validation regex pattern
}

function validName(name) {
    return /[a-zA-z]+/.test(name); // name validation regex pattern
}

$(document).ready(function() { // wait for page to load

    $(".error").hide();
    // cursor in email input box
    $("#email").focus();

    $('#myForm').submit(function(evt) {
        evt.preventDefault(); // stop the natural html form submit
        error = false;
        // get the current form values
        var email = $("#email").val(); // get email from form
        var name = $("#person_name").val();
        var company = $("#company_name").val();
        var comment = $("#usercomment").val();
        var cv = $("input[name=cvChoice]:checked", "#myForm").val();

        // test if ok to send

        if (!validEmail(email)) // if email doesnt match the "email" regex pattern
        {
            // fade in animation to show error text
            $("#err_email").fadeOut();
            $("#err_email").fadeIn();
            error = true;
        } else {
            // hide error text
            $("#err_email").hide();
        }

        if (!validName(name)) // if name doesnt match the "name" regex pattern
        {
            // fade in animation to show error text
            $("#err_name").fadeOut();
            $("#err_name").fadeIn();
            error = true;
        } else {
            // hide error text
            $("#err_name").hide();
        }

        if (email == "" || name == "" || company == "" || comment == "" || cv == "") // if any fields are empty
        {
            // fade in animation to show error text
            $("#err_fields").fadeOut();
            $("#err_fields").fadeIn();
            error = true;
        } else {
            // hide error text
            $("#err_fields").hide();
        }

        if (!error) // when the form is filled out and submitted properly
            document.getElementById("myForm").submit();
        console.log("*form submitted*"); //
    });

});