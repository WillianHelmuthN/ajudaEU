import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';

export default function PageSignUp() {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Imagem de Fundo */}
      <Image
        src="/cadastro.jpeg"
        alt="Imagem de Cadastro"
        layout="fill"
        objectFit="cover"
        priority
        className="-z-10"
      />

      {/* Formulário de Cadastro */}
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg z-10">
        <SignUp routing="hash" />
      </div>
    </div>
  );
}
