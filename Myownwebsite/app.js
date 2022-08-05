//hamburger menu toggle 
const hamburgerToggle = document.querySelector(".hamburger");
const HamburgerMenuSlider = document.querySelector(".menu-content");

function ToggleHamburgerMenu(){
    
    HamburgerMenuSlider.classList.toggle("isactive");
}
hamburgerToggle.addEventListener("click",ToggleHamburgerMenu);

// counter time since the first day of starting learning coding 


   
function renderTime(){
    const dayOne = new Date(2022,0,10,0,0,0,0).getTime();
    const timeNow = new Date().getTime();
    const timeLeft = timeNow - dayOne;

    const numberEls = document.querySelectorAll(".number p")
    
    const oneDay = 1000*60*60*24;
    const oneHour = 1000*60*60;
    const oneMinute = 1000*60;
    const oneSecond = 1000;

    const days = Math.floor(timeLeft/oneDay);
    const hours = Math.floor((timeLeft%oneDay)/oneHour);
    const minutes = Math.floor(timeLeft%oneHour/oneMinute);
    const seconds = Math.floor((timeLeft%oneMinute)/oneSecond);
    
    const timeList = [days,hours,minutes,seconds]


    numberEls.forEach(function(time,index){
       //put 0 before hours minutes and seconds 
       if(index==0){
        time.textContent = timeList[index]
       }else if(timeList[index]>9){
        time.textContent = timeList[index]
       }else{
        time.textContent = "0"+timeList[index]
       }
        
    })
    
    

}
const counter = setInterval(renderTime,1000)

