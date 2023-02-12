function play(element) {
    $(element).hide();
    $("#player2").show();
    audio = document.getElementById("muz");
    audio.play();
}

function pause(element) {
    $(element).hide();
    $("#player1").show();
    audio = document.getElementById("muz");
    audio.pause();
}
