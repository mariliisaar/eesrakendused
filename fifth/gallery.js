$(document).ready(function(){
    $('img').css({'width':'20vw'});

    let firstPic = $('img.active').prop('src');

    $('.big-image').html('<img src="' + firstPic + '">');

    $('#prev').click(prevPic);
    $('#hide').click(hidePic);
    $('#next').click(nextPic);
    $(document).keydown(keyPress);

    $('#picContainer img').click(function(){
        let currentPic = $('img.active');
        let selectedPic = $(this);

        activeClass(currentPic, selectedPic);
    });

    function activeClass(currentPic, selectedPic){
        currentPic.removeClass('active');
        selectedPic.addClass('active');
        $('.big-image').html('<img src="' + selectedPic.prop('src') + '">').hide().fadeIn(700);
        $('.big-image img').css({'width':'90vw'})
    }

    function keyPress(event){
        if(event.keyCode == 39){
            nextPic();
        } else if (event.keyCode == 37) {
            prevPic();
        } else if (event.keyCode == 72) {
            hidePic();
        }
        // console.log(event.keyCode);
    }

    function prevPic(){
        let currentPic = $('img.active');
        let selectedPic = currentPic.prev();

        if(selectedPic.length == 0){
            selectedPic = $('#picContainer img').siblings().last();
        }

        activeClass(currentPic, selectedPic);
    }

    function nextPic(){
        let currentPic = $('img.active');
        let selectedPic = currentPic.next();

        if(selectedPic.length == 0){
            selectedPic = $('#picContainer img').siblings().first();
        }

        activeClass(currentPic, selectedPic);
    }

    function hidePic(){
        // $('.big-image-container').fadeOut('slow');
        // $('.big-image-container').slideUp('slow').slideDown('fast');
        $('.big-image-container').fadeToggle();
        if($('#hide').html() == "Peida") {
            //$('.big-image-container').is(':hidden'); <-- kontrollib, kas element on nähtav või mitte
            $('#hide').html('Näita');
        } else {
            $('#hide').html('Peida');
        }
    }
});