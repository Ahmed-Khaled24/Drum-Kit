function playSound(button){
    var audio;
        switch(button){
            case "w":
                audio = new Audio("sounds/crash.mp3");
                break;
            case "a":
                audio = new Audio("sounds/kick-bass.mp3");
                break;
            case "s":
                audio = new Audio("sounds/snare.mp3");
                break;
            case "d":
                audio = new Audio("sounds/tom-1.mp3");
                break;
            case "j":
                audio = new Audio("sounds/tom-2.mp3");
                break;
            case "k":
                audio = new Audio("sounds/tom-3.mp3");
                break;
            case "l":
                audio = new Audio("sounds/tom-4.mp3");
                break; 
            default:
                audio = new Audio("sounds/tom-1.mp3");   
        }
        audio.play();
}

var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i = 0 ; i < numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playSound(this.innerHTML);
        addAnimation(this.innerHTML);
})}

document.addEventListener("keypress", function(event){
    playSound(event.key);
    addAnimation(event.key);
});

function addAnimation(button){
    var activeButton = document.querySelector("." + button);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed") }, 200);
}