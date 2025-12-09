"use client";

import { useState, useEffect } from "react";
import { VideoModal } from "@/components/restaurant/VideoModal";

interface VideoPopupProps {
  videoUrl: string;
  delay?: number; // Delay in milliseconds before showing popup
  showOnlyOnce?: boolean; // If true, uses localStorage to show only once
}

export default function VideoPopup({ 
  videoUrl, 
  delay = 1000,
  showOnlyOnce = true 
}: VideoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before (if showOnlyOnce is true)
    if (showOnlyOnce) {
      const hasSeenPopup = localStorage.getItem("tiktok-popup-shown");
      if (hasSeenPopup === "true") {
        setHasShown(true);
        return;
      }
    }

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsOpen(true);
      if (showOnlyOnce) {
        localStorage.setItem("tiktok-popup-shown", "true");
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, showOnlyOnce]);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Don't render if we've already shown it and showOnlyOnce is true
  if (hasShown && showOnlyOnce) {
    return null;
  }

  return (
    <VideoModal
      isOpen={isOpen}
      onClose={handleClose}
      videoUrl={videoUrl}
    />
  );
}

