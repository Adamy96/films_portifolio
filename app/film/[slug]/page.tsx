import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { films } from "@/data/films";
import FilmDetailClient from "@/views/FilmDetail";
import "../../globals.css";

type FilmDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = () => {
  return films.map((film) => ({
    slug: film.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: FilmDetailPageProps): Promise<Metadata> => {
  const { slug } = await params;

  const film = films.find((item) => item.slug === slug);

  if (!film) {
    return {
      title: "Film not found",
    };
  }

  return {
    title: film.title,
    description: film.synopsis ?? undefined,
  };
};

const FilmDetailPage = async ({ params }: FilmDetailPageProps) => {
  const { slug } = await params;

  const filmIndex = films.findIndex((item) => item.slug === slug);

  if (filmIndex === -1) {
    notFound();
  }

  const film = films[filmIndex];
  const prevFilm = filmIndex > 0 ? films[filmIndex - 1] : null;
  const nextFilm = filmIndex < films.length - 1 ? films[filmIndex + 1] : null;

  return (
    <FilmDetailClient film={film} prevFilm={prevFilm} nextFilm={nextFilm} />
  );
};

export default FilmDetailPage;
