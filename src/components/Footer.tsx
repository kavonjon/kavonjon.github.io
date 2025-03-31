export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ 
      padding: '2rem 0', 
      marginTop: '5rem', 
      borderTop: '3px solid var(--accent)',
      position: 'relative',
      background: 'linear-gradient(to bottom, transparent, rgba(var(--card-rgb), 0.1))'
    }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1rem' }}>
        <p style={{ 
          fontSize: '0.875rem', 
          textAlign: 'center', 
          color: 'var(--muted-foreground)',
          letterSpacing: '0.025em'
        }}>
          © {currentYear} Kavon Hooshiar. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 