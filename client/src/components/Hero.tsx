import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaRobot, FaBrain, FaCode } from "react-icons/fa";
import { SiOpenai, SiPytorch, SiTensorflow } from "react-icons/si";
import { scrollToSection } from "@/lib/utils";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const floatingIcons = [
    { icon: <SiOpenai className="text-green-400" />, delay: 0, x: "10%", y: "20%" },
    { icon: <SiPytorch className="text-red-500" />, delay: 0.5, x: "85%", y: "30%" },
    { icon: <SiTensorflow className="text-orange-500" />, delay: 1, x: "15%", y: "70%" },
    { icon: <FaRobot className="text-blue-400" />, delay: 1.5, x: "80%", y: "75%" },
    { icon: <FaBrain className="text-purple-400" />, delay: 2, x: "90%", y: "15%" },
    { icon: <FaCode className="text-yellow-400" />, delay: 2.5, x: "5%", y: "50%" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-0"></div>
      <ParticleBackground />
      
      {/* Floating AI Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20 z-5"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, y: 20, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2], 
            y: [-10, 10, -10],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            opacity: { repeat: Infinity, duration: 3, delay: item.delay },
            y: { repeat: Infinity, duration: 4, delay: item.delay },
            scale: { repeat: Infinity, duration: 2, delay: item.delay }
          }}
        >
          {item.icon}
        </motion.div>
      ))}
      
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#9d4edd] font-medium mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
              Isaias Perez
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300 font-inter">
              AI Engineer & Machine Learning Researcher
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl text-gray-300">
              Building and deploying end-to-end AI pipelines on Azure AI Foundry to power fan-engagement, security automation, and AI prototypes. Currently at Kroenke Sports & Entertainment while conducting ML research at CU Boulder.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button
                className="bg-[#9d4edd] hover:bg-[#9d4edd]/80 text-white"
                size="lg"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-[#9d4edd] text-white hover:bg-[#9d4edd]/20"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex mt-8 space-x-6 justify-center md:justify-start">
              <a
                href="https://linkedin.com/in/isaias-perez21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#9d4edd] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/IP-04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#9d4edd] transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:isaiasxl21@gmail.com"
                className="text-white hover:text-[#9d4edd] transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#9d4edd]/30 to-black border-4 border-[#9d4edd] shadow-xl shadow-purple-500/20 flex items-center justify-center overflow-hidden relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#9d4edd]/20 to-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <img 
                src="/assets/Senior Picture Isaias Perez.JPG" 
                alt="Isaias Perez" 
                className="w-full h-full object-cover z-10 relative" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
