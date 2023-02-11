function play() {
    audio = document.getElementById("muz");

    var promise = document.getElementById("muz").play();
    console.log(promise);
    console.log(document.getElementById("muz").currentTime);
    console.log("hi")
}

