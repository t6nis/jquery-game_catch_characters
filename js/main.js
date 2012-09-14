$(document).ready(function() {  
    
    var str_arr = ['H', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', '!']; //correct order to look
    var cur_pos = 0; //current position of checking

    for (var i = 1; i <= 15; i++) {
        var rx = Math.ceil(Math.random()*550);
        var ry = Math.ceil(Math.random()*350);
        var hue = 'rgb('
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ')';
        //Random positioning
        $('#char'+i).css('left', rx);
        $('#char'+i).css('top', ry);
        //Random colors
        $('#char'+i).css('color', hue);
    }

    for (var i = 1; i <= 15; i++) {
        $('#char'+i).mouseover(function() {                    
            var dWidth = $('#wrapper').width() - 48, //font size of char (+10px just in case some characters like j,g,p might go over borders)
                dHeight = $('#wrapper').height() - 48, //font size of char (+10px just in case some characters like j,g,p might go over borders)
                nextX = Math.floor(Math.random() * dWidth),
                nextY = Math.floor(Math.random() * dHeight);
                //if hovering over wrong char, move char away
                if (this.innerHTML != str_arr[cur_pos]) {
                    $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
                }                     
        }).click(function() {
            //if hovering over correct char add click ability
            if (this.innerHTML == str_arr[cur_pos]) {
                //remove from game and add to result
                $('#'+this.getAttribute('id')).remove();
                $('#result').append(this.innerHTML);
                //append spaces when using sentences
                if (cur_pos == 4) {
                    $('#result').append('&nbsp;');
                }
                cur_pos++;
            }
        });
    }

});