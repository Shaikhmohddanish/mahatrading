// Sanity Studio Configuration for HTML Support
// This is a placeholder file that provides guidance on configuring the Sanity Studio
// for better HTML support in the Portable Text Editor

/*
INSTRUCTIONS FOR CMS CONFIGURATION:

To ensure proper handling of bold text and multiple line breaks in the Sanity Studio CMS,
follow these steps:

1. In your Sanity Studio project, modify your schema file for articles/blog posts to include:

export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    // other fields...
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          // Enable all styles and marks
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'}
          ],
          marks: {
            // Enable all decorators
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
              {title: 'Code', value: 'code'}
            ],
            // Enable linking
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  }
                ]
              }
            ]
          }
        },
        // Add other block types as needed
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        }
      ]
    }
    // other fields...
  ]
}

2. For multiple line breaks, ensure the user presses Enter twice or uses Shift+Enter for a 
   single line break. The custom Portable Text components will handle multiple line breaks.

3. For bold text, use the Strong button in the editor toolbar or the keyboard shortcut Ctrl+B (Cmd+B).

4. If the CMS is still not preserving HTML correctly, you may need to create a custom plugin 
   for the Sanity Studio to better handle HTML content. Contact your Sanity administrator or
   developer for assistance.
*/
