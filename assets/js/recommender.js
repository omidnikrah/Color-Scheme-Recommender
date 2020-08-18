$(document).ready(function() {
    var $colorPalette = $('.color-palette');
    var $input,color,hexColor;
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

    $('.color').hover(function() {
        color = $(this).css('background-color');
        hexColor = rgb2hex(color);
        $(this).find('.color-code').html(hexColor).css('opacity', '1');
    }, function() {
        $(this).find('.color-code').css('opacity', '0');
    });

    function rgb2hex(rgb) {
     rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
     return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
    function hex(x) {
      return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    }
    var hexDigits = new Array ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
});
