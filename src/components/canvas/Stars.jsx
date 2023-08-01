import { useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Preload } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"
import CanvasLoader from "../Loader"

const Stars = (props) => {
  const ref = useRef()

  const sphere = random.inSphere(new Float32Array(10000), { radius: 1.5 })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15
    ref.current.rotation.y -= delta / 22.5
  })

  return (
    <group rotation={[0, 9, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial 
          tranparent 
          size={0.001} 
          color="#f272c8"
          sizeAttenuation={true}
          depthWrite={false}
          />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 2]}}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas