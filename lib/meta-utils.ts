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
  if (!text || text.length <= maxLength) {
    return text || '';
  }

  // Find the last space before maxLength to avoid cutting words in half
  const lastSpace = text.lastIndexOf(' ', maxLength);
  const truncatedText = text.substring(0, lastSpace > 0 ? lastSpace : maxLength);
  
  return `${truncatedText}...`;
}

/**
 * Optimizes an image URL for social sharing platforms
 * @param imageUrl The original image URL or Sanity image reference
 * @param urlFor The Sanity image URL builder function (if using Sanity)
 * @returns An optimized image URL for social sharing
 */
export function getSocialShareImage(imageUrl: string | any, urlFor?: Function): string {
  // If no image, return a placeholder
  if (!imageUrl) {
    return getAbsoluteUrl('/mahatradings-logo.png');
  }
  
  // If it's a string URL (not a Sanity reference)
  if (typeof imageUrl === 'string') {
    return getAbsoluteUrl(imageUrl);
  }
  
  // If it's a Sanity image reference and we have the urlFor function
  if (urlFor) {
    // Use 1:1 aspect ratio for WhatsApp to prevent cropping
    // Use 'clip' fit mode to maintain the original aspect ratio without cropping
    // Set quality to 80 for good balance between quality and file size
    return getAbsoluteUrl(urlFor(imageUrl).width(1200).height(1200).fit('clip').quality(80).url());
  }
  
  // Fallback
  return getAbsoluteUrl('/mahatradings-logo.png');
}
