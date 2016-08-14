/**
 * Created by Gina on 7/29/2016.
 */
var game_object;
$(document).ready(function(){
    game_object = new main_game_controller();
    game_object.init($("#game-area"));
})


function main_game_controller(){
    this.actor = [];
    this.game_area = null;
    this.initial_actors = 2;
    this.init = function(game_area){
        this.game_area = $(game_area); //in case the parameter passed in line 7 is not jq, we could change it back to jq
        //call a method to make all actors

    };
    this.make_actor = function(){
        var actor = new this.actor_controller();
        this.actor_controller.init();
        return actor;
    };
    this.make_all_actors = function(){
        for(var i = 0 ; i < this.initial_actors ; i++){
            var actor = this.make_actor();
            this.actor.push(actor);
        }
    }
    this.actor_controller = function(){
        this.name; //the name of the actor
        this.dom_element; //the div that holds the actor
        this.type; //the type of acotr, ie dog, cat fire hydrant
        this.size; //how much space the actor takes in screen
        this.image; //what the actor looks like
        this.status; // (ready, sleeping, dead, )
        this.visibility; //invisible, in house etc
        this.hunger; //how much food it has, how hungry it is
        this.born_time; //when was the pet created
        this.bourne_time; //when the pet was used as an imprompt weapon
        this.parents = [];
        
        this.init = function(){
            
        };
        this.move = function(){
            
        };
        this.clean_self = function(){
            
        };
        this.breed = function(){
            
        };
        this.die = function(){
            
        };
        this.life_script = function(){
            
        };
        this.fight = function(){
            
        };
        this.eat = function(){
            
        };
        this.create_dom_element = function(){
            
        };
        this.animate = function(){
            
        };
        this.defecate = function(){
            
        }
        this.sleep = function(){
            
        };
        
    };
    //this.init();  //possible to use this line instead of line 7 with different pros and cons
}




//learn about .prototype ;;;;;what is this
//functions are pre-declared in the file  i.e(function actor_controller(){}}, hoisting kicks in
//var actor_controller = function(){} isnt declared in the beginning of the file. hoisiting does not kick in
//this.actor_controller = function(){} is a method that could be called anywhere