'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

export default function Navigation(): React.ReactElement {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop - windowHeight / 2 &&
                        scrollPosition < offsetTop + offsetHeight - windowHeight / 2
                    ) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4">
            <div className="max-w-[90rem] mx-auto flex justify-center gap-2 sm:gap-4 md:gap-8">
                {sections.map((section) => (
                    <motion.button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 ${
                            activeSection === section.id
                                ? 'bg-primary text-white'
                                : 'text-gray-400 hover:text-white'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {section.label}
                    </motion.button>
                ))}
            </div>
        </nav>
    );
} 