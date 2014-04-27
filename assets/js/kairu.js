$(document).ready(function() {
    $('#kairu_box').animate({"top": "-=900px"}, 2000);

    $('#kairu_search').click(function() {
        var keyword = $('#kairu_search_keyword').val();
//        if (keyword == 'お前を消す方法') {
            $('#kairu_box').hide();
//        } else {
            $('#kairu_search_keyword').val('');
//        }
    });
});
