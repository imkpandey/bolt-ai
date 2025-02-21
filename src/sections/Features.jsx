"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import nameTag from "@/assets/name-tag.png";
import seoSphere from "@/assets/seo-sphere.png";
import aiPrompt from "@/assets/ai-prompt.png";
import design from "@/assets/design.png";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

const cards = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly interface",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSize: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSize: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart website builder",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSize: 177,
  },
];

const Features = () => {
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    const options = {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, []);

  return (
    <section className="relative py-20 md:py-24 w-full flex flex-col items-center gap-12 overflow-hidden">
      <div className="container relative">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter text-center max-w-4xl md:max-w-3xl mx-auto">
          A complete AI-based website builder with all the features you need.
        </h1>
        <div className="flex flex-col justify-center mt-20 gap-6 md:gap-2.5">
          <div className="flex flex-col md:flex-row gap-6 md:gap-2.5">
            <div className="py-4 px-6 bg-[rgba(0,152,254,0.7)] border border-white/20 w-full md:w-[55%] h-[400px] rounded-lg flex flex-col gap-4 overflow-hidden">
              <h2 className="text-2xl font-semibold">Intuitive Design</h2>
              <p className="text-lg text-white/80">
                Bolt AI offers a full suite of layout, styling and text
                features. Beyond that, it supports web-specific capabilities
                that traditional design tools can&apos;t support.
              </p>
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="relative right-[0] md:right-[-20%] bottom-[0] w-[300px] h-[220px] md:w-[500px] md:h-[300px]">
                  <Image
                    src={design}
                    alt="color selection ui box"
                    width={600}
                    height={600}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="relative py-4 px-6 border border-white/20 w-full md:w-[45%] h-[400px] rounded-lg flex flex-col gap-4 bg-black">
              <motion.div
                style={{
                  maskImage,
                }}
                className="absolute inset-0 -m-px rounded-lg border border-[#00a6ff]"
              />
              <h2 className="text-2xl font-semibold">Collaborate</h2>
              <p className="text-lg text-white/70">
                Collaboration in Bolt is seamless. Invite your team and work
                together in real-time.
              </p>
              <div className="w-full h-full flex justify-center items-center">
                <div className="w-[300px] h-[150px]">
                  <Image
                    src={nameTag}
                    alt="name tag"
                    width={600}
                    height={600}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-2.5">
            <div className="relative pt-4 px-6 bg-black border border-white/20 w-full md:w-[45%] h-[400px] rounded-lg flex flex-col gap-4">
              <motion.div
                style={{
                  maskImage,
                }}
                className="absolute inset-0 -m-px rounded-lg border border-[#00a6ff]"
              />
              <h2 className="text-2xl font-semibold">SEO & Performance</h2>
              <p className="text-lg text-white/70">
                Bolt AI uses state-of-the-art technology to make your website
                fast and SEO optimized to rank.
              </p>
              <div className="w-full h-full flex justify-center items-center overflow-hidden">
                <div className="w-[300px] h-[250px]">
                  <Image
                    src={seoSphere}
                    alt="seo sphere"
                    width={600}
                    height={600}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="relative py-4 px-6 border border-white/20 w-full md:w-[55%] h-[400px] rounded-lg flex flex-col gap-4 bg-black">
              <motion.div
                style={{
                  maskImage,
                }}
                className="absolute inset-0 -m-px rounded-lg border border-[#00a6ff]"
              />
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_bottom_center,rgb(0,166,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
              <h2 className="text-2xl font-semibold">AI Tools</h2>
              <p className="text-lg text-white/70">
                Enhance your website with modern AI tools for translation, text
                rewrite for polished content.
              </p>
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="w-[300px] h-[250px]">
                  <Image
                    src={aiPrompt}
                    alt="ai prompt box"
                    width={600}
                    height={600}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
