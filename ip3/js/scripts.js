var pingpong = function() {
    var userNum = prompt("enter a number")
    var output = '';
    for (var i = 1; i <= userNum; i++) {
        var ping = !(i % 3),
            pong = !(i % 5);
        if (ping && pong) {
            output += 'pingpong ';
        } else if (ping) {
            output += 'ping';
        } else if (pong) {
            output += 'pong ';
        } else {
            output += i + ' ';
        }
    }
    document.write(output);
}

$(document).ready(function() {
    $("#add").submit(function(event) {
        event.preventDefault();
        pingpong()
    });
});;
}

$(document).ready(function() {
$("#add").submit(function(event) {
event.preventDefault();
pingpong()
});
});
});
});
