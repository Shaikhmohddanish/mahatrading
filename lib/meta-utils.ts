/**
 * Utility functions for handling metadata, especially for social sharing
 */

/**
 * Ensures a URL is absolute by adding the site domain if it's a relative URL
 * @param url The URL to check and potentially convert to absolute
 * @returns An absolute URL
 */
export function getAbsoluteUrl(url: string): string {
  // If the URL is already absolute (starts with http:// or https://), return it as is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // Otherwise, prepend the site domain
  // Remove any leading slash to avoid double slashes
  const cleanUrl = url.startsWith('/') ? url.substring(1) : url;
  return `https://mahatradings.com/${cleanUrl}`;
}

/**
 * Truncates a string to a maximum length, ending with an ellipsis
 * @param text The text to truncate
 * @param maxLength The maximum allowed length
 * @returns The truncated text
 */
export function truncateText(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) {
    return text;
  }

  // Find the last space before maxLength to avoid cutting words in half
  const lastSpace = text.lastIndexOf(' ', maxLength);
  const truncatedText = text.substring(0, lastSpace > 0 ? lastSpace : maxLength);
  
  return `${truncatedText}...`;
}
