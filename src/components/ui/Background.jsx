"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

export default function Index() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        minHeight: "100vh",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <Model />
      <directionalLight intensity={2} position={[0, 1, 1]} />
      <Environment preset="city" />
      <EffectComposer>
        {/* <Bloom
          mipmapBlur
          intensity={1}
          luminanceThreshold={1}
          luminanceSmoothing={0.5}
        /> */}
      </EffectComposer>
    </Canvas>
  );
}
