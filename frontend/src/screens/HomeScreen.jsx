import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profPic from "../assets/images/ym_profpic.jpeg";
import '../App.css'

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
                    });

                    // Animating the "ABOUT" section
                    gsap.from(".about", {
                        scrollTrigger: {
                            trigger: ".about",
                            start: "top bottom",
                            end: "+=500",
                            scrub: 1,
                        },
                        xPercent: -100,
                        duration: 3,
                    });

                    // Animating the "WORKS" section
                    gsap.from(".works", {
                        scrollTrigger: {
                            trigger: ".works",
                            start: "top bottom",
                            end: "+=500",
                            scrub: 1,
                            // markers: true

                        },
                        xPercent: 100,
                        duration: 3,
                    });

                    // Animating lines
                    gsap.from(".line span", {
                        scrollTrigger: {
                            trigger: ".line span",
                            scrub: 2,
                            start: "top bottom",
                            end: "-=250 center",
                            markers: true
                        },
                        y: 100,
                        ease: "power3.out",
                        duration: 5,
                        stagger: 0.5,
                    });
                })

                // Define animations for different screen sizes
                mm.add("(min-width: 576px)", () => {
                    
                    const phraseScrollTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".phrase",
                            start: "top center",
                            end: "bottom",
                            scrub: 1,
                            // markers: true,
                        },
                    });

                    phraseScrollTl.to(".phrase", {
                        xPercent: 200,
                        duration: 3,
                        stagger: 0.1,
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
                    });

                    // Animating panels
                    gsap.utils.toArray(".panel").forEach((panel, i) => {
                        gsap.from(panel, {
                            xPercent: i % 2 === 0 ? 105 : -105,
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
    
        }, container);

        return () =>{
            ctx.revert(); // Clean up animations on component unmount
        } 
    }, []);

    return (
        <div ref={container} className="container">
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

            <div className="flex flex-col justify-evenly h-screen">
                <div className="panel text-4xl sm:text-6xl flex justify-start m-2 h-28 items-center">
                    &lt; FRAME COFFE
                </div>
                <div className="panel text-4xl sm:text-6xl flex justify-end m-2 yellow h-28 items-center">
                    YMSHIN.COM &gt;
                </div>
                <div className="panel text-4xl sm:text-6xl flex justify-start m-2 yellow h-28 items-center">
                    &lt; GEOCANVAS.IO
                </div>
            </div>

            <section>
                <section className="h-screen "></section>
                <section className="h-screen "></section>
                <section className="h-screen "></section>
            </section>
        </div>
    );
};

export default HomeScreen;
