$(document).ready(function() {

    var player;

    $("#reset").click(function() {
        location.reload();
    });

    $("label").click(function() {
        $("#playArea").toggleClass("two");
        $(this).addClass("checked");
        $(this).siblings().hide();

        if ($("#playArea").hasClass("two")) {
            $("#player").text("Player 2");
            player = 1;
        } else {
            $("#player").text("Player 1");
            player = 2;
        }


        setTimeout(function() {
            result();
        }, 100)

    })

    function result() {

        var onebox = $("#box1 input:checked").attr("id");
        var twobox = $("#box2 input:checked").attr("id");
        var threebox = $("#box3 input:checked").attr("id");
        var fourbox = $("#box4 input:checked").attr("id");
        var fivebox = $("#box5 input:checked").attr("id");
        var sixbox = $("#box6 input:checked").attr("id");
        var sevenbox = $("#box7 input:checked").attr("id");
        var eightbox = $("#box8 input:checked").attr("id");
        var ninebox = $("#box9 input:checked").attr("id");

        if ((onebox == "player" + player + "box1") && (twobox == "player" + player + "box2") && (threebox == "player" + player + "box3") ||
            (fourbox == "player" + player + "box4") && (fivebox == "player" + player + "box5") && (sixbox == "player" + player + "box6") ||
            (sevenbox == "player" + player + "box7") && (eightbox == "player" + player + "box8") && (ninebox == "player" + player + "box9") ||
            (onebox == "player" + player + "box1") && (fourbox == "player" + player + "box4") && (sevenbox == "player" + player + "box7") ||
            (twobox == "player" + player + "box2") && (fivebox == "player" + player + "box5") && (eightbox == "player" + player + "box8") ||
            (threebox == "player" + player + "box3") && (sixbox == "player" + player + "box6") && (ninebox == "player" + player + "box9") ||
            (onebox == "player" + player + "box1") && (fivebox == "player" + player + "box5") && (ninebox == "player" + player + "box9") ||
            (threebox == "player" + player + "box3") && (fivebox == "player" + player + "box5") && (sevenbox == "player" + player + "box7")) {
            $("#player").text("Player "+player+" has Won ");
            $("#playArea .block label").css("pointer-events", "none");
        } 
        else {
            var fillCount = 0;
            for (var i = 1; i < 10; i++) {
                if ($("#box" + i + "> label ").hasClass("checked")) {
                    fillCount = fillCount + 1;
                }
            }

            if (fillCount == 9) {
                $("#player").text("Draw");
            }
        }



    }
});