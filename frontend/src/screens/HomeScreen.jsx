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
        profTl.from(".prof-pic", {xPercent: -100, duration: 0.8, ease: "none"})
        profTl.to(".prof-pic", {
            scrollTrigger: {
                trigger: ".prof-pic",
                start: "clamp(top center)",
                end: "bottom 100px",
                scrub: 1,
                markers: true,
            },
            yPercent: 100
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
            xPercent: 100,
            duration: 3,
            stagger: 0.1,
        },)
        tl.from(".phrase", {y:160, duration: 0.8, ease: "back", stagger: 0.1})



        // let sections = gsap.utils.toArray(".panel");

        // sections.forEach((section, i) => {
        //     gsap.to(section, {
        //         xPercent: -100 * (sections.length - 1),
        //         ease: "none",
        //         scrollTrigger: {
        //           trigger: section,
        //           pin: true,
        //           scrub: 1,
        //           snap: 1 / (sections.length - 1),
        //           start: "center center",
        //           // base vertical scrolling on how wide the container is so it feels more natural.
        //           end: "bottom 100px",
        //         //   markers: "true",
        //         }
        //     });
        // })

        const panel_tl = gsap.timeline();

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
                        snap: 1 / panels.length - 1,
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
                        snap: 1 / panels.length - 1,
                    },
                })
            )
        
        })
      
      }, { scope: container }); // <-- scope is for selector text (optional)

  return (

    <div ref={container}>
        <div className="flex justify-center h-screen items-center">
            <img src={profPic} alt="my prof pic" className="prof-pic max-w-80 m-4"/>
            <div>
                <div className="phrase text-start text-8xl">
                    FULL STACK
                </div>
                <div className="phrase text-start text-8xl">
                    WEB DEV
                </div>
                <div className="phrase text-start text-8xl">
                    CAR ENTHUSIAST 
                </div>
                <div className="phrase text-start text-8xl">
                    DOG DAD
                </div>
            </div>
        </div>

        <div className="about-me h-screen">

        </div>

        <div className="flex flex-col justify-center">
            <div className="panel text-2xl flex justify-start m-2 h-28 items-center">
                FRAME COFFE ROASTERS
            </div>
            <div className="panel text-2xl flex justify-end m-2 yellow h-28 items-center">
                YMSHIN.COM
            </div>
            <div className="panel text-2xl flex justify-start m-2 yellow h-28 items-center">
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