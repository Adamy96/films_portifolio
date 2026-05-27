"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2, Award } from "lucide-react";

import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

type FilmCredit = {
  role: string;
  name: string;
};

type Film = {
  slug: string;
  title: string;
  posterUrl: string;
  fullVideoUrl?: string;
  credits: FilmCredit[];
  stills?: string[];
  fullCredits?: FilmCredit[];
  synopsis?: string;
  awards?: string[];
};

type FilmDetailClientProps = {
  film: Film;
  prevFilm: Film | null;
  nextFilm: Film | null;
};

const FilmDetailClient = ({
  film,
  prevFilm,
  nextFilm,
}: FilmDetailClientProps) => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPlaying(false);
  }, [film.slug]);

  const handleFullscreen = () => {
    const el = playerRef.current;

    if (!el) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }

    el.requestFullscreen?.();
  };

  const hasStills = !!film.stills?.length;
  const hasFullCredits = !!film.fullCredits?.length;
  const hasAwards = !!film.awards?.length;

  return (
    <main className="min-h-screen bg-background pt-32 md:pt-56">
      <section className="px-4 md:px-8 lg:px-16 pb-6 text-center">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-[0.05em] leading-tight">
          {film.title}
        </h1>
      </section>

      <section className="px-4 md:px-8 lg:px-16 pb-10 md:pb-14 text-center">
        <div className="max-w-2xl mx-auto space-y-1.5">
          {film.credits.map((credit, index) => (
            <p
              key={`${credit.role}-${credit.name}-${index}`}
              className="font-body text-sm md:text-base text-secondary-foreground"
            >
              <span className="text-muted-foreground">{credit.role}: </span>
              {credit.name}
            </p>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-16 pb-10 md:pb-16">
        <div
          ref={playerRef}
          className="relative w-full max-w-6xl mx-auto bg-black aspect-video"
        >
          {playing && film.fullVideoUrl ? (
            <iframe
              src={`${film.fullVideoUrl}?autoplay=1&rel=0`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
              title={film.title}
            />
          ) : (
            <button
              type="button"
              className="absolute inset-0 group cursor-pointer text-left"
              onClick={() => {
                if (film.fullVideoUrl) {
                  setPlaying(true);
                }
              }}
              aria-label={`Play ${film.title}`}
            >
              <img
                src={film.posterUrl}
                alt={film.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-film-overlay/40 flex items-center justify-center">
                {film.fullVideoUrl && (
                  <div className="px-7 py-3.5 md:px-9 md:py-4 rounded-full bg-background/20 backdrop-blur-md border border-foreground/40 flex items-center justify-center transition-all duration-300 group-hover:bg-background/40 group-hover:border-foreground/80 group-hover:scale-105 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 md:w-6 md:h-6 ml-0.5 fill-foreground"
                      aria-hidden="true"
                    >
                      <polygon points="6,4 20,12 6,20" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          )}

          {film.fullVideoUrl && (
            <button
              type="button"
              onClick={handleFullscreen}
              aria-label="Fullscreen"
              className="absolute bottom-3 right-3 z-10 p-2 bg-background/40 hover:bg-background/70 backdrop-blur-sm border border-foreground/30 hover:border-foreground/70 transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </section>

      {hasStills && (
        <section className="px-4 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-1">
            {film.stills?.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="overflow-hidden bg-muted aspect-video"
              >
                <img
                  src={src}
                  alt={`${film.title} — still ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {hasFullCredits && (
        <section className="px-4 md:px-8 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-xl md:text-2xl tracking-[0.15em] uppercase text-center mb-8">
              Full Credits
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2">
              {film.fullCredits?.map((credit, index) => (
                <div
                  key={`${credit.role}-${credit.name}-${index}`}
                  className="flex justify-between border-b border-border py-2"
                >
                  <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    {credit.role}
                  </span>

                  <span className="font-body text-sm text-right">
                    {credit.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {film.synopsis && (
        <section className="px-4 md:px-8 lg:px-16 pb-12">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              {film.synopsis}
            </p>
          </div>
        </section>
      )}

      {hasAwards && (
        <section className="px-4 md:px-8 lg:px-16 pb-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-xl tracking-[0.15em] uppercase text-center mb-6">
              Awards & Festivals
            </h2>

            <div className="space-y-3">
              {film.awards?.map((award, index) => (
                <div
                  key={`${award}-${index}`}
                  className="flex items-center justify-center gap-3"
                >
                  <Award className="w-4 h-4 text-muted-foreground flex-shrink-0" />

                  <span className="font-body text-sm">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 md:px-8 lg:px-16 pb-12">
        <div className="max-w-6xl mx-auto flex justify-between items-center border-t border-border pt-8">
          {prevFilm ? (
            <Link
              href={`/film/${prevFilm.slug}`}
              className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{prevFilm.title}</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/"
            className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            All Films
          </Link>

          {nextFilm ? (
            <Link
              href={`/film/${nextFilm.slug}`}
              className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="hidden sm:inline">{nextFilm.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default FilmDetailClient;
