gsap.registerPlugin(ScrollTrigger);

const words = ["William"];

let cursor = gsap.to(".cursor", {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1,
    duration: 1
})

let masterTl = gsap.timeline()

words.forEach(word => {
    let tl = gsap.timeline()
    tl.to(".text", {
        duration: 2,
        text: word,
    })
    masterTl.add(tl)
})


gsap.utils.toArray(".info").forEach(box => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: box,
            start: "top 90%",
            scrub: 2,
            toggleActions: "restart none none none",
        }
    });
  
    tl.from(box, {
        x: "50%",
        duration: 5,
    });
  });

  gsap.utils.toArray(".noneinfo").forEach(box => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: box,
            start: "top 60%",
            end: "top 50%",
            scrub: 2,
            toggleActions: "restart none none none",
        }
    });
  
    tl.from(box, {
        x: "-50%",
        duration: 5,
    });
  });