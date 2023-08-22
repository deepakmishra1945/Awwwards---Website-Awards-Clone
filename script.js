var animm = gsap.timeline();

animm.from("nav",{
    y: -300,
    opacity: 0,
    duration: 1,
})

animm.from(".lft h1",{
    y: 100,
    opacity: 0,
    duration: 0.5,
},'a') //Same name has been given to video as well so that they appear simeltaneously

animm.from(".lft p",{
    y: 100,
    opacity: 0,
    duration: 0.5,
})

animm.from(".btn",{
    y: 100,
    opacity: 0,
    duration: 0.5,
})

animm.from("video",{
    y: 100,
    opacity: 0,
    duration: 0.5,
},'a')