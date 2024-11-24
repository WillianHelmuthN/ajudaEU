import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-6 bg-pink-300 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-black text-4xl font-bold">ajudaEU</div>
        <ul className="flex space-x-4 text-2xl font-semibold">
          <li>
            <Link href="/signup" className="text-gray-800 hover:text-black">
              Cadastre-se
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
