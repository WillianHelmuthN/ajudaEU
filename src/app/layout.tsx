import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
    title: "ajudaEU",
    description: "ajudaEU é uma startup focada em oferecer acesso rápido, acessível e inclusivo a profissionais da saúde mental, especialmente para jovens entre 15 e 29 anos.",
};

import { ReactNode } from "react";

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}){
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}