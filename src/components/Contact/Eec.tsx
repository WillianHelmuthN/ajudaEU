export default function Eec()
{
    return(
        <section id="contato" className="py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Entre em Contato</h2>
          <form className="mt-10 max-w-lg mx-auto">
            <div className="mb-6">
              <label htmlFor="nome" className="block text-lg sm:text-xl text-gray-900">Nome</label>
              <input type="text" id="nome" className="text-black w-full mt-2 p-3 border rounded-lg" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg sm:text-xl text-gray-900">Email</label>
              <input type="email" id="email" className="text-black w-full mt-2 p-3 border rounded-lg" />
            </div>
            <div className="mb-6">
              <label htmlFor="mensagem" className="block text-lg sm:text-xl text-gray-900">Mensagem</label>
              <textarea id="mensagem" className="text-black w-full mt-2 p-3 border rounded-lg" rows={4}></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-lg sm:text-xl text-white py-3 sm:py-4 px-6 rounded-lg hover:bg-blue-700">Enviar</button>
          </form>
        </section>
    );
}