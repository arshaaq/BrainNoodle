

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

let toggleNav = () =>{
let navButton = document.getElementById("nav");
let navDropDown = document.getElementById("nav_dropdown")
let navLink1 = document.getElementById("nav_link1");
let navLink2 = document.getElementById("nav_link2");
let navLink3 = document.getElementById("nav_link3");

if(navButton.classList.contains("nav_toggle_on")){
    navDropDown.classList.remove("nav_dropdown_show");
    navButton.classList.remove("nav_toggle_on");
    navLink1.classList.remove("nav_link_show");
    navLink2.classList.remove("nav_link_show");
    navLink3.classList.remove("nav_link_show");

    navLink1.classList.add("nav_link_hide");
    navLink2.classList.add("nav_link_hide");
    navLink3.classList.add("nav_link_hide");
    document.getElementById("menu").style.opacity = "0%";
}else{
document.getElementById("menu").style.opacity = "100%";
navDropDown.classList.add("nav_dropdown_show");
navButton.classList.add("nav_toggle_on");
setTimeout(() => {
    navLink1.classList.add("nav_link_show");
}, 1000);
setTimeout(() => {
    navLink2.classList.add("nav_link_show");
},800);
setTimeout(() => {
    navLink3.classList.add("nav_link_show");
}, 600);

setTimeout(() => {
navLink1.classList.remove("nav_link_hide");
navLink2.classList.remove("nav_link_hide");
navLink3.classList.remove("nav_link_hide");
}, 1000);

}

}

//COUNTING FUNCTION ----------------------------------------------------
const countingAnimation = (from, to, id, interval) =>{
    html_element = document.getElementById(id);//get the element number you want changed
    html_element.textContent=from;//start the number off with the first value

    let step = (from<to ? 1: -1); //the increments the countdown will follow relative to the from and to value
    
    


    //USE THESE VARIABLES FOR THE INTERVAL ITERATION
   let startNumber = from;
   let endNumber = to;
   let distance = Math.abs(from-to);
   let count = 0;

  // timeInterval + timeInterval*(count/distance)

    let runningIntverval = setInterval(() => {
        
        html_number = document.getElementById(id);
        html_number.textContent =startNumber;
        let newNumber = startNumber+=step;
        
         if(startNumber <= endNumber){
            html_number.textContent = newNumber;
         } else if(startNumber >= endNumber) {
            html_number.textContent = newNumber;
         }
        
         if(startNumber == endNumber){
            clearInterval(runningIntverval);
         }
        count++
        }, interval);
}



















ScrollTrigger.defaults({
    //toggleActions: "restart pause reverse restart",
    
})



let benefits_fade_in = gsap.to(".benefit",{
scrollTrigger:{
    trigger:"#benefits_container",
    start: "300 center",
},
    opacity: 1,
    y: -100,
    stagger: 0.3
});



const one_hundred_scroll = () =>{
    countingAnimation(0,100,"one_hundred", 38);
}
let numberRaise = gsap.to("#one_hundred",{
scrollTrigger:{

        trigger:"#functions_container",
        start: "61% center",
        end: "+=1000",
        scrub: true,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) =>{

            document.getElementById("one_hundred").textContent=(Math.round(self.progress*100));   
            document.getElementById("iphone_screen").style.left=(Math.round(self.progress*100))
        },
        onLeave: (self) => {
            document.getElementById("one_hundred").classList.add("numberComplete");
            self.scroll(self.start);	// <-- sets position to start of ScrollTrigger
            self.disable()
            self.animation.progress(100)
            document.getElementById("function_text").classList.add("function_reveal");
            setTimeout(() => {
                document.getElementById("function_button").classList.add("function_reveal");
            }, 200);
            
        },
    },  
})

let iphoneScroll = gsap.to("#iphone_screen",{
    y:-710,
    
scrollTrigger:{
        markers: true,
        trigger:"#functions_container",
        start: "61% center",
        end: "+=899",
        scrub: 0.5,
        onUpdate: (self) =>{
           
        },
        onLeave: (self) => {
            	// <-- sets position to start of ScrollTrigger
            self.disable();
            
            self.animation.progress(100);
        },
    },  


})



let endContainer_results = gsap.to("#end_container",{
    scrollTrigger:{
        once: true,
        trigger: "#end_container",
        start: "start 90%",
        onEnter: () =>{
            countingAnimation(0,4,"p1", 100);
            countingAnimation(300,611,"p2", 8);
            countingAnimation(0,70,"p3", 38);
        },   
        },
    })



let endContainer_text = gsap.from("#end_text_container",{
    opacity:0,
    y: 100,
    duration: 0.5,

    scrollTrigger:{
        once: true,
        trigger: ".rounded_triangle",
        start: "60 bottom",  
        },    

})


let noodleFriends = gsap.to(".noodle_friends",{
    y: -50,
    duration: 1,
    ease: Elastic.easeInOut,
    stagger: 0.1,
    scrollTrigger:{
        once: true,
        trigger: ".rounded_triangle",
        start: "30% 90%",  
        
        },    

})








function reveal(){
    //console.log(window.scrollY);
   // console.log(window.innerHeight)
    if(window.scrollY > window.innerHeight*0.60){
       
    } else {
        
        
    }
}


let main_title = document.getElementById("title");

main_title.addEventListener("mouseover", ()=>{
    main_title.setAttribute("src","UI elements/title.gif");
})

main_title.addEventListener("mouseleave", ()=>{
    main_title.setAttribute("src","UI elements/title.png");
})























window.addEventListener("scroll", reveal);

