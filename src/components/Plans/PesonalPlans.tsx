import LearMorePlans from "./LearMorePlans";

export default function PesonalPlans() {
    return (

        <section id="precos" className="py-20 bg-gray-50 rounded-lg shadow-md w-full">
          <h2 className="text-4xl font-bold text-gray-900 text-center">Planos Individuais</h2>
          <div className="mt-10 flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h3 className="text-3xl font-semibold text-gray-900">Plano Gratuito</h3>
              <div className="mt-4 text-lg text-gray-900">
                <p>Tenha acesso limitado a profissionais gratuitamente de acordo com a disponibilidade.</p>
                <br />
                <p>Primeira consulta de 30 minutos gratuita</p>
                <LearMorePlans />
              </div>
              <p className="mt-4 text-4xl font-bold text-gray-900">Grátis!</p>
              <a href="#contato" className="mt-8 inline-block bg-green-600 text-white text-lg py-3 px-6 rounded-lg hover:bg-green-700">Cadastra-se agora</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h3 className="text-3xl font-semibold text-gray-900">Plano Básico</h3>
                <p className="mt-4 text-lg text-gray-900">Acesso completo na plataforma </p>
              <p className="mt-4 text-lg text-gray-900">2 consultas por mês de uma hora </p>
                <LearMorePlans />
              <p className="mt-4 text-4xl font-bold text-gray-900">R$59/mês</p>
              <a href="#contato" className="mt-8 inline-block bg-green-600 text-white text-lg py-3 px-6 rounded-lg hover:bg-green-700">Assine Agora</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h3 className="text-3xl font-semibold text-gray-900">Plano Premium</h3>
              <p className="mt-4 text-lg text-gray-900">Acompanhamento semanal com profissional a sua escolha. Atendimento rápido incluso com prioridade na fila</p>
              <br />
              <p className="text-gray-900">4 consulta de 1 hora inclusas</p>
              <LearMorePlans />
              <p className="mt-4 text-4xl font-bold text-gray-900">R$109/mês</p>
              <a href="#contato" className="mt-8 inline-block bg-green-600 text-white text-lg py-3 px-6 rounded-lg hover:bg-green-700">Assine Agora</a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h3 className="text-3xl font-semibold text-gray-900">Plano UltraMasterPlus Megazord</h3>
              <p className="mt-4 text-lg text-gray-900">Acesso ilimitado a todas as funcionalidades.</p>
              <p className="mt-4 text-4xl font-bold text-gray-900">R$299/mês</p>
              <a href="#contato" className="mt-8 inline-block bg-green-600 text-white text-lg py-3 px-6 rounded-lg hover:bg-green-700">Assine Agora</a>
            </div>
          </div>
        </section>
    );
}
