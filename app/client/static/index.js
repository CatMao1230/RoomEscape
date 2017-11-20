$('#count-down').countdown('2018/04/30', function(event) {
    var $this = $(this).html(event.strftime(''
        + '%D Days '
        + '%H Hours '
        + '%M Minutes '
        + '%S Seconds '
    ));
});