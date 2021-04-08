let lowercase = "abcdefghijklmnopqrstuvwxyz".split(""), uppercase = "ABCDEFGHIJKLMNOPWRSTUVWXYZ".split(""),
    numbers = "0123456789".split(""), button = $("#generate"), password = $("#result"), confirm = $("#confirm"),
    actualPassword = $("#generate__pass"), value = password.val(), pw = "";
button.click((function () {
    $(".form-inner").addClass("form-inner--active"), $(".ps-generate__submit").addClass("active");
    let e = [].concat(lowercase, uppercase, numbers);
    if (0 === e.length) return void password.text("Select symbol types");
    if (isNaN(20)) password.text("Enter password length"); else {
        pw = !0;
        for (let s = 0; s < 20; s++) pw += e[Math.floor(Math.random() * e.length)];
        password.val(pw)
    }
})), confirm.click((function () {
    "" !== password.val() ? actualPassword.text(password.val()) : $(".ps-generate__submit").removeClass("active")
}));