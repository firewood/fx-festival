$(document).ready(function() {
    $('#kairu_search').live('keypress', function(e){
        if (e.keyCode == 13) {
            var keyword = $('#kairu_search').val();
            if (keyword == 'お前を消す方法') {
                $('#kairu_box').hide();
            } else {
                $('#kairu_search').val('');
            }
        }
    });
});
