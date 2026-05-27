import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <section className="px-4 md:px-8 lg:px-16 xl:px-24 py-24 md:py-32">
        <div className="flex flex-col items-center text-center gap-16">
          <div className="flex-1 animate-fade-up">
            <h1 className="font-display text-2xl md:text-3xl leading-none mb-8">
              CONTACT
            </h1>

            <div className="font-body text-lg text-muted-foreground leading-relaxed mb-12 space-y-4 max-w-2xl mx-auto">
              <p>
                Finalist for the ABC 2026 Award (Brazilian Cinematography
                Society).
              </p>

              <p>His first project premiered with filmmaker Cacá Diegues.</p>

              <p>
                Lucas works as a Director, DOP, and production assistant focused
                on fictional narratives, documentaries, and narrative-driven
                branded content.
              </p>

              <p>See you on our next project together!</p>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <a
                href="mailto:lucaszanetteff@gmail.com"
                className="flex items-center justify-center gap-4 font-body text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-foreground" />
                lucaszanetteff@gmail.com
              </a>

              <div className="flex items-center justify-center gap-4 font-body text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                São Paulo - BR, available worldwide.
              </div>
            </div>
          </div>

          <div
            className="w-full md:w-[600px] lg:w-[750px] shrink-0 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            <Image
              src="/lucas-profile.jpg"
              alt="Lucas Zanette Foltran"
              width={750}
              height={422}
              priority
              className="w-full aspect-video object-cover object-center grayscale"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
