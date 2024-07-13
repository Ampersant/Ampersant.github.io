$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay-toggle').toggleClass('open');
   });
$('.t-l').click(function(){
    $('#overlay-toggle').toggleClass('open');
    $('#toggle').toggleClass('active');
})