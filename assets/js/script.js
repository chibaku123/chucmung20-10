function checkValid() {
    var input = document.getElementById("nhapngaysinh");
    if (input.value == "19/11") {
        window.location = "index1.html"
     } else {
        alert("Ngày sinh không chính xác!");
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



$("#nhapngaysinh").on('keyup', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        checkValid();
    }
});