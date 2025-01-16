// Select all elements with the class "container-item" and store them in an array
const allcontainer = gsap.utils.toArray(".container-item");

// Select the element with the class "container-img-wrap"
const venueImageWrap = document.querySelector(".container-img-wrap");

// Select the element with the class "container-img"
const venueImage = document.querySelector(".container-img");

// Function to initialize event listeners on all container items
function initcontainer(){
    // Loop through each container item
    allcontainer.forEach((link) => {
        // Add event listener for mouse enter event
        link.addEventListener("mouseenter", venueHover);
        // Add event listener for mouse leave event
        link.addEventListener("mouseleave", venueHover);
        // Add event listener for mouse move event
        link.addEventListener("mousemove", moveVenueImage);
    });
}

// Add event listener for click event on all container items
allcontainer.forEach((link) => {
    link.addEventListener("click", venueHover);
});

// Function to move the venue image based on mouse position
function moveVenueImage(e){
    // Get the x and y coordinates of the mouse
    let xpos = e.clientX;
    let ypos = e.clientY;
    // Create a new GSAP timeline
    const tl = gsap.timeline();
    // Animate the position of the venue image wrap
    tl.to(venueImageWrap,{
        x: xpos,
        y: ypos,
    });
}

// Function to handle hover events on container items
function venueHover(e){
    // Check if the event type is mouse enter
    if(e.type === "mouseenter"){
        // Get the target image URL from the data attribute
        const targetImage = e.target.dataset.img;
        // Create a new GSAP timeline
        const tl = gsap.timeline();
        // Set the background image of the venue image
        tl.set(venueImage,{
            backgroundImage: `url(${targetImage})`,
        // Animate the opacity of the venue image wrap to make it visible
        }).to(venueImageWrap,{
            duration:0.5,
            autoAlpha:1,
        });
    }
    // Check if the event type is mouse leave
    else if(e.type === "mouseleave"){
        // Create a new GSAP timeline
        const tl = gsap.timeline();
        // Animate the opacity of the venue image wrap to make it invisible
        tl.to(venueImageWrap,{
            duration: 0.5,
            autoAlpha:0,
        });
    }
}

// Function to initialize the container items
function init(){
    initcontainer();
}

// Add event listener for the window load event to initialize the container items
window.addEventListener("load",function(){
    init();
});
