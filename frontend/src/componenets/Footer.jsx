import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const container = useRef();

  useGSAP(() => {

      const tl = gsap.timeline();
      tl.from(".footer", { 
        y:50, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "back",
        scrollTrigger: {
          trigger: ".footer",
          start: "top bottom",
          end: "top +=700",
          scrub: 1,
          markers: true,
        }
      })

  }, { scope: container });

  return (
    <div ref={container}>
      <div className="container mx-auto px-4 flex-col mt-2 border-t-2 border-black h-40">
        <div className="">
          Want to get connected? Shoot me an email!
        </div>
        <div className="">
          <span>Email .</span>
          <span> LinkedIn . </span>
          <span>Github</span>
        </div>
      </div>
    </div>
  )
}

export default Footer