import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import Header from "@/components/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Film Portfolio",
  description: "Film Portfolio",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={leagueSpartan.variable}>
      <body>
        <TooltipProvider>
          <Header />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
};

export default RootLayout;
