import Dev from "../../../assets/undraw_online_transactions_-02-ka.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-colorPrimary flex flex-col md:flex-row justify-center md:justify-between items-center py-16 px-[10%] gap-20 min-h-screen"
    >
      <div className="flex flex-col gap-4 md:w-[38%]">
        <h1 className="leading-none text-[1.5rem] md:text-[2rem] font-extrabold text-colorStyle">
          &lt; Desenvolvedor Frontend &gt;
        </h1>
        <p className="leading-tight text-sm md:text-base font-light">
          Sou apaixonado por desenvolver interfaces web modernas e escaláveis,
          criando experiências interativas e funcionais que encantam e atendem
          às necessidades dos usuários!
        </p>
        <a
          href="/Currículo.pdf"
          className="bg-colorStyle text-xs text-center md:text-base py-1 px-2 rounded-md hover:opacity-85 font-medium w-[40%] md:w-[80%] lg:w-[40%]"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Baixar meu currículo em PDF"
        >
          Download CV
        </a>
      </div>

      <img
        src={Dev}
        className="w-[80%] md:w-[50%] md:h-[50%]"
        alt="Imagem de diferentes telas conectadas"
      />
    </section>
  );
};

export default Home;
