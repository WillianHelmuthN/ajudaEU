export default function Header () {
    return (
      <header className="w-full py-6 bg-pink-300 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-black text-4xl font-bold">ajudaEU</div>
          <ul className="flex space-x-4 text-2xl font-semibold">
            <li><a href="#funcionalidades" className="text-gray-800 hover:text-black">Funcionalidades</a></li>
            <li><a href="#precos" className="text-gray-800 hover:text-black">Preços</a></li>
            <li><a href="#contato" className="text-gray-800 hover:text-black">Contato</a></li>
          </ul>
        </nav>
      </header>
    )
}
