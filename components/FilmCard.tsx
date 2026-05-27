"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Film } from "@/data/films";

interface FilmCardProps {
  film: Film;
  index: number;
}

const FilmCard = ({ film, index }: FilmCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const hasPreview = !!(film.previewVideoId || film.previewVideoUrl);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && hasPreview) {
          setShowIframe(true);
        }
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [hasPreview]);

  const embedUrl = film.previewVideoId
    ? `https://www.youtube.com/embed/${film.previewVideoId}?autoplay=1&mute=1&loop=1&playlist=${film.previewVideoId}&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&playsinline=1`
    : (film.previewVideoUrl ?? null);

  const isDirectVideoFile =
    !!film.previewVideoUrl &&
    /\.(mp4|mov|webm|m4v)(\?|$)/i.test(film.previewVideoUrl);

  return (
    <Link href={`/film/${film.slug}`}>
      <div
        ref={cardRef}
        className="film-card group relative overflow-hidden cursor-pointer animate-fade-up"
        style={{ animationDelay: `${index * 0.1}s`, aspectRatio: "16/9" }}
      >
        {/* Video preview or poster */}
        {showIframe && embedUrl && isVisible ? (
          isDirectVideoFile ? (
            <video
              src={film.previewVideoUrl}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-all duration-500 group-hover:grayscale"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-all duration-500 group-hover:grayscale"
              allow="autoplay; encrypted-media"
              frameBorder="0"
              loading="lazy"
              title={film.title}
            />
          )
        ) : (
          <img
            src={film.posterUrl}
            alt={film.title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:grayscale group-hover:scale-[1.02]"
            loading="lazy"
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-film-overlay/0 group-hover:bg-film-overlay/50 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
            <h3 className="font-display text-2xl md:text-3xl tracking-[0.12em]">
              {film.title}
            </h3>
            <p className="font-body text-xs tracking-[0.2em] uppercase mt-1 text-muted-foreground">
              {film.category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
