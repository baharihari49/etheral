// "use client";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef, useEffect, useState } from "react";
// import { Text } from "@react-three/drei";
// import * as THREE from "three";

// const BoxWithText = () => {
//     const boxRef = useRef<THREE.Mesh>(null);
//     const [scrollY, setScrollY] = useState(0);

//     // Fungsi untuk menangani scroll
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollY(window.scrollY * 0.005); // Menyesuaikan kecepatan turun
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     useFrame(() => {
//         if (boxRef.current) {
//             boxRef.current.position.y = -scrollY; // Menggerakkan kotak ke bawah saat scroll
//         }
//     });

//     return (
//         <mesh ref={boxRef} position={[0, 0, 0]}>
//             <planeGeometry args={[2, 2]} />
//             <meshBasicMaterial color="#00ff00" />
//             <Text position={[0, 0, 0.01]} fontSize={0.5} color="black" anchorX="center" anchorY="middle">
//                 Ethereal
//             </Text>
//         </mesh>
//     );
// };

// const ScrollingBox = () => {
//     return (
//         <Canvas style={{ width: "100vw", height: "100vh", background: "black" }}>
//             <BoxWithText />
//         </Canvas>
//     );
// };

// export default ScrollingBox;
