import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

const github = import.meta.env.VITE_GITHUB_LINK;
const linkedin = import.meta.env.VITE_LINKEDIN_LINK;
const email = import.meta.env.VITE_EMAIL;

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: Github, 
    url: github, 
    color: 'bg-gray-800 text-white',
    hoverBg: 'hover:bg-gray-700'
  },
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    url: linkedin, 
    color: 'bg-blue-600 text-white',
    hoverBg: 'hover:bg-blue-500'
  },
  { 
    name: 'Email', 
    icon: Mail, 
    url: `mailto:${email}`, 
    color: 'bg-purple-500 text-white',
    hoverBg: 'hover:bg-purple-400'
  },
];

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function ContactSection() {
  const [formData, setFormData] = useState({sender_name: '', sender_email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const templateParams = {
    name: formData.sender_name,
    email: formData.sender_email, // or reply_to if that’s what your template uses
    message: formData.message,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.sender_email || !formData.message) return;
    setIsLoading(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) =>{
        console.log(formData);
        console.log('SUCCESSFULLY SENT MESSAGE!', response.status, response.text);
        setIsSent(true);
        setFormData({ sender_name: '', sender_email: '', message: '' });
      })
      .catch((error) => {
        console.log('FAILED SENDING MESSAGE...', error);
      })
      
    setIsSent(false);
    setIsLoading(false);
  };

  return (
    <section className="min-h-full p-4 sm:p-6 md:p-12 overflow-y-auto flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-400 text-white px-4 py-2 font-mono text-sm border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
            <span className="text-yellow-300">@</span> contact.jsx
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Let's <span className="bg-green-200 px-3 border-2 border-black font-mono text-black">Connect</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl">
            Got a project idea? Want to collaborate? Or just want to say hi? Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-yellow-100 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-black">
              <Send className="w-5 h-5" />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2 text-black">Your Name</label>
                <Input
                  type="text"
                  placeholder="Jhon Doe"
                  value={formData.sender_name}
                  onChange={(e) => setFormData({ ...formData, sender_name: e.target.value })}
                  className="text-gray-800 border-3 border-black rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-black">Your Email</label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.sender_email}
                  onChange={(e) => setFormData({ ...formData, sender_email: e.target.value })}
                  className="text-gray-800 border-3 border-black rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all bg-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2 text-black">Message</label>
                <Textarea
                  placeholder="Tell me about your project or just say hello..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="text-gray-800 border-3 border-black rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all bg-white resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading || isSent}
                className={`w-full py-6 text-lg font-bold text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all rounded-none ${
                  isSent 
                    ? 'bg-green-500 hover:bg-green-500' 
                    : 'bg-purple-600 hover:bg-purple-600'
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : isSent ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Social Cards */}
            <div className="bg-blue-100 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <h3 className="text-xl font-bold mb-4 text-black">Find Me Online</h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-3 p-4 ${social.color} border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                      <span className="font-bold text-white">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-pink-100 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <h3 className="text-xl font-bold mb-2 text-black">📍 Based in</h3>
              <p className="text-2xl font-black text-stone-900">Indonesia</p>
              <p className="text-gray-600 mt-2">
                Open to remote opportunities worldwide
              </p>
            </div>

            {/* Availability */}
            <div className="bg-green-200 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-black"></span>
                <span className="font-bold text-lg text-black">Currently Available</span>
              </div>
              <p className="text-gray-700 mt-2">
                Looking for exciting full-time or freelance opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}