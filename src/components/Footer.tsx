import React from 'react';

export default function Footer() {
  return (
      <footer className="w-full py-6 bg-pink-300">
        <div className="container mx-auto text-center text-black">
          &copy; {new Date().getFullYear()} ajudaEU Todos os direitos reservados
        </div>
      </footer>
  );
}
