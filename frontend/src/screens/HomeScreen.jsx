import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HomeScreen = () => {

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".phrase", {y:160, stagger: 0.1, duration: 0.8, ease: "back"})
        // gsap code here...
        gsap.to(".phrase", {
            scrollTrigger: {
                trigger: ".phrase",
                start: "top center",
                end: "top 100px",
                markers: "true",
                scrub: 1,
                // pin: true,
            },
            x: 400,
            duration: 3,

        }); // <-- automatically reverted
      
      }, { scope: container }); // <-- scope is for selector text (optional)

  return (

    <div>
        <div ref={container} className="flex flex-col justify-center h-screen">
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
        <div className="h-screen">

        </div>

    </div>
  )
}

export default HomeScreen