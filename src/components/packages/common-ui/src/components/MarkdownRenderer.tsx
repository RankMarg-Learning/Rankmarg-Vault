import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * MarkdownRenderer - A powerful markdown renderer with LaTeX math support
 * 
 * Features:
 * - Full markdown support (headers, lists, code blocks, etc.)
 * - LaTeX math rendering via KaTeX ($...$ for inline, $$...$$ for display)
 * - GitHub Flavored Markdown (tables, strikethrough, etc.)
 * - Raw HTML support
 * 
 * Usage:
 * <MarkdownRenderer content="# Hello **World**" />
 * <MarkdownRenderer content="The formula is $E = mc^2$" />
 */
export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn("markdown-content prose dark:prose-invert max-w-none", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          // Custom heading styles for better visual hierarchy
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold mb-4 text-foreground">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold mb-3 text-foreground">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-medium mb-2 text-foreground">{children}</h3>
          ),
          // Enhanced paragraph styling
          p: ({ children }) => (
            <p className="mb-3 leading-relaxed text-foreground/90">{children}</p>
          ),
          // Better list styling
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1.5 mb-3 text-foreground/90">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1.5 mb-3 text-foreground/90">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
          ),
          // Code block styling
          code: ({ className, children, ...props }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code 
                  className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono text-foreground" 
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code className={cn("block", className)} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
              {children}
            </pre>
          ),
          // Blockquote styling for callouts/tips
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary/50 pl-4 py-1 my-4 bg-primary/5 rounded-r-lg italic text-muted-foreground">
              {children}
            </blockquote>
          ),
          // Table styling
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-border rounded-lg">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-muted">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-3 py-2 text-foreground/90">
              {children}
            </td>
          ),
          // Link styling
          a: ({ href, children }) => (
            <a 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
            >
              {children}
            </a>
          ),
          // Strong/Bold
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          // Emphasis/Italic
          em: ({ children }) => (
            <em className="italic text-foreground/90">{children}</em>
          ),
          // Horizontal rule
          hr: () => (
            <hr className="my-6 border-border" />
          ),
          // Image with responsive styling
          img: ({ src, alt }) => (
            <img 
              src={src} 
              alt={alt || "Image"} 
              className="max-w-full h-auto rounded-lg my-4 mx-auto"
              loading="lazy"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;