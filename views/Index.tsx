import FilmGrid from "@/components/FilmGrid";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <FilmGrid />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
