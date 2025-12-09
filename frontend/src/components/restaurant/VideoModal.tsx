"use client";

import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#0a0a0a] rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video */}
        <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
          <iframe
            src={videoUrl}
            width="100%"
            height="100%"
            style={{
              border: 0,
              backgroundColor: "#0a0a0a",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            allow="encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

