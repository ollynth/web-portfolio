import React from 'react';
import { motion } from 'framer-motion';
import notionLogo from '@/assets/Notion-Logo.png';

const skillCategories = [
  {
    title: 'Languages',
    color: 'bg-blue-200',
    skills: [
      { name: 'JavaScript', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="JavaScript" title="JavaScript" width="36" height="36" />},
      { name: 'Python', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" alt="Python" title="Python" width="36" height="36" /> },
      { name: 'Go', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg" alt="Go" title="Go" width="36" height="36" /> },
      { name: 'Kotllin', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kotlin-colored.svg" alt="Kotlin" title="Kotlin" width="36" height="36" /> },
      { name: 'Java', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" alt="Java" title="Java" width="36" height="36" /> },
    ]
  },
  {
    title: 'Frameworks',
    color: 'bg-pink-200',
    skills: [
      { name: 'React', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" alt="React" title="React" width="36" height="36" /> },
      { name: 'Node.js', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" alt="NodeJS" title="NodeJS" width="36" height="36" /> },
      { name: 'Express', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" alt="Express" title="Express" width="36" height="36" />},
      { name: 'FastAPI', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/fastapi-colored.svg" alt="FastAPI" title="FastAPI" width="36" height="36" />},
    ]
  },
  {
    title: 'Tools & Platforms',
    color: 'bg-green-200',
    skills: [
      { name: 'Git', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" alt="Git" title="Git" width="36" height="36" /> },
      { name: 'Docker', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" alt="Docker" title="Docker" width="36" height="36" /> },
      { name: 'VS Code', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg" alt="VS Code" title="VS Code" width="36" height="36" /> },
      { name: 'MySQL', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" alt="MySQL" title="MySQL" width="36" height="36" /> },
      { name: 'MongoDB', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" alt="MongoDB" title="MongoDB" width="36" height="36" /> },
    ]
  },
  {
    title: 'Design & Other',
    color: 'bg-yellow-200',
    skills: [
      { name: 'Figma', icon: <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" alt="Figma" title="Figma" width="36" height="36" /> },
      { name: 'Notion', icon: <img src={notionLogo} alt="Notion" title="Notion" width="74" height="74" /> },
      
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function SkillsSection() {
  return (
    <section className="min-h-full p-4 sm:p-6 md:p-12 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-purple-400 text-white px-4 py-2 font-mono text-sm border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
            <span className="text-yellow-300">//</span> skills.jsx
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white ">
            Tech Stack & <span className="bg-blue-200 px-3 border-2 text-gray-800 border-black">Skills</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={item}
              className={`${category.color} border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6`}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-black"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="bg-white border-3 border-black p-3 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
                  >
                    <div className="text-2xl mb-1 flex justify-center ">{skill.icon}</div>
                    <div className="text-xs font-mono font-bold truncate">{skill.name}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Code Block Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 bg-[#1e1e1e] border-4 border-black shadow-[8px_8px_0px_0px_rgba(168,85,247,1)] p-6 font-mono text-sm"
        >
          <div className="text-gray-500 mb-2">// Always learning...</div>
          <div>
            <span className="text-purple-400">const</span>{' '}
            <span className="text-blue-300">developer</span>{' '}
            <span className="text-white">=</span>{' '}
            <span className="text-yellow-300">{'{'}</span>
          </div>
          <div className="pl-4">
            <span className="text-green-300">passion</span>
            <span className="text-white">:</span>{' '}
            <span className="text-orange-300">"Building cool stuff"</span>
            <span className="text-white">,</span>
          </div>
          <div className="pl-4">
            <span className="text-green-300">learning</span>
            <span className="text-white">:</span>{' '}
            <span className="text-purple-300">true</span>
            <span className="text-white">,</span>
          </div>
          <div className="pl-4">
            <span className="text-green-300">matcha</span>
            <span className="text-white">:</span>{' '}
            <span className="text-orange-300">"∞"</span>
          </div>
          <div><span className="text-yellow-300">{'}'}</span><span className="text-white">;</span></div>
        </motion.div>
      </div>
    </section>
  );
}