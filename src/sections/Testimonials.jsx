"use client";

import React from "react";
import { motion } from "framer-motion";

import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import Image from "next/image";

const testimonials = [
  {
    text: "This AI website builder has completely transformed how I manage my website. I highly recommend it to anyone looking for an effective solution for their website.",
    name: "Skylar Smith",
    title: "CEO, Acme Inc.",
    avatar: avatar1,
  },
  {
    text: "I've been using Bolt AI for a few months now and it's been a game-changer for my website. The interface is intuitive and easy to navigate, and the results are stunning.",
    name: "Jonathan Lopez",
    title: "CTO, XYZ Corp.",
    avatar: avatar2,
  },
  {
    text: "I love how easy it is to use Bolt AI. It's a great tool for anyone looking to create a stunning website in no time. I highly recommend it to anyone in need of a website.",
    name: "Emily Johnson",
    title: "CEO, Quantum Corp.",
    avatar: avatar3,
  },
  {
    text: "Bolt AI has been a game-changer for my website. It's so easy to use and has saved me so much time. I can't recommend it enough.",
    name: "Alex Turner",
    title: "Product Designer, Pulse",
    avatar: avatar4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter text-center">
          Our customers love us
        </h1>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex flex-none pr-5 gap-5 -translate-x-1/2"
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col justify-between border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(0,153,254,.3),black)] max-w-sm md:max-w-lg mx-auto flex-none"
              >
                <div className="text-lg md:text-2xl tracking-tight">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(0,153,254)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-[2] before:rounded-lg">
                    <Image
                      src={testimonial.avatar}
                      alt={`Avatar for ${testimonial.name}`}
                      className="h-11 w-11 rounded-lg grayscale"
                    />
                  </div>
                  <div className="">
                    <div>{testimonial.name}</div>
                    <div className="text-white/50 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
