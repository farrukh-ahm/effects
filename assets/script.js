let buttons = document.getElementsByClassName("btns");
let button = ""
for(button of buttons){
    button.addEventListener("click", function(e) {
        let posX = e.offsetX;
        let posY = e.offsetY;
        // console.log(posX, posY);
        this.classList.add("ripple");
        this.style.setProperty("--x", `${posX}px`)
        this.style.setProperty("--y", `${posY}px`)
        this.addEventListener("animationend", function(){
            this.classList.remove("ripple")
        })
    });
}