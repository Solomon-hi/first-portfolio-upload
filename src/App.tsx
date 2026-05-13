import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Code, Terminal, Palette, Globe, Phone, GitBranch, Copy, Check, Binary, Coffee, Server, FileCode2, Braces, Box } from 'lucide-react';
import projects from './projects';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const observerRefs = useRef<(HTMLElement | null)[]>([]);
  const skillsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const appearOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    (observerRefs.current as (HTMLElement | null)[]).forEach((ref) => {
      if (ref) appearOnScroll.observe(ref);
    });

    return () => appearOnScroll.disconnect();
  }, []);

  useEffect(() => {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      });
    }, { threshold: 0.3 });

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }
    return () => skillsObserver.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
        <a href="#" className="logo" aria-label="Solomon Awoke Portfolio Home">portfolio <span>.</span></a>
        
        <div 
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          id="mobile-menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="nav-menu"
          aria-label="Toggle navigation menu"
        >
          <span className="bar" aria-hidden="true"></span>
          <span className="bar" aria-hidden="true"></span>
          <span className="bar" aria-hidden="true"></span>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu" role="menubar">
          <li role="none"><a href="#hero" onClick={() => setIsMobileMenuOpen(false)} role="menuitem">Home</a></li>
          <li role="none"><a href="#about" onClick={() => setIsMobileMenuOpen(false)} role="menuitem">About</a></li>
          <li role="none"><a href="#skills" onClick={() => setIsMobileMenuOpen(false)} role="menuitem">Skills</a></li>
          <li role="none"><a href="#projects" onClick={() => setIsMobileMenuOpen(false)} role="menuitem">Projects</a></li>
          <li role="none"><a href="#contact" onClick={() => setIsMobileMenuOpen(false)} role="menuitem">Contact</a></li>
        </ul>
      </nav>

      <header id="hero" className="section">
        <div className="hero-content fade-in" ref={addToRefs}>
          <p className="hero-subtitle">Hello, I'm</p>
          <h1 className="hero-title">Solomon Awoke</h1>
          <h2 className="hero-tagline">Full-Stack Web Developer</h2>
          <p className="hero-desc">Building modern, responsive web applications with clean code and user-centric design. Specializing in React, Node.js, PHP, and database solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </header>

      <section id="about" className="section bg-secondary">
        <div className="container fade-in" ref={addToRefs}>
          <h2 className="section-title">About Me</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left">
            <div className="flex-shrink-0">
              {/* NOTE: Replace the src below with your actual photo path when using VS Code (e.g., src="./my-photo.jpg") */}
              <img 
                src="/assets/images/sol.jpg" 
                alt="My Profile Placeholder" 
                className="profile-photo rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-[var(--bg-secondary)] shadow-[0_0_0_2px_var(--accent)] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="about-text md:max-w-xl">
              <p>I’m an Information Science student who loves building simple, clean, and responsive websites. I focus on creating user-friendly designs while continuously improving my skills in web development.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section" ref={skillsRef}>
        <div className="container fade-in" ref={addToRefs}>
          <h2 className="section-title">My Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon-card">
                <img src="/skills/react.svg" alt="React" />
              </div>
              <h3>React</h3>
            </div>

            <div className="skill-card">
              <div className="skill-icon-card">
                <img src="/skills/javascript.svg" alt="JavaScript" />
              </div>
              <h3>JavaScript</h3>
            </div>

            <div className="skill-card">
              <div className="skill-icon-card">
                <img src="/skills/java.svg" alt="Java" />
              </div>
              <h3>Java</h3>
            </div>

            <div className="skill-card">
              <div className="skill-icon-card">
                <img src="/skills/cplusplus.svg" alt="C++" />
              </div>
              <h3>C++</h3>
            </div>

            <div className="skill-card">
              <div className="skill-icon-card">
                <img src="/skills/python.svg" alt="Python" />
              </div>
              <h3>Python</h3>
            </div>

            <div className="skill-card">
              <div className="skill-icon-card">
                <img src="/skills/html5.svg" alt="HTML" />
              </div>
              <h3>HTML</h3>
            </div>

            <div className="skill-card">
              <div className="skill-icon-card">
                <img src="/skills/css3.svg" alt="CSS" />
              </div>
              <h3>CSS</h3>
            </div>

            <div className="skill-card">
              <div className="skill-icon-card">
                <img src="/skills/php.svg" alt="PHP" />
              </div>
              <h3>PHP</h3>
            </div>

            <div className="skill-card">
              <div className="skill-icon-card">
                <FileCode2 size={40} color="#00758f" />
              </div>
              <h3>MySQL</h3>
            </div>

            <div className="skill-card">
              <div className="skill-icon-card">
                <Server size={40} color="#83cd29" />
              </div>
              <h3>Node.js</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section bg-secondary">
        <div className="container fade-in" ref={addToRefs}>
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card" role="article" aria-labelledby={`proj-${project.id}-title`}>
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url('${project.imageUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Project image */}
                </div>

                <div className="project-content">
                  <h3 id={`proj-${project.id}-title`} className="project-title mt-0">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-links mt-auto pt-4">
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-1.5"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demo of ${project.title} (opens in a new tab)`}
                    >
                      <Globe size={16} /> Live Demo
                    </a>

                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        className="flex items-center gap-1.5"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open GitHub repository for ${project.title} (opens in a new tab)`}
                      >
                        <GitBranch size={16} /> GitHub Repo
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-[var(--text-secondary)]" aria-hidden="true"><GitBranch size={16} /> Repo coming soon</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container fade-in" ref={addToRefs}>
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-container">
            <div className="flex flex-col sm:flex-row justify-center mb-8 gap-6 sm:gap-12">
              <div className="flex items-center gap-4">
                <a href="tel:+2519995775953" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300" style={{ textDecoration: 'none' }}>
                  <Phone size={20} />
                  <span className="text-lg font-medium">+251 99 577 5953</span>
                </a>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('+2519995775953');
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--text-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 cursor-pointer bg-transparent"
                  aria-label="Copy phone number"
                  title="Copy phone number"
                >
                  {copied ? <Check size={18} className="text-[var(--accent)]" /> : <Copy size={18} />}
                </button>
              </div>

              <div className="flex items-center gap-4">
                <a href="mailto:solawo957@gmail.com" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300" style={{ textDecoration: 'none' }}>
                  <Mail size={20} />
                  <span className="text-lg font-medium">solawo957@gmail.com</span>
                </a>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('solawo957@gmail.com');
                    setCopiedEmail(true);
                    setTimeout(() => setCopiedEmail(false), 2000);
                  }}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--text-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 cursor-pointer bg-transparent"
                  aria-label="Copy email address"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={18} className="text-[var(--accent)]" /> : <Copy size={18} />}
                </button>
              </div>
            </div>
            <form 
              className="contact-form" 
              onSubmit={handleFormSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows={5}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600 font-medium">Message sent successfully! I'll get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-600 font-medium">Failed to send message. Please try again or contact me directly.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer role="contentinfo">
        <div className="social-links" role="list">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile">
            <Github size={24} aria-hidden="true" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile">
            <Linkedin size={24} aria-hidden="true" />
          </a>
          <a href="mailto:solawo957@gmail.com" aria-label="Send me an email">
            <Mail size={24} aria-hidden="true" />
          </a>
          <a href="tel:+2519995775953" aria-label="Call me">
            <Phone size={24} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-text">
          &copy; {currentYear} Solomon Awoke. All rights reserved.
        </div>
      </footer>
    </>
  );
}
