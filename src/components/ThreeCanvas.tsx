import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { OrbitControls, Line } from '@react-three/drei';

function ModernDatabase() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[4, -1, -2]}>
      {[0, 1, 2].map((i) => (
        <group key={i} position={[0, i * 1.8, 0]}>
          {/* Outer glowing shell */}
          <mesh>
            <cylinderGeometry args={[2, 2, 1.2, 32, 1, true]} />
            <meshStandardMaterial 
              color="#0ea5e9"
              emissive="#0284c7"
              emissiveIntensity={0.5}
              transparent
              opacity={0.2}
              side={THREE.DoubleSide}
              wireframe={false}
            />
          </mesh>
          {/* Wireframe accent */}
          <mesh>
            <cylinderGeometry args={[2.05, 2.05, 1.25, 16, 1, true]} />
            <meshBasicMaterial 
              color="#38bdf8"
              transparent
              opacity={0.3}
              wireframe={true}
            />
          </mesh>
          {/* Inner core */}
          <mesh>
            <cylinderGeometry args={[1, 1, 1, 16]} />
            <meshStandardMaterial 
              color="#14b8a6"
              emissive="#0d9488"
              emissiveIntensity={1}
              transparent
              opacity={0.8}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function DataPackets() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 50;
  
  const packets = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 30
      ] as [number, number, number],
      speed: Math.random() * 3 + 1,
      color: Math.random() > 0.5 ? "#14b8a6" : "#f59e0b"
    }));
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.z += packets[i].speed * delta * 2;
        if (child.position.z > 15) {
          child.position.z = -25;
        }
        child.rotation.x += delta;
        child.rotation.y += delta;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {packets.map((p, i) => (
        <mesh key={i} position={p.position}>
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshBasicMaterial color={p.color} wireframe />
        </mesh>
      ))}
    </group>
  );
}

function StaticNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  
  const { nodes, lines } = useMemo(() => {
    const nodes = [];
    const count = 80;
    for (let i = 0; i < count; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20 - 5
        )
      );
    }
    const lines = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 4.5) {
          lines.push([nodes[i], nodes[j]]);
        }
      }
    }
    return { nodes, lines };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.015;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
        </mesh>
      ))}
      {lines.map((line, i) => (
        <Line 
          key={`line-${i}`}
          points={line as any}
          color="#0ea5e9"
          lineWidth={1}
          transparent
          opacity={0.15}
        />
      ))}
    </group>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#020617] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <fog attach="fog" args={['#020617', 5, 25]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ModernDatabase />
        <StaticNetwork />
        <DataPackets />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}
