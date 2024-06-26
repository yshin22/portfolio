import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profPic from "../assets/images/ym_profpic.jpeg";


const HomeScreen = () => {

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const container = useRef();

    useGSAP(() => {

        const profTl = gsap.timeline();
        profTl.from(".prof-pic", {xPercent: -100, duration: 0.3, ease: "none"})
        profTl.to(".prof-pic", {
            scrollTrigger: {
                trigger: ".prof-pic",
                start: "clamp(top center)",
                end: "bottom 100px",
                scrub: 1,
                // markers: true,
            },
            yPercent: 300
        })

        const tl = gsap.timeline();
        tl.to(".phrase", {
            scrollTrigger: {
                trigger: ".phrase",
                start: "clamp(top center)",
                end: "+=500",
                // markers: "true",
                scrub: 1,
            },
            xPercent: 200,
            duration: 3,
            stagger: 0.1,
        },)
        tl.from(".phrase", {y:160, duration: 0.8, ease: "back", stagger: 0.1})

        gsap.from(".about", {
            scrollTrigger: {
                trigger: ".about",
                start: "clamp(top bottom)",
                end: "+=500",
                // markers: "true",
                scrub: 1,
            },
            xPercent: -100,
            duration: 3,
        })

        gsap.from(".works", {
            scrollTrigger: {
                trigger: ".works",
                start: "clamp(top bottom)",
                end: "+=500",
                // markers: "true",
                scrub: 1,
            },
            xPercent: 100,
            duration: 3,
        })

        let panels = gsap.utils.toArray(".panel");

        panels.forEach((panel, i) => {
            (i%2===0) ? (
                gsap.from(panel, {
                    xPercent: 100,
                    scrollTrigger: {
                        trigger: panel,
                        start: "clamp(-=250 center)",
                        end: "top center",
                        // markers: "true",
                        scrub: 1,
                        // snap: 1 / panels.length - 1,
                    },
                })
            ) : (
                gsap.from(panel, {
                    xPercent: -100,
                    scrollTrigger: {
                        trigger: panel,
                        start: "clamp(-=250 center)",
                        end: "top center",
                        // markers: "true",
                        scrub: 1,
                        // snap: 1 / panels.length - 1,
                    },
                })
            )      
        })

        gsap.from(".line span", 1.8, {
            scrollTrigger: {
                trigger: ".line span",
                scrub: 2,
                start: "-=200 center",
                end: "-=200 center",
                markers: "true"
            },
            y: 100,
            ease: "power3.out",
            duration: 5,
            delay: 1,
            stagger: 0.5,
          })


      
      }, { scope: container }); // <-- scope is for selector text (optional)

  return (

    <div ref={container}>
        <div className="flex justify-center h-screen items-center">
            <div className="frame overflow-hidden">
                <img src={profPic} alt="my prof pic" className="prof-pic max-w-80 m-4"/>
            </div>
            <div>
                <div className="phrase text-start text-8xl hover:text-red-500 cursor-pointer">
                    FULL STACK 
                </div>
                <div className="phrase text-start text-8xl hover:text-red-500 cursor-pointer">
                    WEB DEV
                </div>
                <div className="phrase text-start text-8xl hover:text-red-500 cursor-pointer">
                    CAR ENTHUSIAST 
                </div>
                <div className="phrase text-start text-8xl hover:text-red-500 cursor-pointer">
                    DOG DAD
                </div>
            </div>
        </div>

        <div className="about headline text-transparent text-10xl flex justify-start">
            ABOUT
        </div>

        <div className="about-me h-screen flex flex-col justify-center">

            <div className="line text-7xl z-36 h-20 relative overflow-hidden flex justify-center">
                <span className="absolute">
                    Hi, my name is Yeoungmin,
                </span>
            </div>
            <div className="line text-7xl z-36 h-20 relative overflow-hidden flex justify-center">
                <span className="absolute">
                    a creative Full Stack Developer
                </span>
            </div>

            {/* <div className="flex justify-end text-2xl">based in Fairfax, VA</div> */}
        </div>

        <div className="works headline text-transparent text-9xl flex justify-end">
            WORKS
        </div>

        <div className="flex flex-col justify-evenly h-screen">
            <div className="panel text-6xl flex justify-start m-2 h-28 items-center">
                FRAME COFFE 
            </div>
            <div className="panel text-6xl flex justify-end m-2 yellow h-28 items-center">
                YMSHIN.COM
            </div>
            <div className="panel text-6xl flex justify-start m-2 yellow h-28 items-center">
                GEOCANVAS.IO
            </div>
        </div>
        <section>
            <section className="h-screen ">
            </section>
            <section className="h-screen ">
            </section>
            <section className="h-screen ">
            </section>              
        </section>
    </div>
  )
}

export default HomeScreen