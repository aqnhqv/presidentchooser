var inputs = [];
$main_panel = $("#main-panel");
$video_panel = $("#video-panel");
$result_panel = $("#result-panel")

$("#main-button").click(function() {
    $main_panel.addClass("animated rollOut");
    inputs = getInputs();
    $main_panel.remove();
    $video_panel.css("display", "block");
    $video_panel.addClass("animated rollIn");
    $("#video-player").get(0).play();
    var index = random(inputs.length);
    var winner = inputs[index];
    $("#presidente").html("Habemus Presidente <br>" + winner);
});

function getInputs() {
    var inputs = $("input");
    var results = [];
    inputs.each(function() {
        results.push($(this).val());
    });
    return results;
}

function random(max) {
    var millis = new Date().getTime();
    return millis % max;
}

document.getElementById("video-player").addEventListener('ended',myHandler,false);
function myHandler(e) {
    $video_panel.removeClass("animated rollIn");
    $video_panel.addClass("animated rollOut");
    $video_panel.remove();
    $result_panel.css("display", "block");
    $result_panel.addClass("animated rollIn");
}