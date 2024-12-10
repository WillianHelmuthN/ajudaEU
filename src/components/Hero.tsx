/**
 * Componente que carrega o banner principal da página, com o vídeo de fundo e o texto de boas-vindas.
 * @returns {JSX.Element} O componente Hero.
 */
export default function Hero() {
    return (
        <section className="relative h-screen text-white">
            {/* Vídeo de fundo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                {/* Para modificar o vídeo basta substituir o arquivo Banner.mp4 na pasta public */}
                <source src="Banner.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>

            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8">
                <h1 className="text-8xl font-extrabold">Bem-vindo à ajudaEU</h1>
                <p className="mt-8 text-4xl font-bold">
                    Trazendo mais acessibilidade no acesso a profissionais da saúde mental
                </p>
                <a
                    href="#funcionalidades"
                    className="text-2xl mt-10 inline-block bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-500"
                >
                    Saiba Mais
                </a>
            </div>
        </section>
    );
}
