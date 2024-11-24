import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
    title: "ajudaEU",
    description: "ajudaEU é uma startup focada em oferecer acesso rápido, acessível e inclusivo a profissionais da saúde mental, especialmente para jovens entre 15 e 29 anos.",
};

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}