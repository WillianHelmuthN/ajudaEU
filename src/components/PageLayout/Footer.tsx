import React from 'react';

export default function Footer() {
  return (
      <footer className="w-full py-6 bg-pink-300">
        <div className="container mx-auto text-center text-black">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-black text-4xl font-bold">ajudaEU</div>
        </nav>
          &copy; {new Date().getFullYear()} ajudaEU Todos os direitos reservados
        </div>
      </footer>
  );
}
