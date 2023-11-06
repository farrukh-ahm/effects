// ------------- BUBBLE EFFECTS ------------------------
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

// --------- MODAL ELEMENTS --------------------------------
let modal = document.querySelector(".modal");
let openButton = document.querySelector(".border-button");
let closeButton = document.querySelector(".close-modal")
openButton.addEventListener("click", function(){
    modal.showModal();
    console.log("click")
})

closeButton.addEventListener("click", function(){
    modal.close()
})


// --------- OPTIONS BUBBLES --------------------------------
let bubbleContainer = document.querySelector("#bubble-wrapper");
let index = document.querySelector(".index-btn");
let tweetBtn = document.querySelector(".tweet-btn");
let fbBtn = document.querySelector(".fb-btn");
let instaBtn = document.querySelector(".insta-btn");

index.addEventListener("click", function(){
    bubbleContainer.classList.toggle("bubble-toggle")
})



// --------- PROFILE CARD --------------------------------
let profileCard = document.querySelector(".profile-card-inner")

profileCard.addEventListener("click", ()=>{
    console.log("click")
    profileCard.classList.toggle("profile-card-click")
})