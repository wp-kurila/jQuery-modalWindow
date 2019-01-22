$(document).ready(function() {

    let modal = $('.popup'),
        overlay = $('.overlay'),
        link = $('button[data-popup="true"]'),
        close = $('.close-btn'),
        fruitName = $('.fruit-name'),
        buy = $('button[type="submit"]');

    link.on('click', function() {

        fruitName.text($(this).attr('data-fruit'));
        overlay.show();
        modal.toggleClass('popup-active');        
    });

    close.click(function() {

        modal.toggleClass('popup-active');
        overlay.hide(300);
    });

    buy.click(function() {

        modal.toggleClass('popup-active');
        overlay.hide(300);
    });
});