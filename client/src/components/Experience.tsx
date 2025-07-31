import { motion } from "framer-motion";
import { FaMicroscope, FaLaptopCode, FaUsers, FaRobot, FaBrain } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      title: "AI Specialist Intern",
      company: "Kroenke Sports & Entertainment",
      period: "July 2025 – Present",
      icon: <SiOpenai />,
      logo: "/assets/kse_logo.jpg",
      responsibilities: [
        "Building and deploying end-to-end AI pipelines on Azure AI Foundry to power fan-engagement, security policy automation, and cross-team AI prototypes",
        "Deploy, govern and accelerate inference of LLMs and other models on Azure AI Foundry with scalable vector embeddings for recommendation features",
        "Research and implement prompt-engineering and fine-tuning workflows for internal AI copilots and live FAQ/chatbot systems",
        "Audit and optimize Panorama network-security logs with AI-driven policy analysis using Databricks + Copilot, reducing policy-review time through automated summaries",
        "Prototype generative-AI features for fan engagement, in-stadium experiences and ticket upsell recommendation engines",
      ],
      tags: ["Azure AI Foundry", "LLM Deployment", "Databricks", "Prompt Engineering", "MLOps", "PyTorch", "Vector Embeddings"],
      isRemote: false,
    },
    {
      title: "AI Engineer Intern",
      company: "Polylabs",
      period: "June 2025 – July 2025",
      icon: <FaRobot />,
      logo: null,
      responsibilities: [
        "Engineered intelligent systems to automate educational content delivery, boosting AI tool efficiency by 35% using LLMs and multimodal architectures",
        "Designed and deployed pipelines for automated image-caption generation using OpenAI APIs, Hugging Face models, and n8n workflows",
        "Built agent-based task frameworks that reduced manual content publishing time by 40%",
        "Prototyped scalable backend services enabling autonomous scheduling, performance analytics, and user engagement optimization",
      ],
      tags: ["LLMs", "Multimodal AI", "OpenAI APIs", "n8n", "Agent Frameworks"],
      isRemote: true,
    },
    {
      title: "Undergraduate Machine Learning Research Assistant",
      company: "University of Colorado Boulder",
      period: "March 2025 – Present",
      icon: <FaBrain />,
      logo: "/assets/CU-Boulder-Buffalo-logo.avif",
      responsibilities: [
        "Conducting research on LLM interpretability and hallucination reduction under PhD mentor Amit Kiran Rege",
        "Designed evaluation tasks to probe model reasoning depth, token attribution, and consistency across prompts",
        "Implemented diagnostic tools to visualize token contributions using transformers and attention analysis",
        "Utilized Hugging Face and OpenAI libraries for model fine-tuning, inference, and behavior auditing",
      ],
      tags: ["LLM Interpretability", "Transformers", "Attention Analysis", "Model Fine-tuning"],
    },
    {
      title: "Software Engineer Intern",
      company: "Ryno Industries LLC",
      period: "April 2023 – August 2023",
      icon: <FaLaptopCode />,
      logo: "/assets/RynoIndustriesLogo_PNG.png",
      responsibilities: [
        "Boosted equipment ordering system scalability by 27% through modular API development and SQL schema redesign",
        "Refactored backend data pipelines and indexing strategies to reduce equipment spec retrieval latency by 12.3%",
        "Redesigned internal content delivery interface, improving usability and increasing engagement from the sales team by 18%",
      ],
      tags: ["API Development", "SQL Optimization", "Backend Architecture", "Performance Tuning"],
    },
    {
      title: "Member, Society of Professional Hispanic Engineers",
      company: "University of Colorado Boulder",
      period: "September 2023 – Present",
      icon: <FaUsers />,
      logo: "/assets/SHPELeadingHispanicsinSTEM_Sticker1_530x@2x.webp",
      responsibilities: [
        "Enhanced group interactions and proposed new activities to foster engagement",
        "Promoted cultural diversity within the group",
        "Participated in community outreach programs to encourage STEM education",
        "Collaborated with peers on engineering challenges and projects",
      ],
      tags: ["Leadership", "Cultural Diversity", "STEM Education"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black text-white scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-black to-black z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-white text-center font-inter">Experience</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-300">
            My professional journey in research and industry roles.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-[#9d4edd] pl-8 ml-4 space-y-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -left-12 mt-2 w-6 h-6 rounded-full bg-[#9d4edd] flex items-center justify-center">
                <span className="text-white text-xs">{experience.icon}</span>
              </div>
              
              <div className="bg-gradient-to-br from-black via-purple-900/5 to-black border border-purple-900/50 rounded-lg shadow-md shadow-purple-500/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:border-purple-700/70 group">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div className="flex items-start">
                    {experience.logo ? (
                      <div className="mr-4 flex-shrink-0">
                        <img 
                          src={experience.logo} 
                          alt={experience.company} 
                          className="w-12 h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    ) : (
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#9d4edd] to-purple-700 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                          {experience.icon}
                        </div>
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-white font-inter group-hover:text-purple-300 transition-colors duration-300">{experience.title}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-gray-400">{experience.company}</p>
                        {experience.isRemote && (
                          <Badge className="bg-green-900/30 text-green-400 border-green-700/50 text-xs">
                            Remote
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0">{experience.period}</p>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-[#9d4edd]/10 text-[#9d4edd] hover:bg-[#9d4edd]/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
