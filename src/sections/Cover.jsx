import React from "react";
import Image from "next/image";

import productCover from "@/assets/product.webp";

const Cover = () => {
  return (
    <section className="relative w-full flex flex-col items-center gap-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_center_center,rgb(0,166,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      <div className="container relative">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(0,166,255,.4))] text-transparent bg-clip-text text-center max-w-full md:max-w-4xl mx-auto">
          Design beautiful responsive sites with an intuitive interface
        </h1>
      </div>
      <div className="relative w-[80%] h-full">
        <Image
          src={productCover}
          alt="product cover"
          width={1800}
          height={1200}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Cover;
