"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  TwitterIcon, 
  FacebookIcon, 
  LinkedinIcon, 
  Share2Icon, 
  MessageCircleIcon,
  CheckIcon
} from "lucide-react";
import styles from './social-share.module.css';
import { useToast } from "@/components/ui/use-toast";

interface SocialShareProps {
  url: string;
  title: string;
}

/**
 * Social sharing component for articles
 * Provides buttons to share content on various social platforms
 */
export default function SocialShare({ url, title }: SocialShareProps) {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = React.useState(false);
  
  // Ensure the URL is absolute
  const fullUrl = url.startsWith('http') ? url : `https://mahatradings.com${url.startsWith('/') ? url : `/${url}`}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);

  // Share to WhatsApp
  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Sharing on WhatsApp",
      description: "Opening WhatsApp to share this article",
      duration: 3000,
    });
  };

  // Share to Twitter
  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    window.open(twitterUrl, '_blank');
    
    toast({
      title: "Sharing on Twitter",
      description: "Opening Twitter to share this article",
      duration: 3000,
    });
  };

  // Share to Facebook
  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    window.open(facebookUrl, '_blank');
    
    toast({
      title: "Sharing on Facebook",
      description: "Opening Facebook to share this article",
      duration: 3000,
    });
  };

  // Share to LinkedIn
  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
    window.open(linkedInUrl, '_blank');
    
    toast({
      title: "Sharing on LinkedIn",
      description: "Opening LinkedIn to share this article",
      duration: 3000,
    });
  };

  // Copy to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      setIsCopied(true);
      
      toast({
        title: "Link copied!",
        description: "The article URL has been copied to your clipboard",
        duration: 3000,
      });
      
      // Reset copy icon after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className={styles.socialShareContainer}>
      <p className={styles.shareText}>Share this article:</p>
      <div className={styles.socialButtons}>
        <Button 
          onClick={handleWhatsAppShare} 
          variant="outline" 
          size="icon" 
          className={styles.whatsappButton}
          title="Share on WhatsApp"
        >
          <MessageCircleIcon className={styles.icon} />
        </Button>
        
        <Button 
          onClick={handleTwitterShare} 
          variant="outline" 
          size="icon"
          className={styles.twitterButton}
          title="Share on Twitter"
        >
          <TwitterIcon className={styles.icon} />
        </Button>
        
        <Button 
          onClick={handleFacebookShare} 
          variant="outline" 
          size="icon"
          className={styles.facebookButton}
          title="Share on Facebook"
        >
          <FacebookIcon className={styles.icon} />
        </Button>
        
        <Button 
          onClick={handleLinkedInShare} 
          variant="outline" 
          size="icon"
          className={styles.linkedinButton}
          title="Share on LinkedIn"
        >
          <LinkedinIcon className={styles.icon} />
        </Button>
        
        <Button 
          onClick={handleCopyLink} 
          variant="outline" 
          size="icon"
          className={isCopied ? `${styles.copyButton} ${styles.copied}` : styles.copyButton}
          title="Copy link"
        >
          {isCopied ? (
            <CheckIcon className={styles.icon} />
          ) : (
            <Share2Icon className={styles.icon} />
          )}
        </Button>
      </div>
    </div>
  );
}
