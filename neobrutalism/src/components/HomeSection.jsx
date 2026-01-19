import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, ArrowRight } from 'lucide-react';

export default function HomeSection({ onNavigate }) {
  return (
    <section className="min-h-full flex items-center justify-center p-4 sm:p-6 md:p-12">
      <div className="max-w-3xl w-full">
        {/* Terminal-style greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#fef3c7] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-black"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-black"></div>
            <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-black"></div>
            <span className="ml-2 text-xs font-mono text-gray-600">terminal</span>
          </div>
          <div className="font-mono text-gray-800">
            <span className="text-purple-600">$ </span>
            <span className="text-green-600">whoami</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="block mt-2 text-lg"
            >
              → Fullstack Developer
            </motion.span>
          </div>
        </motion.div>

        {/* Main Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-purple-500" />
            <span className="text-purple-500 font-mono text-sm bg-purple-100 px-3 py-1 border-2 border-black">
              Hello, World!
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            I'm{' '}
            <span className="bg-purple-400 text-white px-3 sm:px-4 py-1 border-3 sm:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
              Ollynth
            </span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-8 font-medium leading-relaxed">
            A passionate <span className="bg-pink-200  text-gray-800 px-2 border-2 border-black">Full-Stack Developer</span> crafting 
            digital experiences with clean code and creative solutions.
          </p>

          {/* Domain Tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {['Web Development', 'Android App Development'].map((domain, i) => (
              <motion.span
                key={domain}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className={`px-4 py-2 font-mono text-sm border-3  text-gray-700 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                  ['bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-pink-200'][i]
                }`}
              >
                {domain}
              </motion.span>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02, x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-2 sm:gap-3 bg-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold border-3 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}