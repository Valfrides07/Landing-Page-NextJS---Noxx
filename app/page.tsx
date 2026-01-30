"use client";
// biblioteca que vai adicionar animação ao scroll
import styles from "./styles.module.css";
import ScrollReveal from "./AnimScroll";
import { head } from "framer-motion/client";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* tittle */}
      <ScrollReveal delay={0.1}>
        <header className={styles.header_styles}>
          <h1 className={styles.h1_primeiro}>Inteligência Artificial no Cotidiano: uma aliada silenciosa, mas decisiva</h1>
        </header>
      </ScrollReveal>

      {/*  delay={0.2} configura o delay em que a frase sobe*/}
      <ScrollReveal delay={0.2}>
        <p className={styles.p_infos}>
          A Inteligência Artificial deixou de ser um conceito futurista restrito
          a filmes de ficção científica e laboratórios acadêmicos. Hoje, ela
          está integrada de forma quase invisível ao cotidiano das pessoas,
          influenciando desde a forma como consumimos conteúdo até como empresas
          tomam decisões estratégicas. Mais do que substituir humanos, a IA atua
          como uma extensão da capacidade humana de análise, criação e resolução
          de problemas. No dia a dia, sistemas baseados em IA organizam rotas em
          aplicativos de mobilidade, filtram e-mails, recomendam conteúdos em
          plataformas digitais e melhoram a experiência do usuário em serviços
          bancários, educacionais e de entretenimento. Essa presença constante
          não acontece por acaso: a IA é capaz de processar grandes volumes de
          dados, identificar padrões e aprender com eles em uma velocidade
          impossível para um ser humano.
          No dia a dia, sistemas baseados em IA organizam rotas em aplicativos de mobilidade, filtram e-mails, recomendam conteúdos em plataformas digitais e melhoram a experiência do usuário em serviços bancários, educacionais e de entretenimento. Essa presença constante não acontece por acaso: a IA é capaz de processar grandes volumes de dados, identificar padrões e aprender com eles em uma velocidade impossível para um ser humano.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <h2 className={styles.h2_infos}>IA como ferramenta de ampliação da inteligência humana</h2>

        <p className={styles.p_infos}>
          É um erro comum enxergar a Inteligência Artificial como uma entidade autônoma que “pensa sozinha”. Na prática, ela funciona como uma inteligência aumentada: um conjunto de modelos matemáticos e estatísticos treinados para auxiliar decisões humanas. O valor real da IA não está na substituição, mas na ampliação da capacidade cognitiva das pessoas.

          Em áreas como saúde, logística e finanças, algoritmos de IA ajudam profissionais a identificar riscos, prever cenários e reduzir erros. No ambiente corporativo, ela permite análises mais precisas, automação de tarefas repetitivas e maior foco em atividades estratégicas. O resultado é ganho de eficiência, redução de custos e aumento da qualidade dos serviços oferecidos.
        </p>
      </ScrollReveal>


      <ScrollReveal delay={0.4}>
        <h2 className={styles.h2_infos}>
          O impacto direto da IA no trabalho dos programadores
        </h2>

        <p className={styles.p_infos}>
          Para programadores, a Inteligência Artificial já se tornou uma ferramenta essencial. Assistentes de código, sistemas de autocompletar inteligente e ferramentas de análise estática ajudam a escrever código mais rápido, legível e seguro. Isso não elimina o papel do desenvolvedor, mas muda seu foco: menos tempo gasto em tarefas mecânicas e mais atenção à arquitetura, lógica e solução de problemas reais.

          Além disso, a IA auxilia na depuração de erros, na geração de testes automatizados e na compreensão de bases de código complexas. Para quem está aprendendo a programar, ela funciona como um tutor constante, explicando conceitos, sugerindo melhorias e acelerando o processo de aprendizado. Para profissionais experientes, é um multiplicador de produtividade.
        </p>

        <ScrollReveal delay={0.5}>
          <h2 className={styles.h2_infos}>
            IA como vantagem competitiva para empresas de tecnologia
          </h2>

          <p className={styles.p_infos}>
            Empresas de TI que adotam Inteligência Artificial de forma estratégica ganham uma vantagem competitiva clara. A IA permite escalar operações, personalizar produtos, analisar comportamento de usuários e antecipar tendências de mercado. Em um setor onde velocidade e inovação são cruciais, essa capacidade pode definir quem lidera e quem fica para trás.

            Além disso, a automação inteligente libera equipes para atividades de maior valor, reduz gargalos operacionais e melhora a tomada de decisão baseada em dados. Empresas que integram IA em seus processos não apenas aumentam a eficiência interna, mas também entregam soluções mais inteligentes e adaptadas às necessidades dos clientes.
          </p>

        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <h2 className={styles.h2_infos}>
            O futuro da IA: colaboração, não substituição
          </h2>

          <p className={styles.p_infos}>
            O futuro da Inteligência Artificial não aponta para um cenário de substituição em massa, mas para uma colaboração cada vez mais profunda entre humanos e máquinas. Profissionais que entendem como utilizar a IA a seu favor tendem a se destacar em um mercado cada vez mais competitivo e orientado por dados.

            Dominar IA não significa criar modelos complexos do zero, mas compreender suas possibilidades, limitações e aplicações práticas. Em um mundo onde a informação cresce exponencialmente, a IA se torna uma ferramenta essencial para transformar dados em conhecimento e conhecimento em ação.
          </p>

        </ScrollReveal>

        <footer className={styles.footer_}>
          <p>Desenvolvido por Dev: Valfrides - 2026</p>
        </footer>


      </ScrollReveal>
    </main>
  );
}
