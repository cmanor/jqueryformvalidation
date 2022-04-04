$('#submit').on('click', function()
{
    let nam = $("#name");
    let email = $("#email");
    let phone = $("#phone");
    let ma = $("#message-area");
    let required = [nam, email, phone];

    for (i=0; i<required.length; i++) 
    {
        if (required[i].val() == "")
        {
        $("#message").html("Please Fill Out Required Fields");
        $("#message").addClass("warning");
        required[i].prev().addClass("warning");
        } else 
            {
            required[i].prev().removeClass("warning");
            }   
    }
    if (!$("label").hasClass("warning"))
        {
        $("#form").remove();
        $("h2").html("Thanks for your feedback!");
        }
});