$(document).ready(function() {
    var $colorPalette = $('.color-palette');
    var $input;
    var cats = [];

    for (var i = 0; i < $colorPalette.length; i++) {
        cats.push($colorPalette.eq(i).attr('data-cat').split(","));
    }

    function findScheme() {
        $input = $('#input-recommender').val();
        $colorPalette.hide();
        for (i = 0; i < cats.length; i++) {
            for (j = 0; j < cats[i].length; j++) {
                if (cats[i][j].startsWith($input)) {
                    $colorPalette.eq(i).show();
                }
            }
        }
        if ($input === "") {
            $colorPalette.hide();
        }
    }

    $('#input-recommender').on("keyup", findScheme);

});
