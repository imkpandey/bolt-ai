"use client";

import React from "react";
import acmeLogo from "../assets/logo-acme.png";
import apexLogo from "../assets/logo-apex.png";
import celestialLogo from "../assets/logo-celestial.png";
import quantumLogo from "../assets/logo-quantum.png";
import pulseLogo from "../assets/logo-pulse.png";
import echoLogo from "../assets/logo-echo.png";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <section className="relative py-20 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="">
            <h2>Meet our customers</h2>
          </div>
          <div className="relative w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[
                acmeLogo,
                pulseLogo,
                echoLogo,
                celestialLogo,
                quantumLogo,
                apexLogo,
                acmeLogo,
                pulseLogo,
                echoLogo,
                celestialLogo,
                quantumLogo,
                apexLogo,
              ].map((logo, index) => (
                <img
                  src={logo.src}
                  alt={logo.src}
                  key={index}
                  className="h-6 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
