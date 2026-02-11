import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

type OrbProps = {
  color: string
  position: [number, number, number]
  size: number
}

const Orb = ({ color, position, size }: OrbProps) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += 0.001
    meshRef.current.rotation.y += 0.0015
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime / 2) * 0.15
  })

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.15} transparent opacity={0.55} />
      </mesh>
    </Float>
  )
}

const ThreeBackdrop = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 4]} intensity={0.8} />
        <Orb color="#9cb99f" position={[-2.4, 0.6, -1]} size={1.1} />
        <Orb color="#c9b493" position={[2.2, -0.4, -0.5]} size={0.9} />
        <Orb color="#b08d5c" position={[0.6, 1.8, -2]} size={0.7} />
      </Canvas>
    </div>
  )
}

export default ThreeBackdrop
