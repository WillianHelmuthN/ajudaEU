"use client";

import React, { useState } from "react";
import Link from "next/link";

/**
 * Componente Header que exibe um cabeçalho com um menu de navegação.
 * O menu pode ser alternado em dispositivos móveis.
 *
 * @component
 * @example
 * @returns {JSX.Element} O componente Header.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full py-4 bg-pink-300 shadow-md">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/" // Link para a página inicial
            className="text-black text-2xl sm:text-4xl font-bold">
            ajudaEU
          </Link>

          {/* Botão de Menu */}
          <button
            className="sm:hidden flex items-center justify-center text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna o estado do menu
          >
            {/* Ícone de menu desenhado de maneira manual, se não for assim quebra */}
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
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>

          {/* Menu de Navegação */}
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
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
            <li className="text-center sm:text-left">
              <Link
                href="/plans"
                className="block py-2 text-gray-800 hover:text-black transition-colors"
              >
                Planos
              </Link>
            </li>
            <li className="text-center sm:text-left">
              <Link
                href="/contact"
                className="block py-2 text-gray-800 hover:text-black transition-colors"
              >
                Contato
              </Link>
            </li>
            <li className="text-center sm:text-left">
              <Link
                href="/about"
                className="block py-2 text-gray-800 hover:text-black transition-colors"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Div para empurrar o conteúdo da página */}
      <div className={`${isMenuOpen ? "h-10" : "h-0"} sm:h-0`}></div>
    </>
  );
}
