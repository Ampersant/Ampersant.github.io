
document.addEventListener("DOMContentLoaded", (event) => {

    function greetingStart(){
        document.body.style.overflowX = 'hidden';
    }
    function greetingEnd(){
        document.body.style.overflowX = 'visible';
    }
    gsap.registerPlugin(TextPlugin, ScrollTrigger, ScrollToPlugin)
    let ym = document.getElementById('ym');
    let t1 = gsap.timeline();
    t1.fromTo(
        "#ym",
        { autoAlpha: 0, y: -150},
        { autoAlpha: 1, y: 0, delay:1.5, duration: 2, ease: 'power2', onStart: () => {greetingStart();}} // 
      ).to("#ym-p", {
        text: {
            value: "PHP Web Developer & Frontend Enhancer",
            newClass: "",
            // delimiter: " ",
        },
        duration: 1,
        ease: "power2.inOut"
      });
    
    gsap.fromTo(
        "#ym-image",
        { autoAlpha: 0, x: 150},
        { autoAlpha: 1, x: 0, duration: 2.5, delay: 2, ease: 'expo'}
      );
    gsap.fromTo(
        ".vr-ln-gld",
        {height: 0},
        {duration: 1.5, delay: 4.5, height: 100,}
    );
    gsap.fromTo(
        "#icon",
        {autoAlpha: 0, y: -25},
        {autoAlpha: 1, duration: 0.7, delay: 5.5, y: 0, onComplete: () => {greetingEnd();}} //, 
    );
    gsap.fromTo(
        "#about-h",
        {
            x: -100,
            autoAlpha: 0,
        },
        {
            scrollTrigger: {
                // markers: true,
                trigger: "#about",
                start: "55% 80%",
            },
            x: 0,
            autoAlpha: 1,
            duration: 2,
            ease: 'expo.out'

        }
    )
    gsap.to(".dash", {
        scrollTrigger: {
            // markers: true,
            trigger: "#about",
            start: "55% 80%",
        },
        "--before-width": "6vw", delay: 1, duration:1.5});
    gsap.fromTo(
        "#about-p", 
        {y: 100, autoAlpha: 0},
        {
            scrollTrigger: {
                // markers: true,
                trigger: "#about",
                start: "55% 80%",
            },
            y: 0,
            autoAlpha: 1,
            duration: 2,
            ease: 'expo.out'
        }
    );  
    gsap.utils.toArray(".skills-flex").forEach(skill => {
        let t2 = gsap.timeline({
            scrollTrigger:{
                trigger: skill,
                start: "bottom, 80%",
                // markers: true
            }
        });
        t2.fromTo(skill, 
            {scale: 0.5, opacity: 0},
            {scale: 1, opacity: 1, duration: 1.5, ease: 'expo.out'}
        );
    });
    let elemnets = document.querySelectorAll(".p-item-content");
    gsap.utils.toArray(".p-item-content").forEach(item => {
        let t3 = gsap.timeline({
            scrollTrigger:{
                trigger: item,
                start: "bottom, 80%",
                // markers: true
            }
        });
        t3.fromTo(item, 
            {y: 100, opacity: 0},
            {y: 0, opacity: 1, duration: 1.5, ease: 'expo.out'
            },
           
        );
    });
    // ,
    //             onComplete: () =>{
    //                 ScrollTrigger.refresh();
    //             } 

    //     let skewSetter = gsap.quickSetter(item, "skewX", "deg");
    //     let scrollTimeout;

    //     ScrollTrigger.create({
    //         trigger: item,
    //         start: "top bottom",
    //         end: "bottom top",
    //         scrub: true,
    //         onUpdate: (self) => {
    //             clearTimeout(scrollTimeout);
    //             const skew = self.getVelocity() / -200; // Adjust the divisor to control sensitivity
    //             skewSetter(skew);
    //             scrollTimeout = setTimeout(() => {
    //                 gsap.to(item, { skewX: 0, duration: 0.5, ease: "power2.out" });
    //             }, 100); // 100ms after the last scroll update
    //         }
    //     });
    let t4 = gsap.timeline(); 
    t4.fromTo("#experience-hr", 
        {width: 0, autoAlpha: 0},
        {
            scrollTrigger: {
                trigger: "#experience-header",
                start: "top 80%", 
                // markers: true 
            },
            width: "70%",
            autoAlpha: 1,
            duration: 1,
            ease: "power1"
            
        }
    ).fromTo('.content', {}, {
        scrollTrigger: {
            trigger: "#experience-hr",
            start: "top 80%",
            // markers: true 
        },
        duration: 1}); //{y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 3}
    gsap.timeline({
        scrollTrigger: {
        trigger: "#Feedback",
        start: "20% 80%",
        // markers: true 
    }}).fromTo('#text-feedback', {x:-100, autoAlpha: 0}, {x: 0, autoAlpha: 1, duration: 1.5}).to(".dash-f", {"--before-width": "6vw", delay: 1, duration:1.5});
    gsap.to(".dash-sm", {"--before-width": "2vw", delay: 2.5, duration:1.5,
        scrollTrigger: {
            trigger: "#Feedback",
            start: "20% 80%",
        }
    });
    gsap.to('.person-position', {
        scrollTrigger: {
            trigger: "#Feedback",
            start: "20% 80%",
        },
        delay: 2.5,
        text: {
            value: 'Python Backend Developer'
        },
        duration: 1
    })
    gsap.fromTo('.feedback-image', {y:100, autoAlpha:0}, {y:0, autoAlpha:1,
        scrollTrigger: {
            trigger: "#Feedback",
            start: "20% 80%",
        }, duration: 1.5
    })    
   });