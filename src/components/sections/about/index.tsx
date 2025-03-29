import Breno from "../../../assets/foto_breno.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-colorSecondary flex flex-col items-center py-16 px-[10%] gap-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold uppercase">
        Sobre <span className="text-colorStyle">Mim</span>
      </h2>
      <div className="flex flex-col items-center justify-between gap-12">
        <img
          src={Breno}
          alt="Foto de perfil de Breno Mateus"
          className="w-[50%] md:w-[15%] rounded-full border-[1px] border-colorStyle"
        />
        <p className="text-justify md:w-[70%] font-light">
          Desenvolvedor front-end com atuação em React.js e Next.js, criando
          interfaces responsivas e acessíveis. Experiência na criação e
          integração de dados para plataformas de e-commerce e do
          desenvolvimento de soluções voltadas para comunidades de
          desenvolvedores. Busco minha primeira oportunidade profissional como
          desenvolvedor front-end júnior para aplicar meus conhecimentos,
          contribuindo com soluções eficientes e aprimorando minhas habilidades
          de comunicação, trabalho em equipe e aprendizado contínuo em um
          ambiente desafiador.
        </p>
      </div>
    </section>
  );
};

export default About;
