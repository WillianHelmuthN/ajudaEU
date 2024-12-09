"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla o menu aberto/fechado

  return (
    <header className="w-full py-4 bg-pink-300 shadow-md">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-2xl sm:text-4xl font-bold">
          ajudaEU
        </div>

        {/* Botão Hamburger (mobile) */}
        <button
          className="sm:hidden flex items-center justify-center text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna o estado do menu
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Menu de Navegação */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } sm:flex sm:space-x-4 text-lg sm:text-2xl font-semibold absolute sm:static top-16 left-0 w-full sm:w-auto bg-pink-300 sm:bg-transparent`}
        >
          <li className="text-center sm:text-left">
            <Link
              href="/signup"
              className="block py-2 text-gray-800 hover:text-black transition-colors"
            >
              Cadastre-se
            </Link>
          </li>
          {/* Adicione mais itens de menu aqui */}
        </ul>
      </nav>
    </header>
  );
}
