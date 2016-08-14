/**
 * Created by Gina on 8/13/2016.
 */
$(document).ready(function () {
    spinDiv();
});
function spinDiv() {
    $('.pictureBack').click(function () {
        $('.pictureBack').fadeOut();
        setTimeout(function () {
            $('.picture').fadeOut();
            $(".cloud").addClass('divExpandLg');
            $(".cloudSpin").addClass('divSpin');
            $(".cloudSm").addClass('divExpandSm');
            setTimeout(function () {
                $('.pictureBack').fadeIn();
                setTimeout(function(){
                    $('.picture').fadeIn();//need a fade in that comes in bit later
                    $(".cloud").removeClass('divExpandLg');
                    $(".cloudSm").removeClass('divExpandSm');
                    $(".cloudSpin").removeClass('divSpin');
                },200)
            }, 1500)
        }, 1500);
    })
}
