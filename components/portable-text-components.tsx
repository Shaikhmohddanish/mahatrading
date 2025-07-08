import React from 'react';
import { PortableTextComponents } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';

// Custom components for handling text formatting and line breaks in PortableText
export const portableTextComponents: PortableTextComponents = {
  // Handle different block types
  block: {
    // Handle normal paragraphs
    normal: ({ children }) => {
      return <p className="mb-4">{children}</p>
    },
    // Handle heading styles if needed
    h1: ({ children }) => {
      return <h1 className="text-3xl font-bold mb-4">{children}</h1>
    },
    h2: ({ children }) => {
      return <h2 className="text-2xl font-bold mb-3">{children}</h2>
    },
    h3: ({ children }) => {
      return <h3 className="text-xl font-bold mb-2">{children}</h3>
    },
    h4: ({ children }) => {
      return <h4 className="text-lg font-bold mb-2">{children}</h4>
    },
    // Handle block quotes
    blockquote: ({ children }) => {
      return <blockquote className="border-l-4 border-emerald-500 pl-4 italic my-4">{children}</blockquote>
    },
  },
  
  // Handle lists
  list: {
    // Bullet lists
    bullet: ({ children }) => {
      return <ul className="list-disc list-outside ml-5 mb-4 space-y-1">{children}</ul>
    },
    // Numbered lists
    number: ({ children }) => {
      return <ol className="list-decimal list-outside ml-5 mb-4 space-y-1">{children}</ol>
    },
  },
  
  listItem: {
    // Bullet list items
    bullet: ({ children }) => {
      return <li className="mb-1">{children}</li>
    },
    // Numbered list items
    number: ({ children }) => {
      return <li className="mb-1">{children}</li>
    },
  },
  
  // Handle marks (inline formatting)
  marks: {
    // Bold text
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    // Italic text
    em: ({ children }) => <em className="italic">{children}</em>,
    // Underline
    underline: ({ children }) => <span className="underline">{children}</span>,
    // Links
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a 
          href={value?.href} 
          target={target} 
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-emerald-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  
  // Add custom CSS to the article content container
  types: {
    image: ({ value }) => {
      return (
        <div className="my-6">
          <img
            src={urlFor(value).url()}
            alt={value.alt || 'Article image'}
            className="rounded-lg shadow-md mx-auto"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </figcaption>
          )}
        </div>
      );
    },
  },

  // Handle line breaks properly - important for the "br" tag issue
  hardBreak: () => {
    // Creates a true line break that will show even with multiple consecutive ones
    return <><br /><br /></>;
  },
};


