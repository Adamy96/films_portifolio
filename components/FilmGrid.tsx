import { films } from "@/data/films";
import FilmCard from "./FilmCard";

const FilmGrid = () => {
  return (
    <section className="pt-[110px] md:pt-[180px] pb-16 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {films.map((film, index) => (
          <FilmCard key={film.slug} film={film} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FilmGrid;
