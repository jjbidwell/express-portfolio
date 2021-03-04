let contact = {}
let valid = {
    name: false,
    email: false,
    message: false
}
document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    contact = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val()
    }

    if (contact.name.trim() === "") {
        $("#name-warning").css("display", "block");
        valid.name = false;
    } else {
        $("#name-warning").css("display", "none");
        valid.name = true;
    }
    if (validateEmailAddress(contact.email.trim()) === -1) {
        $("#email-warning").css("display", "block");
        valid.email = false;
    } else {
        $("#email-warning").css("display", "none");
        valid.email = true;
    }
    if (contact.message.trim() === "") {
        $("#message-warning").css("display", "block");
        valid.message = false;
    } else {
        $("#message-warning").css("display", "none");
        valid.message = true;
    }

    if (valid.name === true && valid.email === true && valid.message === true){
        sendEmail();
    }
})

function sendEmail() {
    $.ajax({
        url: "/contact",
        method: "POST",
        data: contact
    }).then(() => {
        alert("Thank you for contacting me, I will be sure to get back to you as soon as I can")
        location.replace("/")
    })
}

function validateEmailAddress(input) {
    var regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (regex.test(input)) {
        return 1;
    } else {
        return -1;
    }
}