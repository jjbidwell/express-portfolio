document.getElementById("submit").addEventListener("click", (event)=> {
    event.preventDefault();
    const contact = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val()
    }
    $.ajax({
        url: "/contact",
        method: "POST",
        data: contact
    }).then(()=>{
        alert("Thank you for contacting me, I will be sure to get back to you as soon as I can")
        location.replace("/")
    })
})