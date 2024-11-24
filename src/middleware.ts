import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Ignora arquivos internos do Next.js e todos os arquivos estáticos, a menos que encontrados nos parâmetros de busca
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Sempre executa para rotas de API
    '/(api|trpc)(.*)',
  ],
};
