import { redirect } from "next/navigation";

import { films } from "@/data/films";
import FilmCard from "@/components/FilmCard";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const validCategories = ["narrative", "commercial", "broadcast"] as const;

type ValidCategory = (typeof validCategories)[number];

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

const isValidCategory = (category: string): category is ValidCategory => {
  return validCategories.includes(category as ValidCategory);
};

export const generateStaticParams = () => {
  return validCategories.map((category) => ({
    category,
  }));
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category } = await params;

  if (!isValidCategory(category)) {
    redirect("/");
  }

  let filtered = films.filter((film) => film.category === category);

  if (category === "commercial") {
    const tvCultura = filtered.find((film) => film.slug === "tv-cultura");

    if (tvCultura) {
      filtered = [
        tvCultura,
        ...filtered.filter((film) => film.slug !== "tv-cultura"),
      ];
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-[110px] md:pt-[180px] pb-8 px-4 md:px-8 lg:px-12">
        <h1 className="font-display tracking-[0.2em] uppercase text-center text-2xl">
          {category}
        </h1>
      </section>

      <section className="pb-16 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {filtered.map((film, index) => (
            <FilmCard key={film.slug} film={film} index={index} />
          ))}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default CategoryPage;
