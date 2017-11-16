$( document ).ready(function() {
    $('#s-h-pass').click(function(){
        var type = $('#password').attr('type') == "text" ? "password" : 'text'
           var c = $(this).html() == "<span class=\"glyphicon glyphicon-eye-close\"></span>" ? "<span class=\"glyphicon glyphicon-eye-open\"></span>" : "<span class=\"glyphicon glyphicon-eye-close\" ></span>";
        $(this).html(c);
        $('#password').prop('type', type);
    });
});

