import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaLayerGroup, 
  FaTools, 
  FaBook, 
  FaPython, 
  FaReact, 
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaMicrochip,
  FaChartLine,
  FaBrain
} from "react-icons/fa";
import { 
  FaC
} from "react-icons/fa6";
import { 
  SiOpenai, 
  SiHuggingface, 
  SiTensorflow, 
  SiPytorch,
  SiTypescript,
  SiReact,
  SiExpress,
  SiFirebase,
  SiSupabase,
  SiStripe,
  SiGooglecolab,
  SiJupyter,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiScikitlearn
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Languages",
      icon: <FaCode />,
      items: [
        { name: "C/C++", icon: <FaC className="text-blue-500" /> },
        { name: "Python", icon: <FaPython className="text-blue-600" /> },
        { name: "JavaScript", icon: <FaCode className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
        { name: "SQL", icon: <FaDatabase className="text-gray-300" /> },
        { name: "HTML/CSS", icon: <FaCode className="text-orange-500" /> },
      ],
    },
    {
      category: "Frameworks",
      icon: <FaLayerGroup />,
      items: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "React Native", icon: <SiReact className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "Flask", icon: <FaPython className="text-gray-300" /> },
        { name: "FastAPI", icon: <FaPython className="text-green-400" /> },
        { name: "Bootstrap", icon: <FaCode className="text-purple-600" /> },
        { name: "Expo", icon: <FaCode className="text-black" /> },
      ],
    },
    {
      category: "Cloud & MLOps",
      icon: <FaTools />,
      items: [
        { name: "Azure AI Foundry", icon: <FaCode className="text-blue-600" /> },
        { name: "Databricks", icon: <FaDatabase className="text-orange-600" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Google Colab", icon: <SiGooglecolab className="text-yellow-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Jupyter", icon: <SiJupyter className="text-orange-500" /> },
        { name: "PowerShell", icon: <FaCode className="text-blue-400" /> },
      ],
    },
    {
      category: "ML/AI Libraries",
      icon: <FaMicrochip />,
      items: [
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
        { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
        { name: "OpenCV", icon: <SiOpencv className="text-blue-600" /> },
        { name: "ONNX", icon: <FaCode className="text-white" /> },
        { name: "pandas", icon: <SiPandas className="text-blue-600" /> },
        { name: "NumPy", icon: <SiNumpy className="text-blue-800" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-600" /> },
        { name: "XGBoost", icon: <FaChartLine className="text-green-500" /> },
        { name: "LSTM", icon: <FaMicrochip className="text-purple-500" /> },
      ],
    },
    {
      category: "APIs & Services",
      icon: <FaLayerGroup />,
      items: [
        { name: "OpenAI", icon: <SiOpenai className="text-green-400" /> },
        { name: "Gemini", icon: <FaCode className="text-blue-500" /> },
        { name: "Stripe", icon: <SiStripe className="text-purple-500" /> },
        { name: "Canvas LMS", icon: <FaCode className="text-orange-600" /> },
        { name: "Hugging Face", icon: <SiHuggingface className="text-yellow-500" /> },
      ],
    },
    {
      category: "Quant Tools",
      icon: <FaChartLine />,
      items: [
        { name: "pybind11", icon: <FaCode className="text-blue-400" /> },
        { name: "Zarr", icon: <FaDatabase className="text-green-400" /> },
        { name: "LOBSTER Data", icon: <FaChartLine className="text-red-500" /> },
        { name: "Eigen", icon: <FaCode className="text-purple-400" /> },
        { name: "SQLite", icon: <FaDatabase className="text-blue-300" /> },
      ],
    },
  ];

  const mlTools = [
    { name: "Hugging Face", icon: <FaCode className="text-yellow-500 text-4xl" /> },
    { name: "OpenAI", icon: <FaCode className="text-green-400 text-4xl" /> },
    { name: "TensorFlow", icon: <FaCode className="text-orange-500 text-4xl" /> },
    { name: "PyTorch", icon: <FaCode className="text-red-500 text-4xl" /> },
    { name: "C++", icon: <FaC className="text-blue-500 text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-blue-600 text-4xl" /> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  const floatVariants = {
    initial: { y: 0, opacity: 0, scale: 0.8 },
    animate: (i: number) => ({
      y: [-10, 10, -10],
      opacity: 1,
      scale: 1,
      transition: {
        y: {
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay: i * 0.2,
        },
        opacity: {
          duration: 0.8
        },
        scale: {
          duration: 0.8
        }
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-black scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-white text-center font-inter">Technical Skills</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-300">
            A comprehensive set of skills I've developed through academic studies, research work, and personal projects.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Card className="shadow-lg shadow-purple-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1 bg-black border border-purple-900/50">
                <CardContent className="p-6">
                  <div className="text-[#9d4edd] text-2xl mb-4 flex justify-center">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center font-inter text-white">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-[#9d4edd]/10 text-[#9d4edd] px-3 py-1 rounded-full text-sm flex items-center gap-1.5"
                      >
                        {item.icon && <span className="text-lg">{item.icon}</span>}
                        {item.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 p-6 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-10 text-center font-inter text-white">AI & Development Technologies</h3>
          
          <div className="relative h-72 mx-auto max-w-4xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-600/5 to-purple-500/10 rounded-lg"></div>
            
            {mlTools.map((tool, index) => (
              <motion.div
                key={index}
                className="absolute transform"
                custom={index}
                variants={floatVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                style={{
                  left: `${15 + (index * 15)}%`,
                  top: `${20 + (index % 3) * 20}%`,
                }}
              >
                <div className="bg-black/80 backdrop-blur-lg p-4 rounded-full shadow-lg shadow-purple-500/20 flex flex-col items-center">
                  <div className="mb-2">{tool.icon}</div>
                  <span className="text-gray-200 text-sm font-medium">{tool.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
