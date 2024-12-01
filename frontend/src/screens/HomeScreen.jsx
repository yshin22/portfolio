import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profPic from "../assets/images/ym_profpic.jpeg";
import '../App.css'
import frame from "../assets/images/frame.webp";
import ym from "../assets/images/my_site.webp";

gsap.registerPlugin(ScrollTrigger);

const HomeScreen = () => {
    const container = useRef(); // Reference for the container

    useEffect(() => {
        const ctx = gsap.context(() => {
                const mm = gsap.matchMedia();

                mm.add("all", () => {
                    const tl = gsap.timeline();
                    tl.from(".phrase", { 
                        y: 160, 
                        duration: 0.8, 
                        ease: "back", 
                        stagger: 0.1,
                        onComplete: () => {
                            gsap.set(".element", { willChange: "auto" }); // Resets will-change using GSAP's set method
                          }
                    });

                    const textPath = document.querySelector(".text-path");
                    const textWidth = textPath.offsetWidth; // Total width of the scrolling text
                    // const containerWidth = document.querySelector(".overflow-hidden").offsetWidth;
                
                    // Set initial position
                    gsap.set(textPath, { x: 0 });

                    const marquee = gsap.timeline({ repeat: -1 });
  
                    marquee.to(".text-path", {
                        x: -textWidth / 2,
                        duration: 10,
                        ease: "none",
                        repeat: -1,
                        onComplete: () => {
                            gsap.set(".element", { willChange: "auto" }); // Resets will-change using GSAP's set method
                          }
                    });

                    // // Animating the "ABOUT" section
                    // gsap.from(".about", {
                    //     scrollTrigger: {
                    //         trigger: ".about",
                    //         start: "top bottom",
                    //         end: "+=500",
                    //         scrub: 1,
                    //     },
                    //     xPercent: -100,
                    //     duration: 3,
                    // });

                    // Animating the "WORKS" section
                    // gsap.from(".works", {
                    //     scrollTrigger: {
                    //         trigger: ".works",
                    //         start: "top bottom",
                    //         end: "+=500",
                    //         scrub: 1,
                    //         // markers: true

                    //     },
                    //     xPercent: 100,
                    //     duration: 3,
                    // });

                    
                    // Animating the "ABOUT" section
                    gsap.from(".about", {
                        scrollTrigger: {
                            trigger: ".about",
                            start: "top bottom",
                            end: "top +=700",
                            scrub: 1,
                            // markers: true,
                        },
                        xPercent: -100,
                        duration: 3,
                        onComplete: () => {
                            gsap.set(".element", { willChange: "auto" }); // Resets will-change using GSAP's set method
                          }
                    });

                    gsap.from(".works", {
                        scrollTrigger: {
                            trigger: ".works",
                            start: "top bottom",
                            end: "top +=700",
                            scrub: 1,
                            // markers: true

                        },
                        xPercent: 100,
                        duration: 3,
                        onComplete: () => {
                            gsap.set(".element", { willChange: "auto" }); // Resets will-change using GSAP's set method
                          }
                    });

                    // Animating lines
                    gsap.from(".line span", {
                        scrollTrigger: {
                            trigger: ".line span",
                            scrub: 2,
                            start: "top bottom",
                            end: "-=200 center",
                            // markers: true
                        },
                        y: 100,
                        ease: "power3.out",
                        duration: 5,
                        stagger: 0.5,
                        onComplete: () => {
                            gsap.set(".element", { willChange: "auto" }); // Resets will-change using GSAP's set method
                          }
                    });

                    gsap.from(".contact", { 
                        y: 160, 
                        duration: 0.8, 
                        ease: "back", 
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: ".contact",
                            start: "top bottom",
                            end: "top +=700",
                            scrub: 1,
                            // markers: true,
                        },
                        onComplete: () => {
                            gsap.set(".element", { willChange: "auto" }); // Resets will-change using GSAP's set method
                          }
                    });
                })

                // Define animations for different screen sizes
                mm.add("(min-width: 576px)", () => {
                    
                    const phraseScrollTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".phrase",
                            start: "+=200 center",
                            end: "bottom",
                            scrub: 1,
                            // markers: true,
                        },
                    });

                    phraseScrollTl.to(".phrase", {
                        xPercent: 200,
                        duration: 3,
                        stagger: 0.2,
                    });

                    const tl = gsap.timeline()
                    tl.from(".prof-pic", { xPercent: -100, duration: 0.3, ease: "none" })
                    .to(".prof-pic", {
                        scrollTrigger: {
                            trigger: ".prof-pic",
                            start: "center",
                            end: "bottom",
                            scrub: 1,
                            // markers: true

                        },
                        yPercent: 300,
                    })

                    // Animating panels
                    gsap.utils.toArray(".panel").forEach((panel, i) => {
                        gsap.from(panel, {
                            xPercent: i % 2 === 0 ? 100 : -100,
                            scrollTrigger: {
                                trigger: panel,
                                start: "top center",
                                end: "bottom center",
                                scrub: 1,
                                // markers: true
                            },
                        });
                    });
                  });
                
                  // Mobile screens
                  mm.add("(max-width: 575px)", () => {

                    const phraseScrollTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".phrase",
                            start: "bottom center",
                            end: "bottom",
                            scrub: 1,
                            // markers: true,
                        },
                    });
                    phraseScrollTl.to(".phrase", {
                        xPercent: 200,
                        duration: 3,
                        stagger: 0.1,
                        onComplete: () => {
                            gsap.set(".element", { willChange: "auto" }); // Resets will-change using GSAP's set method
                          }
                    });

                    // Animating panels
                    gsap.utils.toArray(".panel").forEach((panel, i) => {
                        gsap.from(panel, {
                            xPercent: i % 2 === 0 ? 110 : -110,
                            scrollTrigger: {
                                trigger: panel,
                                start: "center bottom",
                                end: "center +=700",
                                scrub: 1,
                                // markers: true

                            },
                            onComplete: () => {
                                gsap.set(".element", { willChange: "auto" }); // Resets will-change using GSAP's set method
                              }
                        });
                    });
                  });
    
        }, container);

        return () =>{
            ctx.revert(); // Clean up animations on component unmount
        } 
    }, []);

    return (
        <div ref={container} className="container mx-auto px-4">
            <div className="flex justify-center h-screen items-center">
                <div className="frame overflow-hidden hidden sm:block">
                    <img src={profPic} alt="my prof pic" className="prof-pic max-w-80 m-4" />
                </div>
                <div>
                    <div className="phrase text-start text-5xl sm:text-8xl hover:text-red-500 cursor-pointer">
                        FULL STACK
                    </div>
                    <div className="phrase text-start text-5xl sm:text-8xl hover:text-red-500 cursor-pointer">
                        WEB DEV
                    </div>
                    <div className="phrase text-start text-5xl sm:text-8xl hover:text-red-500 cursor-pointer">
                        CAR ENTHUSIAST
                    </div>
                    <div className="phrase text-start text-5xl sm:text-8xl hover:text-red-500 cursor-pointer">
                        DOG DAD
                    </div>
                </div>
            </div>

            <div className="about headline text-transparent text-7xl sm:text-10xl flex justify-start">
                ABOUT
            </div>

            <div className="about-me h-96 md:h-screen  flex flex-col justify-center">
                <div className="line text-xl sm:text-7xl z-36 h-20 relative overflow-hidden flex justify-center">
                    <span className="absolute">Hi, my name is Yeoungmin,</span>
                </div>
                <div className="line text-xl sm:text-7xl z-36 h-20 relative overflow-hidden flex justify-center">
                    <span className="absolute">a creative Full Stack Developer</span>
                </div>
            </div>

            <div className="works headline text-transparent text-7xl sm:text-10xl flex justify-end">
                WORKS
            </div>

            <div className="overflow-hidden relative h-16">
                <div className="text-path absolute flex space-x-4 whitespace-nowrap">
                    <span className="text-2xl font-bold">Infinite Scrolling Text</span>
                    <span className="text-2xl font-bold">Infinite Scrolling Text</span>
                    <span className="text-2xl font-bold">Infinite Scrolling Text</span>
                    <span className="text-2xl font-bold">Infinite Scrolling Text</span>
                    <span className="text-2xl font-bold">Infinite Scrolling Text</span>
                    <span className="text-2xl font-bold">Infinite Scrolling Text</span>
                    <span className="text-2xl font-bold">Infinite Scrolling Text</span>
                    <span className="text-2xl font-bold">Infinite Scrolling Text</span>
                    <span className="text-2xl font-bold">Infinite Scrolling Text</span>
                </div>
            </div>

            <div className="flex flex-col justify-evenly h-screen">
                <div className="panel text-4xl sm:text-6xl flex-col m-2 h-20 items-center">
                    <div className="text-start">FRAME COFFEE</div>
                    {/* <div>
                        <img src={frame} alt="frame coffee" />
                    </div> */}
                </div>
                <div className="panel text-4xl sm:text-6xl flex-col m-2 yellow h-28 items-center">
                    <div className="text-end">YMSHIN.COM</div>
                    {/* <div>
                        <img src={ym} alt="frame coffee" />
                    </div> */}
                </div>
            </div>

            <div className="contact headline text-transparent text-7xl sm:text-9xl flex justify-start">
                CONNECT 
            </div>
            <div className="contact headline text-transparent text-7xl sm:text-9xl flex justify-start">
                WITH ME
            </div>
        </div>
    );
};

export default HomeScreen;
