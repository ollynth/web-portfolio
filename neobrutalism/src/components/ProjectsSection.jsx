import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    name: 'CloudSync Pro',
    description: 'A real-time file synchronization platform with end-to-end encryption. Built for teams who need secure, fast file sharing across devices.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    tech: ['React', 'Node.js', 'AWS S3', 'WebSocket'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    name: 'DevFlow',
    description: 'An AI-powered code review tool that catches bugs and suggests improvements before they reach production.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    tech: ['Python', 'FastAPI', 'OpenAI', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    name: 'PixelPerfect',
    description: 'A design-to-code converter that transforms Figma designs into clean, responsive React components automatically.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    tech: ['TypeScript', 'Figma API', 'React', 'TailwindCSS'],
    github: 'https://github.com',
    live: null
  },
  {
    name: 'MetricsDash',
    description: 'A beautiful analytics dashboard for SaaS products. Track user engagement, revenue, and growth metrics in real-time.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tech: ['Next.js', 'D3.js', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    name: 'TaskForge',
    description: 'A minimalist project management tool designed for indie hackers and small teams who hate complexity.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop',
    tech: ['Vue.js', 'Supabase', 'TailwindCSS'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    name: 'EcoTracker',
    description: 'Mobile app that gamifies sustainable living. Track your carbon footprint and compete with friends to be more eco-friendly.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
    tech: ['React Native', 'Firebase', 'Node.js'],
    github: 'https://github.com',
    live: null
  }
];

export default function ProjectsSection() {
  return (
    <section className="min-h-full p-4 sm:p-6 md:p-12 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-pink-400 text-white px-4 py-2 font-mono text-sm border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
            <span className="text-yellow-300">{'<'}</span> projects.jsx <span className="text-yellow-300">{'/>'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Featured <span className="bg-pink-200 px-3 border-2 border-black text-gray-800">Projects</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl">
            A collection of things I've built. Each project taught me something new.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/ollynth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1e1e1e] text-white px-6 py-3 font-bold border-4 border-black shadow-[6px_6px_0px_0px_rgba(168,85,247,1)] hover:shadow-[2px_2px_0px_0px_rgba(168,85,247,1)] transition-all"
          >
            View More on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}