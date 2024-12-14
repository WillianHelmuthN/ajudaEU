import CardsPlans from "./CardsPlans";

export default function PesonalPlans() {
  const plans = [
    {
      title: 'Plano Gratuito',
      descriptions: [
        'Tenha acesso limitado a profissionais gratuitamente de acordo com a disponibilidade.',
        'Primeira consulta de 30 minutos gratuita.'
      ],
      price: 'Grátis!',
      buttonText: 'Cadastra-se agora',
      link: '#contato',
    },
    {
      title: 'Plano Básico',
      descriptions: [
        'Acesso completo na plataforma.',
        '2 consultas por mês de uma hora.'
      ],
      price: 'R$59/mês',
      buttonText: 'Assine Agora',
      link: '#contato',
    },
    {
      title: 'Plano Premium',
      descriptions: [
        'Acompanhamento semanal com profissional a sua escolha.',
        'Atendimento rápido incluso com prioridade na fila.',
        '4 consultas de 1 hora inclusas.'
      ],
      price: 'R$109/mês',
      buttonText: 'Assine Agora',
      link: '#contato',
    },
    {
      title: 'Plano UltraMasterPlus Megazord',
      descriptions: ['Acesso ilimitado a todas as funcionalidades.'],
      price: 'R$299/mês',
      buttonText: 'Assine Agora',
      link: '#contato',
    },
  ];

  return (
    <section id="planos" className="py-20 bg-gray-50 rounded-lg shadow-md w-full">
      <h2 className="text-4xl font-bold text-gray-900 text-center">Planos Individuais</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <CardsPlans 
            key={index}
            title={plan.title}
            descriptions={plan.descriptions}
            price={plan.price}
            buttonText={plan.buttonText}
            link={plan.link}
          />
        ))}
      </div>
    </section>
  );
}
