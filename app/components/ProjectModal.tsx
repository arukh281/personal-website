'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        tech: string[];
        color: string;
        details?: {
            problem: string;
            solution: string;
            features: string[];
            challenges: string[];
            githubUrl?: string;
            liveUrl?: string;
            certificateUrl?: string;
            notionUrl?: string;
        };
    };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-[60%] min-w-[320px] max-w-4xl bg-dark-light rounded-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header with gradient bar */}
                        <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

                        <div className="p-6 max-h-[80vh] overflow-y-auto relative z-[101]">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <FiX size={24} />
                            </button>

                            {/* Project title */}
                            <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

                            {/* Project description */}
                            <p className="text-gray-300 mb-6">{project.description}</p>

                            {/* Project details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-primary">Problem</h3>
                                    <p className="text-gray-400">{project.details?.problem}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-primary">Solution</h3>
                                    <p className="text-gray-400">{project.details?.solution}</p>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2 text-primary">Key Features</h3>
                                <ul className="list-disc list-inside text-gray-400">
                                    {project.details?.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Challenges */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2 text-primary">Challenges & Learnings</h3>
                                <ul className="list-disc list-inside text-gray-400">
                                    {project.details?.challenges.map((challenge, index) => (
                                        <li key={index}>{challenge}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech stack */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2 text-primary">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-dark rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap gap-4">
                                {project.details?.githubUrl && (
                                    <a
                                        href={project.details.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-dark rounded-full hover-glow"
                                    >
                                        <FiGithub />
                                        <span>View Code</span>
                                    </a>
                                )}
                                {project.details?.liveUrl && (
                                    <a
                                        href={project.details.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-primary rounded-full hover-glow"
                                    >
                                        <FiExternalLink />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                                {project.details?.certificateUrl && (
                                    <a
                                        href={project.details.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-dark rounded-full hover-glow"
                                    >
                                        <FiExternalLink />
                                        <span>View Certificate</span>
                                    </a>
                                )}
                                {project.details?.notionUrl && (
                                    <a
                                        href={project.details.notionUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-dark rounded-full hover-glow"
                                    >
                                        <FiExternalLink />
                                        <span>View on Notion</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 