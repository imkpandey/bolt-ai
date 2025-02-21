import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
// import { useControls } from "leva";

export default function Model() {
  const { nodes } = useGLTF("/medias/bolt.gltf");
  const { viewport } = useThree();
  const lightning = useRef(null);

  useFrame(() => {
    lightning.current.rotation.z += 0.01;
  });

  return (
    <group scale={viewport.width / 3.75}>
      <Text
        font={"/fonts/GTWalsheimTrial-Bd.ttf"}
        position={[0, 0.25, -1]}
        fontSize={0.75}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Bolt AI
      </Text>
      <mesh
        ref={lightning}
        geometry={nodes.lightning.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.75}
      >
        <MeshTransmissionMaterial
          color="#7fc2d8"
          thickness={0.1}
          roughness={0}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.5}
          backside
        />
      </mesh>
    </group>
  );
}
