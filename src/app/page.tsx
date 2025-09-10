"use client"

import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Short delay before triggering animations to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const projects = [
    {
      title: "Endangered Languages Program Website Demo",
      description: "A custom React and Django application for the Endangered Languages Project that wrangles a complex data model with a full featured CMS including custom roles and permissions per data type, and automations like stale content clean up for community driven content.",
      tags: ["React", "TypeScript", "Django", "Django Rest Framework", "CMS"],
      demoUrl: "https://elp-demo.kavonhooshiar.com"
    },
    {
      title: "Youth Language Fair Management Platform",
      description: "A comprehensive web application designed to facilitate the organization and management of educational fairs focused on indigenous language and cultural education. The system streamlines student registration, submission management, and fair administration through a user-friendly interface, allowing schools and programs to participate effectively in cultural education initiatives. With features including student registration, submission tracking, statistical reporting, and administrative controls, the platform serves as a central hub for managing all aspects of these important cultural and educational events. \n\nIt is currently used by The Sam Noble Museum for the Oklahoma Native American Youth Language Fair.",
      tags: ["Django", "Django Rest Framework", "Javascript", "Bootstrap"],
      demoUrl: "https://ylf-demo.onrender.com",
      isDemoOnRender: true
    },
    {
      title: "Language Archive Software",
      description: "A repository management system developed in collaboration with the Native American Languages Museum. While there are open-source turn-key repository management solutions out there, this one threads the needle of various archive requirements and is still robust to the needs of other institutions. The software provides user and role management for co-curation, controlled access levels for individual items, detailed metadata management and batch editing through a user-friendly deposit portal, file previews and convenient download of metadata and data.",
      tags: ["React", "TypeScript", "Django", "Django Rest Framework"],
      githubUrl: "https://github.com/kavonjon/archive-software",
    }
  ];

  return (
    <>
      <Header />
      
      <main style={{ opacity: 0 }} className={isLoaded ? 'content-loaded' : ''}>
        <section className={`headline-section ${isLoaded ? 'appear' : ''}`} style={{ padding: '1.5rem 0 0' }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className="headline">
              I help small organizations and underserved communities turn legacy systems and complex data into modern, mobile-first apps&mdash;even if they&apos;re not sure where to start.
            </h2>
          </div>
        </section>
        
        <section className={`projects-section ${isLoaded ? 'appear' : ''}`} style={{ padding: '0.5rem 0 2rem' }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              color: 'var(--primary)',
              borderLeft: '3px solid var(--accent)',
              paddingLeft: '0.75rem'
            }}>
              Projects
            </h2>
            
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div 
                  key={project.title} 
                  className="project-card-wrapper"
                  style={{ 
                    animationDelay: `${0.1 + (index * 0.15)}s`,
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded 
                      ? 'translateY(0)' 
                      : 'translateY(20px)'
                  }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    githubUrl={project.githubUrl}
                    demoUrl={project.demoUrl}
                    isDemoOnRender={project.isDemoOnRender}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <style jsx global>{`
        main {
          transition: opacity 0.5s ease-out;
        }
        
        main.content-loaded {
          opacity: 1 !important;
        }
        
        .headline-section, .projects-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .headline-section.appear {
          opacity: 1;
          transform: translateY(0);
        }
        
        .projects-section {
          transition-delay: 0.2s;
        }
        
        .projects-section.appear {
          opacity: 1;
          transform: translateY(0);
        }
        
        .project-card-wrapper {
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
          display: inline-block;
          width: 100%;
          margin-bottom: 1.5rem;
          break-inside: avoid;
        }
        
        .headline {
          font-size: 1.35rem;
          line-height: 1.4;
          font-weight: 500;
          max-width: 56rem;
          margin: 0 auto 1.5rem;
          color: var(--foreground);
          text-align: center;
          padding: 0 1rem;
        }
        
        @media (min-width: 640px) {
          .headline {
            font-size: 1.5rem;
          }
        }
        
        @media (min-width: 768px) {
          .headline {
            font-size: 1.75rem;
          }
        }
        
        .projects-grid {
          display: block;
          column-count: 1;
          column-gap: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .projects-grid {
            column-count: 2;
          }
        }
        
        /* Animation style reset for reduced motion preference */
        @media (prefers-reduced-motion) {
          main, .headline-section, .projects-section, .project-card-wrapper {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </>
  );
}
