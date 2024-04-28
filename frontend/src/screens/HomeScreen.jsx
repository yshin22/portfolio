import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HomeScreen = () => {

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const container = useRef();

    useGSAP(() => {

        const tl = gsap.timeline();
        tl.from(".phrase", {y:160, duration: 0.8, ease: "back"})
        tl.to(".phrase", {
                scrollTrigger: {
                    trigger: ".phrase",
                    start: "clamp(top center)",
                    end: "top",
                    // markers: "true",
                    scrub: 1,
                    // pin: true,
                },
                x: 400,
                duration: 3,
        },)

        // const tl1 = gsap.timeline();

        // tl1.from(".blue", {xPercent: -100})
        // .from(".yellow", {xPercent: -100})
        // .from(".red", {xPercent: -100});

        // ScrollTrigger.create({
        //     animation: tl1,
        //     trigger: ".container",
        //     start: "top center",
        //     end: "+=4000",
        //     scrub: true,
        //     pin: true,
        //     anticipatePin: 1,
        //     markers: true
        // });

        let sections = gsap.utils.toArray(".panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: ".container",
              pin: true,
              scrub: 1,
              snap: 1 / (sections.length - 1),
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: "+=3500",
            }
          });

        // gsap.from(".phrase", {y:160, duration: 0.8, ease: "back", stagger: 0.1});

        // gsap.to(".phrase", {
        //     scrollTrigger: {
        //         trigger: ".phrase",
        //         start: "clamp(center bottom)",
        //         markers: "true",
        //         scrub: 1,
        //         // pin: true,
        //     },
        //     x: 400,
        //     duration: 3,
        //     stagger: 0.1,

        // }); // <-- automatically reverted
      
      }, { scope: container }); // <-- scope is for selector text (optional)

  return (

    <div ref={container}>
        <div className="flex flex-col justify-center h-screen">
            <div className="phrase w-fit text-8xl">
                FULL STACK
            </div>
            <div className="phrase w-fit text-8xl">
                WEB DEV
            </div>
            <div className="phrase w-fit text-8xl">
                CAR ENTHUSIAST 
            </div>
            <div className="phrase w-fit text-8xl">
                DOG DAD
            </div>
        </div>
        <section >
            <section className="blue panel bg-blue-300 h-screen">

            </section>
            <section className="yellow panel bg-yellow-300 h-screen">

            </section>
            <section className="red panel bg-red-300 h-screen">

            </section>
        </section>
    </div>
  )
}

export default HomeScreen