"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  githubUrl?: string;
  demoUrl?: string;
  isDemoOnRender?: boolean; // Flag to identify if the demo is hosted on Render.com
}

export default function ProjectCard({ 
  title, 
  description, 
  tags = [], 
  githubUrl, 
  demoUrl,
  isDemoOnRender = false
}: ProjectCardProps) {
  // States for demo loading
  const [isDemoLoading, setIsDemoLoading] = useState(false);
  const [isDemoReady, setIsDemoReady] = useState(!isDemoOnRender);
  const [isLoadingTimedOut, setIsLoadingTimedOut] = useState(false);
  
  // Effect to ping Render.com demo when component mounts
  useEffect(() => {
    if (isDemoOnRender && demoUrl) {
      pingDemoServer(demoUrl);
    }
  }, [isDemoOnRender, demoUrl]);
  
  // Function to ping the demo server to wake it up
  const pingDemoServer = async (url: string) => {
    setIsDemoLoading(true);
    setIsLoadingTimedOut(false);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      setIsLoadingTimedOut(true);
    }, 8000); // 8 second timeout
    
    try {
      await fetch(url, {
        method: "GET",
        mode: "no-cors",
        signal: controller.signal,
      });
      setIsDemoReady(true);
    } catch (e) {
      // If aborted or failed, that's fine
      console.log("Wake-up ping completed or aborted");
    } finally {
      clearTimeout(timeoutId);
      setIsDemoLoading(false);
    }
  };
  
  // Handle demo link click
  const handleDemoClick = (e: React.MouseEvent) => {
    if (isDemoOnRender && !isDemoReady && !isLoadingTimedOut) {
      e.preventDefault();
      if (!isDemoLoading) {
        // If not currently loading, retry the ping
        pingDemoServer(demoUrl as string);
      }
    }
  };

  return (
    <div style={{
      backgroundColor: 'var(--card)',
      color: 'var(--card-foreground)',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      border: '1px solid var(--border)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Red accent line at the top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        backgroundColor: 'var(--accent)'
      }} />
      
      <h3 style={{ 
        fontSize: '1.25rem', 
        fontWeight: '600',
        marginTop: '0.5rem'
      }}>{title}</h3>
      
      <p style={{ 
        marginTop: '0.5rem', 
        color: 'var(--muted-foreground)' 
      }}>
        {description}
      </p>
      
      {tags.length > 0 && (
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.5rem', 
          marginTop: '1rem' 
        }}>
          {tags.map((tag) => (
            <span 
              key={tag} 
              style={{
                padding: '0.25rem 0.5rem',
                fontSize: '0.75rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--muted)',
                color: 'var(--muted-foreground)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
        {githubUrl && (
          <Link 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--primary)',
              transition: 'color 0.2s'
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </Link>
        )}
        
        {demoUrl && (
          <Link 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleDemoClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: isDemoOnRender && (isDemoLoading || (!isDemoReady && !isLoadingTimedOut)) 
                ? 'var(--muted-foreground)' 
                : 'var(--primary)',
              transition: 'color 0.2s',
              position: 'relative'
            }}
          >
            {isDemoOnRender && isDemoLoading ? (
              <>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ animation: 'spin 1.5s linear infinite' }}
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" strokeDasharray="32" strokeDashoffset="16" />
                </svg>
                <span>Waking up demo...</span>
              </>
            ) : isDemoOnRender && !isDemoReady && !isLoadingTimedOut ? (
              <>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 8v4l3 3" />
                </svg>
                <span>Starting demo server...</span>
              </>
            ) : isDemoOnRender && isLoadingTimedOut ? (
              <>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
                <span>Live Demo (may be slow to load)</span>
              </>
            ) : (
              <>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
                <span>Live Demo</span>
              </>
            )}
          </Link>
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
} 