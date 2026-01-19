import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import GrowthGuard from '@/assets/GG-dashboard.png';
import Corewallet from '@/assets/Corewallet-dashboard.png';
import Pomodoro from '@/assets/Pomodoro-dashboard.png';
import campusDB from '@/assets/campus_db.png';

const projects = [
  {
    name: 'GrowthGuard',
    description: 'IoT plant monitoring system with implementation of soil moisture sensor and DHT11.',
    image: GrowthGuard,
    tech: ['C++', 'React', 'Node.js', 'Influx Cloud'],
    github: 'https://github.com/ollynth/GrowthGuard',
    live: 'https://example.com'
  },
  {
    name: 'CoreWallet',
    description: 'An Android based digital wallet application that allows user to store and manage their money digitally.',
    image: Corewallet,
    tech: ['Kotlin', 'JavaScript', 'NodeJS'],
    github: 'https://github.com/rafaeljoyhadi/CoreWallet',
    live: null
  },
  {
    name: 'CampusIDN',
    description: 'A Hyperledger Indy blockchain based web application that allows organization and student to collaborates and manage their digital identity and credentials.',
    image: campusDB,
    tech: ['Python', 'FAST API', 'ReactTS', 'TailwindCSS', 'Hyperledger Indy', 'Hyperledger Aries'],
    github: null,
    live: 'https://example.com'
  },
  {
    name: 'Hooma',
    description: 'Furniture e-commerce website with a focus on modern and minimalist designs.',
    image: '',
    tech: ['ReactJS', 'MongoDB', 'REST API', 'JavaScript'],
    github: 'https://github.com/ollynth',
    live: 'https://example.com'
  },
  {
    name: 'Pomodoro Timer',
    description: 'Desktop app built with ElectronJS for managing work and break intervals using the Pomodoro technique.',
    image: Pomodoro,
    tech: ['ElectronJS'],
    github: 'https://github.com/ollynth/pomodoro-timer',
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
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
            href={import.meta.env.VITE_GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-50 text-white px-6 py-3 font-bold border-4 border-black shadow-[6px_6px_0px_0px_rgba(168,85,247,1)] hover:shadow-[2px_2px_0px_0px_rgba(168,85,247,1)] transition-all"
          >
            View More on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}