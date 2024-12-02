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
                const breakPoint = 576;

                mm.add(
                    {
                        isDesktop: `(min-width: ${breakPoint}px)`,
                        // isLaptop: `(max-width: 1023px)`,
                        isMobile: `(max-width: ${breakPoint - 1}px)`,
                    },
                    (context) => {
                        let { isDesktop, isMobile } = context.conditions;

                        const prof = gsap.timeline();
                        prof.from(".prof-pic", { xPercent: -100, duration: 0.3, ease: "none" })
                        .to(".prof-pic", {
                            scrollTrigger: {
                                trigger: ".prof-pic",
                                start: "bottom center",
                                end: "bottom",
                                scrub: 1,
                                // markers: true
    
                            },
                            yPercent: 250,
                        })

                        gsap.from(".phrase", { 
                            y: 160, 
                            duration: 0.8, 
                            ease: "back", 
                            stagger: 0.1,
                            onComplete: () => {
                                gsap.set(".element", { willChange: "auto" });
                            }
                        });

                        const phraseScrollTl = gsap.timeline({
                            scrollTrigger: {
                                trigger: ".phrase",
                                start: isDesktop ? "bottom 20%" : "+=100 +=300",
                                end: isDesktop ? "bottom" : "bottom top",
                                scrub: 1,
                                // markers: true,
                            },
                        });
    
                        phraseScrollTl.to(".phrase", {
                            xPercent: 200,
                            duration: 3,
                            stagger: 0.2,
                        });

                        const textPath = document.querySelector(".text-path");
                        const textWidth = textPath.offsetWidth; 
                    
                        gsap.set(textPath, { x: 0 });

                        const marquee = gsap.timeline({ repeat: -1 });
    
                        marquee.to(".text-path", {
                            x: -textWidth / 2,
                            duration: 10,
                            ease: "none",
                            repeat: -1,
                            onComplete: () => {
                                gsap.set(".element", { willChange: "auto" });
                            }
                        });

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
                                gsap.set(".element", { willChange: "auto" });
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
                                gsap.set(".element", { willChange: "auto" });
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
                                end: "top bottom",
                                scrub: 1,
                                // markers: true,
                            },
                            onComplete: () => {
                                gsap.set(".element", { willChange: "auto" });
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
                                gsap.set(".element", { willChange: "auto" });
                            }
                        });
    
                        // Animating panels
                        gsap.utils.toArray(".panel").forEach((panel, i) => {
                            gsap.from(panel, {
                                xPercent: isDesktop ? (i % 2 === 0 ? 150 : -150) :
                                (i % 2 === 0 ? 110 : -110),
                                scrollTrigger: {
                                    trigger: panel,
                                    start: isDesktop ? "top center" : "center bottom",
                                    end: isDesktop ? "center center" : "center +=700",
                                    scrub: 1,
                                    // markers: true
                                },
                            });
                        });
                    }
                )

        }, container);

        return () =>{
            ctx.revert(); // Clean up animations on component unmount
        } 
    }, []);

    return (
        <div ref={container} className="container mx-auto px-4">
            <div className="flex justify-center h-screen items-center">
                <div className="frame overflow-hidden hidden md:block">
                    <img src={profPic} alt="my prof pic" className="prof-pic max-w-60 lg:max-w-80 m-4" />
                </div>
                <div>
                    <div className="phrase text-start text-5xl md:text-6xl lg:text-8xl hover:text-red-500 cursor-pointer">
                        CREATIVE <br /> DEVELOPER
                    </div>
                    <div className="phrase text-start text-5xl md:text-6xl lg:text-8xl hover:text-red-500 cursor-pointer">
                        CAR ENTHUSIAST
                    </div>
                    <div className="phrase text-start text-5xl md:text-6xl lg:text-8xl hover:text-red-500 cursor-pointer">
                        DOG DAD
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:h-screen">
                <div className="about headline text-transparent text-7xl md:text-9xl lg:text-10xl flex justify-start">
                    ABOUT
                </div>

                <div className="about-me flex flex-col flex-grow justify-center px-4 my-5 md:my-0">
                    <div className="line text-xl sm:text-3xl md:text-4xl lg:text-5xl z-36 h-10 md:h-20 relative overflow-hidden flex justify-center">
                        <span className="absolute">Hi, my name is Yeoungmin,</span>
                    </div>
                    <div className="line text-xl sm:text-3xl md:text-4xl lg:text-5xl z-36 h-10 md:h-20 relative overflow-hidden flex justify-center">
                        <span className="absolute">a creative developer </span>
                    </div>
                    <div className="line text-xl sm:text-3xl md:text-4xl lg:text-5xl z-36 h-10 md:h-20 relative overflow-hidden flex justify-center">
                        <span className="absolute">crafting memorable user experiences</span>
                    </div>
                    <div className="line text-xl sm:text-3xl md:text-4xl lg:text-5xl z-36 h-10 md:h-20 relative overflow-hidden flex justify-center">
                        <span className="absolute">and functionality to websites</span>
                    </div>
                    <br />
                    <div className="line text-xl sm:text-3xl md:text-4xl lg:text-5xl z-36 h-10 md:h-20 relative overflow-hidden flex justify-center">
                        <span className="absolute">I started with vanilla Javascript,</span>
                    </div>
                    <div className="line text-xl sm:text-3xl md:text-4xl lg:text-5xl z-36 h-10 md:h-20 relative overflow-hidden flex justify-center">
                        <span className="absolute">messed around with css animations,</span>
                    </div>
                    <div className="line text-xl sm:text-3xl md:text-4xl lg:text-5xl z-36 h-10 md:h-20 relative overflow-hidden flex justify-center">
                        <span className="absolute">did backend-dev from scratch, </span>
                    </div>
                    <div className="line text-xl sm:text-3xl md:text-4xl lg:text-5xl z-36 h-10 md:h-20 relative overflow-hidden flex justify-center">
                        <span className="absolute">and exploring possibilities</span>
                    </div>
                    <div className="line text-xl sm:text-3xl md:text-4xl lg:text-5xl z-36 h-10 md:h-20 relative overflow-hidden flex justify-center">
                        <span className="absolute"> with GSAP and Three.js</span>
                    </div>

                </div>
            </div>

            <div className="works headline text-transparent text-7xl sm:text-8xl md:text-9xl lg:text-10xl flex justify-end">
                WORKS
            </div>

            <div className="flex flex-col justify-evenly h-screen md:h-auto md:mb-5">
                <div className="panel text-3xl sm:text-4xl md:text-5xl flex my-4 justify-start">
                    <div className="max-w-4xl flex flex-col">
                        <div className="text-start">FRAME COFFEE</div>
                        <div className="overflow-hidden relative h-16">
                            <div className="text-path absolute flex space-x-4 whitespace-nowrap text-base sm:text-lg md:text-xl">
                                <span className="font-bold">E-commerce Website | </span>
                                <span className="font-bold">React | </span>
                                <span className="font-bold">Express | </span>
                                <span className="font-bold">MongoDB | </span>
                                <span className="font-bold">Node.js | </span>
                                <span className="font-bold">Scroll Animation | </span>
                                <span className="font-bold">E-commerce Website | </span>
                                <span className="font-bold">React | </span>
                                <span className="font-bold">Express | </span>
                                <span className="font-bold">MongoDB | </span>
                                <span className="font-bold">Node.js | </span>
                                <span className="font-bold">Scroll Animation | </span>
                            </div>
                        </div>
                        <div>
                            <img src={frame} alt="frame coffee" className="" />
                        </div>
                    </div>
                </div>
                <div className="panel text-3xl sm:text-4xl md:text-5xl flex my-4 justify-end">
                    <div className="max-w-4xl flex flex-col">
                        <div className="text-end">YMSHIN.COM</div>
                        <div className="overflow-hidden relative h-16">
                            <div className="text-path absolute flex space-x-4 whitespace-nowrap text-base sm:text-lg md:text-xl">
                                <span className="font-bold">First Portfolio Website | </span>
                                <span className="font-bold">Vanilla Javascript | </span>
                                <span className="font-bold">HTML | </span>
                                <span className="font-bold">CSS | </span>
                                <span className="font-bold">First Portfolio Website | </span>
                                <span className="font-bold">Vanilla Javascript | </span>
                                <span className="font-bold">HTML | </span>
                                <span className="font-bold">CSS | </span>
                                <span className="font-bold">First Portfolio Website | </span>
                                <span className="font-bold">Vanilla Javascript | </span>
                                <span className="font-bold">HTML | </span>
                                <span className="font-bold">CSS | </span>
                            </div>
                        </div>
                        <div>
                            <img src={ym} alt="frame coffee" className="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact headline text-transparent text-7xl md:text-9xl flex justify-start">
                CONNECT 
            </div>
            <div className="contact headline text-transparent text-7xl md:text-9xl flex justify-start">
                WITH ME
            </div>
        </div>
    );
};

export default HomeScreen;
