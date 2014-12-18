var data = [];
var cur_id = 0;

var page_count = 50;
var max_msg = 2222;
var max_page = Math.floor(max_msg / page_count);

$.getJSON("campus_sorted.json", function (json) {
    data = json;
    display_batch(cur_id);
});

function display(id) {
    var el = data[id];
    if (!el) return;
    var str = "<table><tbody>"
            + "<tr><td rowspan='5' class='number'>" + el.fcking_number+ "</td><td class='strong'> Тема: </td><td>" + el.subject + "</td></tr>"
            + "<tr><td class='strong first_col'> Від: </td><td>" + el.sender + "</td></tr>"
            + "<tr><td class='strong'> Кому: </td><td>" + el.recipientTitle +"</td></tr>"
            + "<tr><td colspan='2' class='strong'> Текст повідомлення: </td></tr>"
            + "<tr><td colspan='2' class='msg_body'>" + el.body + "</td></tr>"
            + "</tbody></table>"
            + "<hr>";
    $("#table_container").append(str);
}

function display_batch(id) {
    reset();
    $(".unvisible").show();
    for (var i = id*page_count; i < (id+1)*page_count; i++) {
        display(i);
    }
    window.scrollTo(0, 0);
}

function reset() {
    $("#table_container").empty();
}

$(".prev").click(function () {
    cur_id = Math.max(cur_id - 1, 0);
    display_batch(cur_id);
});

$(".next").click(function () {
    cur_id = Math.min(cur_id + 1, max_page);
    display_batch(cur_id);
});