import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import Modell from "./Modell";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./assets/ambulance.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default function App() {
  return (
    <div className='App'>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <Modell src='./assets/ambulance.glb' />
          <OrbitControls />
          <Environment preset='sunset' background />
        </Suspense>
      </Canvas>

      <select name='cars' id='cars'>
        <option value='volvo'>ambulance.glb</option>
        <option value='saab'>delivery.glb</option>
        <option value='mercedes'>firetruck.glb</option>
        <option value='audi'>garbageTruck.glb</option>
      </select>
    </div>
  );
}
