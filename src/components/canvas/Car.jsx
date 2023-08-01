import React, { Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, Center } from '@react-three/drei'
import { DoubleSide } from "three";
import CanvasLoader from '../Loader'


const Car = ({isMobile}) => {
  const car = useGLTF('./lambo/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={1} penumbra={1} castShadow />
      <primitive object={car.scene} 
      scale={isMobile ? 0.06 : 0.15}
      position={isMobile ? [2, 0, -2.2 ] : [3.9, -2, -6]}
      rotation={isMobile ? [0, 2.6, 0] : [0, 2.9, 0]}
      />
    </mesh>
  )
}

const CarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuesry = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuesry.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuesry.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuesry.removeEventListener('change', handleMediaQueryChange);
    };
  }, [])

  return (
    <Canvas
    frameloop='demand'
    shadows
    camera={{ position: [20, 0, 5], fov: 16 }}
    gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
        />

        <Car  isMobile={isMobile} />
        
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default CarsCanvas;