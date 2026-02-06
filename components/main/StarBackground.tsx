"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() => {
    // Manual sphere generation to avoid NaN values from maath library
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const radius = 1.2;
    
    for (let i = 0; i < count; i++) {
      // Generate random spherical coordinates
      const theta = Math.random() * Math.PI * 2; // 0 to 2π
      const phi = Math.acos(2 * Math.random() - 1); // 0 to π
      
      // Convert to Cartesian coordinates
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      // Ensure all values are valid numbers (not NaN or Infinity)
      positions[i * 3] = isFinite(x) ? x : 0;
      positions[i * 3 + 1] = isFinite(y) ? y : 0;
      positions[i * 3 + 2] = isFinite(z) ? z : 0;
    }
    
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta/10;
      ref.current.rotation.y -= delta/15;
    }
  })


  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
            <PointMaterial
                transparent
                color="#fff"
                size={0.002}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    </group>
  )
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;
