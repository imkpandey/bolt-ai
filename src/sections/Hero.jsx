"use client";

import React from "react";
import dynamic from "next/dynamic";
import Button from "@/components/Button";
import { Canvas } from "@react-three/fiber";
import Stars from "@/components/stars";

const Background = dynamic(() => import("@/components/ui/Background"), {
  ssr: false,
});

const Hero = () => {
  return (
    <section
      className="w-full min-h-screen flex justify-center items-center"
      //   style={{
      //     backgroundImage: `url(${starsBg.src})`,
      //   }}
    >
      <div className="container z-[2]">
        {/* <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          Bolt AI
        </h1> */}
        <p className="text-xl md:text-2xl text-white/70 text-center max-w-2xl mx-auto">
          Build your websites at lightning speed with Bolt AI
        </p>
        <div className="flex justify-center mt-8">
          <Button>Join waitlist</Button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[0]">
        <Canvas
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            minHeight: "100vh",
            pointerEvents: "none",
            zIndex: 9,
          }}
        >
          <Stars />
        </Canvas>
        <Background />
      </div>
    </section>
  );
};

export default Hero;
