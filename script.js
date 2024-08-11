var menu=document.querySelector(".wrapper .navbar i")
var cross=document.querySelector(".wrapper .full i")
var tl= gsap.timeline()

tl.to(".wrapper .full",{
    right:0,
    duration:0.4
})
tl.from(".wrapper .full h4",{
    x:150,
    duration:0.6,
    stagger:0.2,
    opacity:0

})
tl.from(".wrapper .full i",{
    opacity:0
})

tl.pause()

menu.addEventListener("click",function (){
    tl.play()
})
cross.addEventListener("click",function (){
    tl.reverse()
})