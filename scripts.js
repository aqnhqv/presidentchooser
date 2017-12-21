inputs = [];

$("#main-button").click(function() {
    $("#main-panel").addClass("animated rollOut");
    inputs = getInputs();
    $("#main-panel").remove();
    $("#video-panel").css("display", "block");
    $("#video-panel").addClass("animated rollIn");
    $("#video-player").get(0).play();
    var winner = inputs[random()-1];
    $("#presidente").html("Presidente: " + winner);
});

function getInputs() {
    var inputs = $("input");
    var results = [];
    inputs.each(function() {
        results.push($(this).val());
    });
    return results;
}

function random() {
    return Math.floor(Math.random() * 6) + 1;
}

document.getElementById("video-player").addEventListener('ended',myHandler,false);
function myHandler(e) {
    $("#video-panel").removeClass("animated rollIn");
    $("#video-panel").addClass("animated rollOut");
    $("#video-panel").remove();
    $("#result-panel").css("display", "block");
    $("#result-panel").addClass("animated rollIn");
}

$("#reload-button").click(function() {
   location.reload();
});