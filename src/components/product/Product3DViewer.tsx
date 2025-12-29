import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Html } from "@react-three/drei";
import * as THREE from "three";

interface Product3DViewerProps {
  productType: "bag" | "jacket" | "shoes" | "belt" | "wallet" | "accessories";
  color?: string;
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-2 border-bronze/30 border-t-bronze rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground">Loading 3D Model...</p>
      </div>
    </Html>
  );
}

// Leather Bag Model
function LeatherBag({ color = "#8B4513" }: { color?: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Main bag body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1.8, 1.2, 0.8]} />
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Bag flap */}
      <mesh position={[0, 1.15, 0.1]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[1.85, 0.15, 0.9]} />
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Handle left */}
      <mesh position={[-0.5, 1.5, 0]}>
        <torusGeometry args={[0.25, 0.04, 8, 16, Math.PI]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.2} />
      </mesh>
      {/* Handle right */}
      <mesh position={[0.5, 1.5, 0]}>
        <torusGeometry args={[0.25, 0.04, 8, 16, Math.PI]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.2} />
      </mesh>
      {/* Buckle */}
      <mesh position={[0, 1.15, 0.55]}>
        <boxGeometry args={[0.2, 0.15, 0.05]} />
        <meshStandardMaterial color="#B8860B" roughness={0.3} metalness={0.8} />
      </mesh>
      {/* Stitching detail lines */}
      <mesh position={[0, 0.5, 0.41]}>
        <planeGeometry args={[1.6, 1]} />
        <meshStandardMaterial color={color} roughness={0.8} metalness={0} transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

// Leather Jacket Model
function LeatherJacket({ color = "#2C1810" }: { color?: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Torso */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.6, 2, 0.6]} />
        <meshStandardMaterial color={color} roughness={0.75} metalness={0.1} />
      </mesh>
      {/* Left sleeve */}
      <mesh position={[-1.1, 0.3, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.25, 0.2, 1.8, 12]} />
        <meshStandardMaterial color={color} roughness={0.75} metalness={0.1} />
      </mesh>
      {/* Right sleeve */}
      <mesh position={[1.1, 0.3, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.25, 0.2, 1.8, 12]} />
        <meshStandardMaterial color={color} roughness={0.75} metalness={0.1} />
      </mesh>
      {/* Collar left */}
      <mesh position={[-0.4, 1.1, 0.2]} rotation={[0.3, 0, -0.2]}>
        <boxGeometry args={[0.4, 0.3, 0.15]} />
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Collar right */}
      <mesh position={[0.4, 1.1, 0.2]} rotation={[0.3, 0, 0.2]}>
        <boxGeometry args={[0.4, 0.3, 0.15]} />
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Zipper */}
      <mesh position={[0, 0, 0.31]}>
        <boxGeometry args={[0.08, 1.8, 0.02]} />
        <meshStandardMaterial color="#C0C0C0" roughness={0.3} metalness={0.9} />
      </mesh>
      {/* Pocket left */}
      <mesh position={[-0.5, -0.4, 0.31]}>
        <boxGeometry args={[0.5, 0.4, 0.02]} />
        <meshStandardMaterial color={color} roughness={0.8} metalness={0.1} />
      </mesh>
      {/* Pocket right */}
      <mesh position={[0.5, -0.4, 0.31]}>
        <boxGeometry args={[0.5, 0.4, 0.02]} />
        <meshStandardMaterial color={color} roughness={0.8} metalness={0.1} />
      </mesh>
    </group>
  );
}

// Leather Shoes Model
function LeatherShoes({ color = "#3D2314" }: { color?: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Left shoe */}
      <group position={[-0.6, 0, 0]}>
        {/* Sole */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.4, 0.1, 1.2]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.9} metalness={0} />
        </mesh>
        {/* Upper */}
        <mesh position={[0, 0.2, -0.1]}>
          <boxGeometry args={[0.38, 0.25, 1]} />
          <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
        </mesh>
        {/* Toe cap */}
        <mesh position={[0, 0.15, 0.5]}>
          <sphereGeometry args={[0.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color={color} roughness={0.6} metalness={0.15} />
        </mesh>
      </group>
      {/* Right shoe */}
      <group position={[0.6, 0, 0]}>
        {/* Sole */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.4, 0.1, 1.2]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.9} metalness={0} />
        </mesh>
        {/* Upper */}
        <mesh position={[0, 0.2, -0.1]}>
          <boxGeometry args={[0.38, 0.25, 1]} />
          <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
        </mesh>
        {/* Toe cap */}
        <mesh position={[0, 0.15, 0.5]}>
          <sphereGeometry args={[0.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color={color} roughness={0.6} metalness={0.15} />
        </mesh>
      </group>
    </group>
  );
}

// Leather Belt Model
function LeatherBelt({ color = "#5C4033" }: { color?: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Belt strap curved */}
      <mesh>
        <torusGeometry args={[1.2, 0.08, 8, 32, Math.PI * 1.7]} />
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Belt end */}
      <mesh position={[0.9, -0.8, 0]} rotation={[0, 0, -0.5]}>
        <boxGeometry args={[0.4, 0.16, 0.03]} />
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Buckle frame */}
      <mesh position={[-0.9, -0.8, 0]} rotation={[0, 0, 0.5]}>
        <torusGeometry args={[0.15, 0.025, 8, 4]} />
        <meshStandardMaterial color="#B8860B" roughness={0.3} metalness={0.85} />
      </mesh>
      {/* Buckle pin */}
      <mesh position={[-0.9, -0.7, 0.02]} rotation={[0, 0, 0.5]}>
        <cylinderGeometry args={[0.015, 0.015, 0.2, 8]} />
        <meshStandardMaterial color="#B8860B" roughness={0.3} metalness={0.85} />
      </mesh>
    </group>
  );
}

// Leather Wallet Model
function LeatherWallet({ color = "#654321" }: { color?: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main wallet body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.4, 0.9, 0.15]} />
        <meshStandardMaterial color={color} roughness={0.75} metalness={0.1} />
      </mesh>
      {/* Card slot 1 */}
      <mesh position={[0, 0.15, 0.076]}>
        <boxGeometry args={[1.2, 0.2, 0.01]} />
        <meshStandardMaterial color={color} roughness={0.8} metalness={0.05} />
      </mesh>
      {/* Card slot 2 */}
      <mesh position={[0, -0.1, 0.076]}>
        <boxGeometry args={[1.2, 0.2, 0.01]} />
        <meshStandardMaterial color={color} roughness={0.8} metalness={0.05} />
      </mesh>
      {/* Stitching line */}
      <mesh position={[0, 0, 0.078]}>
        <planeGeometry args={[1.35, 0.85]} />
        <meshStandardMaterial color={color} roughness={0.9} transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

// Generic Accessory Model
function AccessoryModel({ color = "#6B4423" }: { color?: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main accessory piece */}
      <mesh>
        <cylinderGeometry args={[0.8, 0.8, 0.3, 32]} />
        <meshStandardMaterial color={color} roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Center detail */}
      <mesh position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
        <meshStandardMaterial color="#B8860B" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
}

function ProductModel({ productType, color }: Product3DViewerProps) {
  switch (productType) {
    case "bag":
      return <LeatherBag color={color} />;
    case "jacket":
      return <LeatherJacket color={color} />;
    case "shoes":
      return <LeatherShoes color={color} />;
    case "belt":
      return <LeatherBelt color={color} />;
    case "wallet":
      return <LeatherWallet color={color} />;
    case "accessories":
    default:
      return <AccessoryModel color={color} />;
  }
}

export function Product3DViewer({ productType, color }: Product3DViewerProps) {
  return (
    <div className="w-full h-full bg-gradient-to-b from-sand/50 to-cream/30 rounded-lg">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <directionalLight position={[-5, 3, -5]} intensity={0.3} />
          <spotLight position={[0, 5, 0]} intensity={0.5} angle={0.5} penumbra={1} />
          
          <ProductModel productType={productType} color={color} />
          
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={5}
            blur={2}
            far={4}
          />
          
          <Environment preset="studio" />
          
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={8}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
      
      {/* Controls hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full">
        <p className="text-xs text-muted-foreground">
          Drag to rotate • Scroll to zoom • Shift+drag to pan
        </p>
      </div>
    </div>
  );
}
