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


// --------- TYPING EFFECT --------------------------------

let words = ['Love', 'Life', 'Art', 'Everything']
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false
let typingSpan = document.querySelector(".typing-span")

const typingEffect = () => {

    let currentWord = words[wordIndex]
    let currentCharacter = currentWord.substring(0, charIndex)
    typingSpan.innerText = currentCharacter;
    typingSpan.classList.add("stop-blink");

    if(!isDeleting && charIndex < currentWord.length){

        // If condition is true, type the next character

        // console.log(currentCharacter)
        charIndex++;
        setTimeout(typingEffect, 200)

    }

    else if(isDeleting && charIndex > 0){

        // If condition is true, remove the previous character

        // console.log(currentCharacter)
        charIndex--;
        setTimeout(typingEffect, 100)

    }

    else{

        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        typingSpan.classList.remove("stop-blink")
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex

        setTimeout(typingEffect, 1200);

    }


}

typingEffect()



let cardD = document.querySelector(".card-d-container");

cardD.addEventListener("click", ()=>{

    cardD.classList.toggle("rotate")

})

// --------- LOGO SLIDE --------------------------------
const logos = document.querySelector(".logo-box")
let copy_logos = logos.cloneNode(true)
document.querySelector(".logo-container").appendChild(copy_logos)