import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import './Hero.css';

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={1.5}>
      <MeshDistortMaterial
        color="#64c8ff"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-3d">
        <div className="hero-image-wrapper">
          <img src="/profile.jpg" alt="Subashini M" className="hero-image" />
        </div>
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">Hi, I'm Subashini M</h1>
        <p className="hero-subtitle">I'm a relentless pursuer of knowledge.</p>
        <p className="hero-description">Building sustainable and user-centric products that make a positive impact on society.</p>
        
        <button className="hero-button">Let's Get Started</button>
      </motion.div>
    </section>
  );
};

export default Hero;
