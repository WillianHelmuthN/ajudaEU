interface CardPlanProps {
  title: string;
  descriptions: string[];
  price: string;
  buttonText: string;
  link: string;
}

export default function CardsPlans({ title, descriptions, price, buttonText, link }: CardPlanProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
      <div className="mt-4 text-lg text-gray-900">
        {descriptions.map((desc, index) => (
          <p key={index} className="mt-2">{desc}</p>
        ))}
      </div>
      <p className="mt-4 text-4xl font-bold text-gray-900">{price}</p>
      <a 
        href={link} 
        className="mt-8 inline-block bg-green-600 text-white text-lg py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
      >
        {buttonText}
      </a>
    </div>
  );
}
