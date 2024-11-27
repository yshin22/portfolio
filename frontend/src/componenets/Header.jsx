import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Header = () => {

  gsap.registerPlugin(useGSAP, ScrollTrigger);

    const container = useRef();

    useGSAP(() => {

        const tl = gsap.timeline();
        tl.from(".phrase", { y:50, stagger: 0.1, duration: 0.8, ease: "back" })

    }, { scope: container }); // <-- scope is for selector text (optional)

  return (
    <header ref={container} className="flex w-full mt-5 pl-2 pr-2 justify-center md:justify-end text-center z-110 fixed">
      <div className="phrase t1 m-2 text-sm sm:text-xl">
        YEOUNGMIN SHIN
      </div>
      <div className="phrase m-2 text-sm sm:text-xl">
        |
      </div>
      <div className="phrase t2 m-2 text-sm sm:text-xl">
        ONE AND ONLY
      </div>
    </header>
  )
}

export default Header

