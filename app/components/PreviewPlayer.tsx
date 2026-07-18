"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function PreviewPlayer({
  src,
  poster,
  alt,
}: {
  src: string;
  poster: string;
  alt: string;
}) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [userPaused, setUserPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = () => {
      setShouldAnimate(!reducedMotion.matches);
    };

    updateMotionPreference();
    reducedMotion.addEventListener("change", updateMotionPreference);

    return () => {
      reducedMotion.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearViewport(entry.isIntersecting);
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      setUserPaused(false);
      await video.play();
    } else {
      setUserPaused(true);
      video.pause();
    }
  };

  const showVideo = shouldAnimate && isNearViewport;

  return (
    <div ref={containerRef} className="absolute inset-0">
      {showVideo ? (
        <>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            aria-label={alt}
            autoPlay={!userPaused}
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="h-full w-full object-cover"
          />
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={
              isPlaying ? "Pause pose preview" : "Play pose preview"
            }
            className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white shadow-lg backdrop-blur-sm transition hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" aria-hidden />
            ) : (
              <Play className="h-4 w-4" aria-hidden />
            )}
          </button>
        </>
      ) : (
      <Image
        src={poster}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
      )}
    </div>
  );
}