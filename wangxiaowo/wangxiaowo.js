$('document').ready(function(){

    var sidebar=$('#sidebar'),
        mask=$('.mask');

    $('#sidebar-trigger').on('click',function (){
        mask.fadeIn();
        sidebar.css('right',0);
    })

    mask.on('click',function (){
        mask.fadeOut();
        sidebar.css('right',-sidebar.width());
    })
})

