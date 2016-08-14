/**
 * Created by Gina on 8/13/2016.
 */
$(document).ready(function(){
   spinDiv();
});
function spinDiv(){
    $('.picture').click(function(e){
        $(".cloud").addClass('divSpin');
        var clickedElement = $(".cloud");
        console.log("clicked element",clickedElement);
        setTimeout(function(){
            clickedElement.removeClass('divSpin');
            console.log("clickedElement after timeout", clickedElement);
        },2500);
    })
}