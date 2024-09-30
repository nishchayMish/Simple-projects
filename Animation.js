function navAnimation(){
    var tl = gsap.timeline()

    tl.from("nav .left",{
        opacity:0,
        scale:0,
        duration:1
    })

    tl.from("nav .right",{
        opacity:0,
        scale:0,
        duration:0.4
    })
}
navAnimation();