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



//stars from here the projects showcase part, try to use the objectconstructor and arrow-functions if needed to 
//changing the sources array will dynamicly change the content rendered in the website.
const sources = ["./project1.mkv","./project2.mkv","./project3.mkv","./project4.mkv"]

function ProjectShowcase(addressList){
    this.projects = document.querySelector(".projects")
    this.discription = document.querySelector(".discription-container")
    this.btnContainer = document.querySelector(".button-container")
    this.btns =document.querySelectorAll(".btn")
    //binding
    this.renderSliders(addressList)
    //this.slider must be put behind renderSliders is invoked, or it is undefined yet.
    this.sliders = document.querySelectorAll(".slider")
    this.btnControl()
  
    this.counter = 0
   
    
   
    

}

ProjectShowcase.prototype.renderSliders = function(addressList){
    
    addressList.forEach(function(url,index){
        const slider = document.createElement("div")
        slider.classList.add("slider")
        slider.style.left = `${index*100}%`
        if(url.endsWith("mp4")||url.endsWith("mkv")){
        slider.innerHTML = `
            <video class="content" autoplay muted loop>
            <source src="${url}">
            </video>
        `}else{slider.innerHTML=`
            <img src="${url}" class="content" alt="img">

        `}
            
       
        
        this.projects.appendChild(slider)
        
    }.bind(this))
        

   
}

ProjectShowcase.prototype.btnControl = function(){
    this.btns.forEach((btn)=>{
       btn.addEventListener("click",()=>{
        if(btn.classList.contains("next")){
            if(this.counter < sources.length-1){
                this.counter++
            }else{
                this.counter = 0
            }
            
            this.sliders.forEach((slider)=>{
            
            slider.style.transform = `translateX(${-this.counter*100}%)`
            
            })
            console.log(this.counter);
         }else{
            if(this.counter > 0){
                this.counter--
            }else{
                this.counter = sources.length-1
            }
            
            this.sliders.forEach((slider)=>{
            slider.style.transform = `translateX(${-this.counter*100}%)`
            
            })
            console.log(this.counter);
         }
       })
    })
}
       
const page4 = new ProjectShowcase(sources)
            
            
            
  
    
class SmoothScroll{
    constructor(){
        this.links = [...document.querySelectorAll(".menu li"),...document.querySelectorAll(".footer-menu li")]
        console.log(this.links);
        this.scroll()
        
        
    }

    scroll(){
        this.links.forEach((link)=>{
            link.addEventListener("click",(e)=>{
                e.preventDefault()
                const sectionName = e.target.getAttribute("href").slice(1)
                const section = document.getElementById(`${sectionName}`)
                const sectionOffsetTop = section.offsetTop;
                
                const navHeight = document.querySelector(".nav-bar").getBoundingClientRect().height
                window.scrollTo({top:sectionOffsetTop-navHeight})
            })
        })
    }
}

const smoothScroll = new SmoothScroll()
    
    

