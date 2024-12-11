import Footer from "../components/PageLayout/Footer";
import Header from "../components/PageLayout/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <Header />
      <main className="flex-grow w-full">
        <Hero />
        <div className="flex-grow container mx-auto px-4">
        <section id="moreinfo" className="text-center py-20">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900">Quem Somos?</h1>
            <p className="m-6 mt-8 text-2xl sm:text-3xl sm:m-8 text-gray-900">
                A ajudaEU é uma startup focada em oferecer acesso rápido, acessível e inclusivo a profissionais da saúde mental, especialmente para jovens entre 15 e 29 anos.
            </p>
        </section>
        <section id="funcionalidades" className="py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center">Funcionalidades</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900">Consulta Gratuita</h3>
                <p className="text-xl mt-4 text-gray-800">
                    Oferecemos acesso gratuito a psicólogos para até 2 consultas mensais de até 30 minutos.
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900">Planos de Acompanhamento</h3>
                <p className="text-xl mt-4 text-gray-800">
                    Planos acessíveis para consultas extras e acompanhamento psicológico regular.
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900">Ranking de Profissionais</h3>
                <p className="text-xl mt-4 text-gray-800">
                    Avalie os profissionais após cada consulta para garantir qualidade no atendimento.
                </p>
            </div>
        </div>
        </section>
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
        </div>
        
      </main>
      <Footer />
    </div>
  );
}