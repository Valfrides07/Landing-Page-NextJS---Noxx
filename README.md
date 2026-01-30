 Landing Page Animada com Next.js & Framer Motion

Este projeto é uma landing page moderna e responsiva, desenvolvida com Next.js, focada em apresentar conteúdo de forma elegante e fluida por meio de animações ativadas conforme o usuário rola a página.

A proposta é demonstrar como animações sutis, quando bem aplicadas, melhoram a experiência do usuário sem comprometer desempenho ou legibilidade.

Funcionalidades:

- Animação de entrada baseada em scroll

- Transições suaves e naturais com Framer Motion

- Layout responsivo e minimalista

- Paleta de cores pensada para projetos de tecnologia e IA

- Estrutura simples e reutilizável

Conceito de Animação:

- O projeto utiliza um componente reutilizável chamado ScrollReveal, responsável por animar qualquer conteúdo quando ele entra na área visível da tela.

Como funciona:

- O conteúdo inicia oculto (opacity: 0)

- Ao atingir 50% de visibilidade, ele surge suavemente

- A animação ocorre apenas uma vez (não repete ao subir/rolar novamente)

- Isso cria uma sensação de leitura fluida, comum em landing pages modernas.

Exemplo do componente ScrollReveal 
  - import { motion } from "framer-motion";

const ScrollReveal = ({ children, delay = 0.1, duration = 0.8 }) => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;


Esse componente pode ser aplicado a títulos, parágrafos ou seções inteiras.

Estilo Visual:

O CSS foi estruturado com variáveis para facilitar manutenção e personalização de temas:

Cores escuras com contraste suave

Accent color para destaques visuais

Tipografia legível e bem espaçada

Gradientes sutis no header e footer para profundidade visual

O foco foi manter um visual limpo, tecnológico e agradável para leitura.

Tecnologias Utilizadas:

Next.js

React

TypeScript

Framer Motion

CSS Modules

Como rodar o projeto localmente:
npm install
npm run dev


Depois, acesse:

http://localhost:3000

Observações finais:

Este projeto tem caráter demonstrativo, com foco em:

boas práticas de animação

organização de componentes

estética moderna para landing pages
