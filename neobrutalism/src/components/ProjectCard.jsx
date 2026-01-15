import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const colors = ['bg-pink-200', 'bg-blue-200', 'bg-yellow-200', 'bg-green-200', 'bg-purple-200'];
  const bgColor = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -4 }}
      className={`${bgColor} border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden group`}
    >
      {/* Image */}
      <div className="relative h-48 border-b-4 border-black overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 text-gray-800 bg-gray-200 border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <Github className="w-5 h-5 text-gray-800" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-purple-400 font text-white border-3 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-black text-gray-800">{project.name}</h3>
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 text-gray-800 px-2 py-1 text-xs font-mono border-2 border-black"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}