document.getElementById("submit").addEventListener("click", (event)=> {
    event.preventDefault();
    const contact = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val()
    }
})