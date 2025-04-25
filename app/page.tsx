'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiBook, FiAward, FiExternalLink } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import ProjectModal from './components/ProjectModal';

const projects = [
    {
        title: 'CampusQuery – University FAQ Chatbot',
        description: 'An intelligent chatbot system to handle university-related queries using hybrid NLP techniques with confidence-based responses.',
        tech: ['Python', 'Flask', 'SymSpell', 'TF-IDF', 'Fuzzy Matching', 'Next.js', 'AWS', 'MongoDB'],
        color: 'from-blue-500 to-pink-600',
        details: {
            problem: 'University students and visitors often struggle to get timely and accurate answers to their queries due to information being scattered across multiple channels or portals.',
            solution: 'CampusQuery provides a centralized chatbot interface that delivers precise, confidence-scored answers using spelling correction, keyword matching, and fuzzy logic, ensuring high accuracy and better user experience.',
            features: [
                'Spelling correction using SymSpell for misspelled queries',
                'Confidence-based response handling (high, medium, low)',
                'TF-IDF vector matching and fuzzy logic integration',
                'Auto-forwarding of unclear questions to faculty',
                'Responsive Next.js frontend connected to Flask backend'
            ],
            challenges: [
                'Handling noisy user input and ambiguous questions',
                'Maintaining performance with real-time corrections and matching',
                'Integrating and syncing with a live database of FAQs',
                'Providing scalable, low-latency backend responses for frontend'
            ],
            githubUrl: 'https://github.com/arukh281/sdc-chatbot',
            liveUrl: 'https://sdcmuj.com/'
        }
    },
    {
        title: 'Icarus – Your Productivity Companion',
        description: 'A browser extension to enhance productivity and accessibility for neurodivergent students by customizing web content.',
        tech: ['TypeScript', 'Chrome Extension API', 'Google Generative AI', 'Bootstrap'],
        color: 'from-primary to-accent',
        details: {
            problem: 'Neurodivergent students often face challenges with online content due to overwhelming or poorly structured information.',
            solution: 'Icarus allows users to customize web content, improve readability, and enhance focus using real-time content modification and AI support.',
            features: [
                'Real-time webpage customization (fonts, colors, layout)',
                'Generative AI for summarizing and simplifying content',
                'Context menu for quick actions on selected content',
                'Popup interface for easy user interaction',
                'User settings and preferences storage for personalized experience'
            ],
            challenges: [
                'Ensuring seamless real-time content modification on various websites',
                'Integrating AI to improve content without overloading the user',
                'Creating a responsive and intuitive UI for neurodivergent users',
                'Handling cross-browser compatibility and user data storage securely'
            ],
            githubUrl: 'https://github.com/arukh281/project-icarus',
            liveUrl: ''
        }
    },
    {
        title: 'Pokémon Data Integration with Notion API',
        description: 'A project to bring Pokémon data into Notion for an organized and fun experience.',
        tech: ['JavaScript', 'Notion API', 'Pokédex API'],
        color: 'from-primary to-accent',
        details: {
            problem: 'Managing and organizing Pokémon information can be overwhelming without an efficient way to store and access it.',
            solution: 'This project integrates the Notion API and the Pokédex API to automatically upload and organize Pokémon data in Notion, making it fun and easy to manage.',
            features: [
                'Automatic data upload from Pokédex API to Notion',
                'Organized Pokémon data (type, abilities, stats, evolutions)',
                'Customizable Notion database to sort and filter Pokémon details',
                'User-friendly interface to interact with the Pokémon data in Notion'
            ],
            challenges: [
                'Working with both the Notion API and Pokédex API for seamless data flow',
                'Handling the large volume of Pokémon data and ensuring accurate upload',
                'Customizing the Notion database to allow for flexible data management',
                'Learning API integrations and handling asynchronous data requests'
            ],
            notionUrl: 'https://www.notion.so/Notion-Pok-dex-d88a55fc1aa74da1b1783351cd723eb0?pvs=4',

        }
    },
    {
        title: 'Fall Detection System for Elderly People',
        description: 'A concept for a lightweight wearable designed to anticipate falls in elderly individuals and alert caregivers in advance.',
        tech: ['MPU9250', 'MAX30102', 'ESP32', 'AWS/GCP', 'GSM Module (SIM800/SIM7600)', 'Firebase/DynamoDB', 'MQTT/HTTPS', 'Gaussian Process Regression', 'React.js', 'Next.js', 'TailwindCSS'],
        color: 'from-primary to-secondary',
        details: {
            problem: 'Elderly individuals are vulnerable to falls, and existing solutions only respond after a fall has occurred, lacking predictive capabilities.',
            solution: 'Proposed an AI-powered wearable wristband concept capable of analyzing motion and health vitals to predict and alert before falls happen.',
            features: [
                'Conceptual real-time monitoring of heart rate, SpO2, and motion',
                'Theoretical AI-based fall prediction using GPR and CNN',
                'Emergency SOS button envisioned with GSM alerting',
                'Cloud-integrated data dashboard with historical trends',
                'Emphasis on secure, encrypted data flow and storage'
            ],
            challenges: [
                'Designing for low-power operation in a continuous monitoring context',
                'Ensuring connectivity via GSM in low-infrastructure areas',
                'Filtering noisy sensor input in a resource-limited environment',
                'Developing AI models for accurate health and motion prediction',
                'Considering privacy, encryption, and regulatory compliance'
            ],
            githubUrl: '',
            liveUrl: '',
            certificateUrl: '/incubation certificate/incubation.pdf'
        }
    },
    {
        title: 'FinanceBot – WhatsApp-Based Financial Report Assistant',
        description: 'A conversational WhatsApp bot that generates financial reports, retrieves firm balances, and interacts with Google Sheets via Twilio and Flask.',
        tech: ['Python', 'Flask', 'Twilio', 'WhatsApp API', 'gspread', 'Google Sheets API', 'FPDF', 'ReportLab', 'Babel'],
        color: 'from-green-500 to-blue-600',
        details: {
            problem: 'Small businesses and accounting professionals often face delays in accessing firm financial data or generating reports, especially when working remotely or via mobile devices.',
            solution: 'FinanceBot offers a conversational interface on WhatsApp to check firm balances and generate monthly statements instantly, leveraging Google Sheets as a real-time backend and PDFs for formal reporting.',
            features: [
                'Firm name lookup and fuzzy matching for ease of access',
                'Balance retrieval directly from Google Sheets',
                'Monthly financial statement generation in PDF format',
                'Currency formatted using Indian numbering system (INR)',
                'Multi-step user interaction via Flask session handling'
            ],
            challenges: [
                'Handling ambiguous firm names with partial inputs',
                'Filtering and formatting date-specific entries for statements',
                'Generating styled PDFs dynamically with variable-length tables',
                'Managing stateful user interactions over a stateless API',
                'Ensuring low-latency message delivery via Twilio WhatsApp API'
            ],
            githubUrl: 'https://github.com/arukh281/moradabad-house',  // Replace with actual repo if needed
        }
    },
    {
        title: 'SwiftShare – Secure, No-Login File Sharing with AES-GCM & S3',
        description: 'A lightweight file-sharing platform built with FastAPI, AWS S3, and AES-GCM encryption, allowing secure, password-optional file uploads and downloads without requiring user login.',
        tech: ['Python', 'FastAPI', 'AWS S3', 'Cryptography', 'Uvicorn', 'Boto3', 'AES-GCM'],
        color: 'from-purple-600 to-indigo-700',
        details: {
            problem: 'Modern users often need to share files or messages securely without dealing with account systems or login overhead, especially for temporary or private transfers.',
            solution: 'SwiftShare enables secure, encrypted file and message sharing via a unique link, with optional password protection. All data is encrypted using AES-256-GCM before uploading to AWS S3 and automatically decrypted during download, ensuring privacy and simplicity.',
            features: [
                'Anonymous uploads and downloads – no login required',
                'AES-256-GCM encryption for strong security and data integrity',
                'Optional password protection with secure key derivation and hashing',
                'Automatic text-to-file conversion and multi-file ZIP bundling',
                'Support for expiration policies (e.g., one-time download, 1 hour, 1 day)',
                'Decryption and file streaming on the fly using FastAPI and StreamingResponse',
                'Encryption key and IV management without exposing sensitive data',
                'Link-based file sharing with optional password prompt for recipients'
            ],
            challenges: [
                'Implementing AES-GCM securely with IV and authentication tag handling',
                'Designing a system with optional passwords without user accounts',
                'Building a ZIP bundling system for files and messages with encryption',
                'Ensuring seamless file decryption and download using StreamingResponse',
                'Storing and retrieving file metadata (e.g., IV, tags, salt) alongside encrypted content',
                'Balancing file security with ease of access through a clean frontend and backend logic',
                'Managing automatic file deletion post-expiry or one-time use'
            ],
            githubUrl: 'https://github.com/arukh281/SwiftShare', // Replace with updated URL if changed
            liveUrl: 'https://swiftshare.onrender.com/'
        }
    },
];

const ongoingProjects = [
    {
        title: 'EV Charging Aggregator Platform',
        description: 'Developing a one-stop solution to aggregate existing EV chargers and provide a seamless booking, payment, and route optimization experience for users in India.',
        progress: 25,
        tech: ['Node.js', 'Python (Django/FastAPI)', 'React Native', 'PostgreSQL', 'Google Maps API'],
        color: 'from-green-500 to-blue-600',
        expectedCompletion: 'Q4 2025'
      },
      {
        title: "Cafeteria Order Management System",
        description: "Developing a solution to eliminate verbal communication in college cafeterias by automating the order management process.",
        progress: 50,
        tech: ["Mobile App Development", "SMS API", "Voice Call API", "Database Management", "User Interface Design"],
        color: "from-blue-500 to-teal-600",
        expectedCompletion: "Q4 2025"
      },
      {
        title: "Video Review and Approval Service",
        description: "Developing a cloud-based service to streamline video review and approval for content creators and editors. The service will reduce time, data usage, and storage needs, while automating feedback integration and social media uploads.",
        progress: 75,
        tech: ["Cloud Computing", "Video Streaming", "Social Media APIs", "Database Management", "Automation", "User Interface Design"],
        color: "from-purple-500 to-pink-600",
        expectedCompletion: "Q4 2025"
      },
      {
        title: "Hospital TPA Management System",
        description: "Developing a solution to streamline the Third Party Administrator (TPA) process in hospitals by automating claim management, reducing delays, and enhancing communication between hospitals, insurance providers, and patients.",
        progress: 10,
        tech: ["Mobile App Development", "Insurance API Integration", "Database Management", "Claim Automation", "User Interface Design", "Cloud Computing"],
        color: "from-purple-500 to-pink-600",
        expectedCompletion: "Q4 2025"
      }
];

const researchAndPatents = [
    {
        type: 'research',
        title: 'Secure and Efficient Data Sharing with AWS S3',
        description: 'Developing a secure and efficient data sharing system using AWS S3 for cloud storage and encryption.',
        year: '2025',
        status: 'In Research',
        authors: ['Mr. Aradhya Khandelwal', 'Dr. Sakshi Shringi', 'Prof. Lav Upadhyay'],
        icon: <FiBook className="text-2xl" />
    },
    {
        type: 'patent',
        title: 'University chat-bot with hybrid NLP techniques',
        description: 'A chatbot system that uses hybrid NLP techniques to handle university-related queries with confidence-based responses.',
        year: '2022',
        status: 'Filing',
        link: '',
        icon: <FiAward className="text-2xl" />
    },
    {
        type: 'research',
        title: 'Early detection of epileptic seizures using EEG signals',
        description: 'Developing a machine learning model to detect epileptic seizures early using EEG signals.',
        year: '2025',
        status: 'In Research',
        publication: '',
        authors: ['Mr. Aradhya Khandelwal', 'Dr. Shikha Mundra'],
        link: '',
        icon: <FiBook className="text-2xl" />
    },
    {
        type: 'research',
        title: 'Privacy-Preserving Encrypted Traffic Anomaly Detection Using Machine Learning',
        description: 'A novel approach to detecting network anomalies in encrypted traffic without inspecting payloads.',
        year: '2025',
        status: 'Pending Publication',
        authors: ['Mr. Aradhya Khandelwal', 'Prof. Lav Upadhyay'],
        icon: <FiBook className="text-2xl" />
    },
];

export default function Home(): React.ReactElement {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const roles = [
        "Aradhya",
        "Developer",
        "Drummer",
        "Photographer",
        "Traveller",
        "Chef",
        "Human?",
    ];

    useEffect(() => {
        const typingSpeed = 75;
        const deletingSpeed = 25;
        const pauseDuration = 1200;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing phase
                if (currentText === roles[currentIndex]) {
                    // Finished typing current role, pause then start deleting
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, pauseDuration);
                } else {
                    // Continue typing
                    setCurrentText(roles[currentIndex].slice(0, currentText.length + 1));
                }
            } else {
                // Deleting phase
                if (currentText === '') {
                    // Finished deleting, move to next role
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
                } else {
                    // Continue deleting
                    setCurrentText(currentText.slice(0, -1));
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentIndex]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="section bg-gradient-to-br from-dark to-dark-light relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
                        {/* Mobile layout (stacked) */}
                        <div className="flex flex-col sm:hidden items-center justify-center">
                            <div className="flex items-center justify-center">
                                <span className="gradient-text">
                                    Hey, I am
                                </span>
                            </div>
                            <div className="flex items-center justify-center mt-1">
                                {currentIndex !== 0 && (
                                    <span className="gradient-text mr-2">a</span>
                                )}
                                <motion.span
                                    className="gradient-text"
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {currentText}
                                </motion.span>
                                <span className="animate-pulse ml-1">|</span>
                            </div>
                        </div>
                        
                        {/* Desktop layout (inline) */}
                        <div className="hidden sm:flex items-center justify-center">
                            <span className="gradient-text">
                                Hey, I am
                            </span>
                            {currentIndex !== 0 && (
                                <span className="gradient-text ml-2">a</span>
                            )}
                            <motion.span
                                className="gradient-text ml-2"
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {currentText}
                            </motion.span>
                            <span className="animate-pulse ml-1">|</span>
                        </div>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-8">
                        Building the future with code and creativity
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => scrollToSection('projects')}
                            className="px-4 sm:px-6 py-2 sm:py-3 bg-primary rounded-full hover-glow text-sm sm:text-base"
                        >
                            View Projects
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => scrollToSection('research')}
                            className="px-4 sm:px-6 py-2 sm:py-3 border border-white/20 rounded-full hover-glow text-sm sm:text-base"
                        >
                            Research & Patents
                        </motion.button>
                    </div>
                </motion.div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section bg-dark-light relative z-10">
                <div ref={ref} className="container-fluid">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">
                        Featured Projects 🚀
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 auto-rows-fr">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="card cursor-pointer h-full flex flex-col"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${project.color} rounded-t-xl`} />
                                <div className="flex-1 p-4 sm:p-6">
                                    <h3 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-4">{project.title}</h3>
                                    <p className="text-gray-400 mt-2 text-sm sm:text-base">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-dark rounded-full text-xs sm:text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ongoing Projects Section */}
            <section id="ongoing" className="section bg-dark relative z-10">
                <div className="container-fluid">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">
                        Ongoing Projects 🚧
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 auto-rows-fr">
                        {ongoingProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="card h-full flex flex-col"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${project.color} rounded-t-xl`} />
                                <div className="flex-1 p-4 sm:p-6">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>
                                    <div className="mb-4">
                                        <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-1">
                                            <span>Progress</span>
                                            <span>{project.progress}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                                                style={{ width: `${project.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-dark rounded-full text-xs sm:text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-400">
                                        Expected Completion: {project.expectedCompletion}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research & Patents Section */}
            <section id="research" className="section bg-dark relative z-10">
                <div className="container-fluid">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center gradient-text">
                        Research & Patents 📚
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 auto-rows-fr">
                        {researchAndPatents.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="card h-full flex flex-col"
                            >
                                <div className="flex items-start gap-4 p-4 sm:p-6">
                                    <div className={`p-2 sm:p-3 rounded-full ${item.type === 'research' ? 'bg-secondary/20' : 'bg-accent/20'}`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
                                        <p className="text-gray-400 mt-2 text-sm sm:text-base">{item.description}</p>
                                        <div className="mt-4 space-y-2">
                                            {item.type === 'research' ? (
                                                <>
                                                    <p className="text-xs sm:text-sm text-gray-400">
                                                        <span className="text-primary">Year:</span> {item.year}
                                                    </p>
                                                    <p className="text-xs sm:text-sm text-gray-400">
                                                        <span className="text-primary">Status:</span> {item.status}
                                                    </p>
                                                    {item.publication && (
                                                        <p className="text-xs sm:text-sm text-gray-400">
                                                            <span className="text-primary">Journal:</span> {item.publication}
                                                        </p>
                                                    )}
                                                    <p className="text-xs sm:text-sm text-gray-400">
                                                        <span className="text-primary">Authors:</span> {item.authors?.join(', ')}
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    <p className="text-xs sm:text-sm text-gray-400">
                                                        <span className="text-primary">Status:</span> {item.status}
                                                    </p>
                                                    <p className="text-xs sm:text-sm text-gray-400">
                                                        <span className="text-primary">Year:</span> {item.year}
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors text-sm sm:text-base"
                                            >
                                                {item.type === 'research' ? 'Read Paper' : 'View Patent'}
                                                <FiExternalLink />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section bg-dark-light">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold mb-8 gradient-text">
                        Let's Connect! 💬
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        I'm always open to new opportunities and collaborations
                    </p>
                    <div className="flex justify-center gap-6">
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="https://github.com/arukh281"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover-glow"
                        >
                            <FiGithub />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="https://www.linkedin.com/in/aradhya-khandelwal281/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover-glow"
                        >
                            <FiLinkedin />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="mailto:arukhandelwal281@gmail.com"
                            className="text-2xl hover-glow"
                        >
                            <FiMail />
                        </motion.a>
                    </div>
                </motion.div>
            </section>

            {/* Project Modal */}
            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject || projects[0]}
            />
        </>
    );
} 