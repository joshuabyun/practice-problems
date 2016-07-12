/**
 * Created by Gina on 7/11/2016.
 */
var answer_array = [];
function bigger_words(the_word,the_array){
    var word_length = the_word.length;
    var array_length = the_array.length;
    for(var i =0; i < array_length; i++){
        if(word_length < the_array[i].length){
            answer_array.push(the_array[i]);
        }
    }
    console.log(answer_array);
}

//The function should output an array of strings that are longer than the single input string.