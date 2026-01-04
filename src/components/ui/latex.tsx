import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface LatexProps {
  content: string;
  className?: string;
}

// Parse and render content with LaTeX support
export function Latex({ content, className = '' }: LatexProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Process the content to render LaTeX
    const processedContent = renderLatex(content);
    containerRef.current.innerHTML = processedContent;
  }, [content]);

  return (
    <div 
      ref={containerRef} 
      className={`latex-content ${className}`}
    />
  );
}

// Function to render LaTeX in content
function renderLatex(content: string): string {
  // Replace display math: $$...$$ or \[...\]
  let processed = content.replace(/\$\$(.*?)\$\$/gs, (_, math) => {
    try {
      return `<div class="katex-display">${katex.renderToString(math.trim(), { displayMode: true, throwOnError: false })}</div>`;
    } catch {
      return `<div class="katex-error">${math}</div>`;
    }
  });

  processed = processed.replace(/\\\[(.*?)\\\]/gs, (_, math) => {
    try {
      return `<div class="katex-display">${katex.renderToString(math.trim(), { displayMode: true, throwOnError: false })}</div>`;
    } catch {
      return `<div class="katex-error">${math}</div>`;
    }
  });

  // Replace inline math: $...$ or \(...\)
  processed = processed.replace(/\$([^$\n]+?)\$/g, (_, math) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return `<span class="katex-error">${math}</span>`;
    }
  });

  processed = processed.replace(/\\\((.*?)\\\)/g, (_, math) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return `<span class="katex-error">${math}</span>`;
    }
  });

  // Convert remaining newlines to <br> for proper display
  processed = processed.replace(/\n/g, '<br />');

  return processed;
}

export default Latex;
