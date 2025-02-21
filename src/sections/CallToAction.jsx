"use client";

import Image from "next/image";
import Button from "@/components/Button";
import glowLogo from "@/assets/glow.png";
import gridLines from "@/assets/grid-lines.png";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useEffect, useRef } from "react";

const useRelativeMousePosition = (to) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (e) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(e.x - left);
    mouseY.set(e.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

const CallToAction = () => {
  const borderedDivRef = useRef(null);
  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="relative border border-white/15 py-24 rounded-xl overflow-hidden group">
          <div
            className="absolute inset-0 bg-[rgb(0,153,254)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          />
          <motion.div
            ref={borderedDivRef}
            className="absolute inset-0 bg-[rgb(0,153,254)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines.src})`,
              maskImage,
            }}
          />
          <div className="relative flex flex-col items-center justify-center">
            <div className="relative w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
              <Image
                src={glowLogo}
                alt="glowing bolt AI logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-5xl max-w-lg mx-auto tracking-tight text-center font-semibold mt-10">
              Step into the future of building websites
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5">
              Achieve fast, impactful results without the complexity
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
