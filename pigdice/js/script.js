var die = 6;
var dice = 2;
var ary = [];

function dice_roll(die, dice, nu) {
    var txt = document.form.text;
    for (var roll = 0, loop = 0; loop < dice; loop++) {
        roll = roll + Math.round(Math.random() * die) % die + 1;
    }
    if (ary.length == 0 && nu == 0) {
        txt[0].value = ary[0] = roll;
        txt[1].value = 0;
    }
    if (ary.length == 1 && nu == 1) {
        txt[1].value = ary[1] = roll;
        if (ary[0] == ary[1]) {
            alert('Draw');
        } else if (ary[0] > ary[1]) {
            alert('Player 1 Wins');
        } else {
            alert('Player 2 Wins');
        }
        ary = [];
        //document.write(dice_roll(die, dice, nu));
    }
}
