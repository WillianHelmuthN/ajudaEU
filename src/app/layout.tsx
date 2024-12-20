import type { Metadata } from "next";
import "./global.css";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Header from "@/components/PageLayout/Header";
import Footer from "@/components/PageLayout/Footer";

export const metadata: Metadata = {
  title: "ajudaEU",
  description:
    "ajudaEU é uma startup focada em oferecer acesso rápido, acessível e inclusivo a profissionais da saúde mental, especialmente para jovens entre 15 e 29 anos.",
  icons: {
    icon: "/icon.png"
  }
};

/**
 * Layout principal da aplicação
 * @returns {JSX.Element} O layout principal da aplicação.
 */
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <SignedOut></SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
