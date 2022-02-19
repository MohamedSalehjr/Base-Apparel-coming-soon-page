// Validate Email

$(".btn").on("click", function (e) {

    let email = $(".email").val();

    function validateEmail(email) {
        var emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return emailReg.test(email);
    }

    if (validateEmail(email)) {
        $("input").removeClass("invalid");
        $(".warning").css("display", "none");
    } else {
        $("input").addClass("invalid");
        $(".warning").css("display", "block");
        e.preventDefault();
    }
})