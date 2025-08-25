import { motion } from "framer-motion";
import { FaPython, FaReact, FaNodeJs, FaBrain } from "react-icons/fa";
import { SiOpenai, SiPytorch, SiTensorflow, SiCplusplus } from "react-icons/si";

export default function FloatingCube() {
  const cubeIcons = [
    { icon: <SiOpenai className="text-green-400" />, face: "front" },
    { icon: <SiPytorch className="text-red-500" />, face: "back" },
    { icon: <FaPython className="text-blue-400" />, face: "right" },
    { icon: <SiCplusplus className="text-blue-500" />, face: "left" },
    { icon: <FaReact className="text-cyan-400" />, face: "top" },
    { icon: <SiTensorflow className="text-orange-500" />, face: "bottom" },
  ];

  return (
    <div className="fixed bottom-10 right-10 z-50 hidden md:block">
      <motion.div
        className="relative w-20 h-20 perspective-1000"
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, 360] 
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 }
        }}
      >
        {/* Cube Container */}
        <div className="relative w-full h-full transform-style-preserve-3d">
          {/* Front Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#9d4edd]/80 to-purple-700/80 border border-purple-500/50 flex items-center justify-center text-2xl backdrop-blur-sm rounded-lg transform translateZ-10">
            <SiOpenai className="text-green-400" />
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700/80 to-[#9d4edd]/80 border border-purple-500/50 flex items-center justify-center text-2xl backdrop-blur-sm rounded-lg transform rotateY-180 translateZ-10">
            <SiPytorch className="text-red-500" />
          </div>
          
          {/* Right Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 border border-purple-500/50 flex items-center justify-center text-2xl backdrop-blur-sm rounded-lg transform rotateY-90 translateZ-10">
            <FaPython className="text-blue-400" />
          </div>
          
          {/* Left Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-blue-600/80 border border-purple-500/50 flex items-center justify-center text-2xl backdrop-blur-sm rounded-lg transform rotateY-(-90) translateZ-10">
            <SiCplusplus className="text-blue-500" />
          </div>
          
          {/* Top Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/80 to-blue-500/80 border border-purple-500/50 flex items-center justify-center text-2xl backdrop-blur-sm rounded-lg transform rotateX-90 translateZ-10">
            <FaReact className="text-cyan-400" />
          </div>
          
          {/* Bottom Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-red-500/80 border border-purple-500/50 flex items-center justify-center text-2xl backdrop-blur-sm rounded-lg transform rotateX-(-90) translateZ-10">
            <SiTensorflow className="text-orange-500" />
          </div>
        </div>
      </motion.div>
      
      {/* Floating Particles around the cube */}
      <motion.div
        className="absolute -inset-4 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#9d4edd] rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* CSS for 3D transforms - add to global CSS or component styles */
const styles = `
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

.translateZ-10 {
  transform: translateZ(40px);
}

.rotateY-180 {
  transform: rotateY(180deg) translateZ(40px);
}

.rotateY-90 {
  transform: rotateY(90deg) translateZ(40px);
}

.rotateY-\\(-90\\) {
  transform: rotateY(-90deg) translateZ(40px);
}

.rotateX-90 {
  transform: rotateX(90deg) translateZ(40px);
}

.rotateX-\\(-90\\) {
  transform: rotateX(-90deg) translateZ(40px);
}
`;