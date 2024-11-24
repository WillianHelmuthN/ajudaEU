export default function Planos() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Nossos Planos de Assinatura</h1>
      <p className="text-lg text-center mb-12">
        Escolha o plano que melhor se adapta às suas necessidades e aproveite todos os benefícios que oferecemos.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Plano Básico */}
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          <div className="border border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Plano Básico</h2>
              <p className="text-gray-700 text-base">
                Ideal para iniciantes que desejam explorar nossos serviços com um investimento mínimo.
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-3xl font-bold">R$29,90</span>
              <span className="text-base ml-2">/mês</span>
            </div>
            <ul className="mt-4 list-disc list-inside">
              <li>Acesso a conteúdos básicos</li>
              <li>Suporte via e-mail</li>
              <li>Atualizações mensais</li>
            </ul>
          </div>
        </div>
        {/* Plano Premium */}
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          <div className="border border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Plano Premium</h2>
              <p className="text-gray-700 text-base">
                Perfeito para usuários que buscam uma experiência completa com recursos avançados.
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-3xl font-bold">R$59,90</span>
              <span className="text-base ml-2">/mês</span>
            </div>
            <ul className="mt-4 list-disc list-inside">
              <li>Todos os benefícios do Plano Básico</li>
              <li>Acesso a conteúdos exclusivos</li>
              <li>Suporte prioritário</li>
              <li>Atualizações semanais</li>
            </ul>
          </div>
        </div>
        {/* Plano Empresarial */}
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          <div className="border border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Plano Empresarial</h2>
              <p className="text-gray-700 text-base">
                Solução completa para empresas que buscam maximizar resultados com nossa plataforma.
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-3xl font-bold">R$99,90</span>
              <span className="text-base ml-2">/mês</span>
            </div>
            <ul className="mt-4 list-disc list-inside">
              <li>Todos os benefícios do Plano Premium</li>
              <li>Relatórios personalizados</li>
              <li>Consultoria dedicada</li>
              <li>Treinamentos exclusivos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
