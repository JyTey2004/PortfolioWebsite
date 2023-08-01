import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf")
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true}}
      camera={{fov: 55, near: 0.1, far: 180, position: [-4, 3, 6]}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={1} />
        <directionalLight intensity={0.5} position={[0, 10, 0]} />
        <spotLight position={[5, 27, 20]} intensity={1} />
        {/* <pointLight position={[5, -25, -5]} intensity={1} /> */}
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

      
    </Canvas>
  )
}

export default EarthCanvas;