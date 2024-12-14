import CardsPlans from "./CardsPlans";

export default function BusinessPlans() {
  const plans = [
    {
      title: 'Plano Sob-Medida',
      descriptions: [
        'Entre em contato gratuitamente, valor de acordo com o tamanho e necessidade da equipe.'
      ],
      price: 'Consulte!',
      buttonText: 'Entrar em contato',
      link: '#contato',
    },
  ];

  return (
    <section 
      id="planos" 
      className="py-10 bg-gray-50 rounded-lg shadow-md w-full flex items-center justify-center"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center">Planos Individuais</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 place-items-center">
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
      </div>
    </section>
  );
}
