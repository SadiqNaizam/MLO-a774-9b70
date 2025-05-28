import React from 'react';
import { cn } from '@/lib/utils'; // MANDATORY: Import cn utility

// MANDATORY: Define explicit interface with proper types
interface MainAppLayoutProps {
  children: React.ReactNode; // MANDATORY: Always accept children
  title?: string; // Optional: for setting document title or for use by a potential header component within children
  className?: string; // Optional: for additional custom styling on the main wrapper
}

// CRITICAL: Use React.FC with the proper interface
const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  title,
  className,
}) => {
  // Optional: Set document title if 'title' prop is provided.
  // This is a common side effect for a top-level layout component.
  React.useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    // Using <main> for semantic HTML, as this component is intended to wrap the primary content of a page.
    // The styling is derived from the "Layout Requirements" section in the project context:
    // overall.definition: "flex justify-center items-center h-screen bg-background"
    <main
      className={cn(
        'flex justify-center items-center h-screen bg-background',
        className // Allows consumers to pass additional Tailwind classes or custom styles
      )}
    >
      {children} 
    </main>
  );
};

export default MainAppLayout;
