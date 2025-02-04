import Breno from "../../../assets/foto_breno.jpeg";

const About = () => {
    return (
        <section id="about" className="bg-colorSecondary flex flex-col items-center py-16 px-[10%] gap-16">
            <h1 className="text-3xl md:text-4xl font-bold uppercase">Sobre <span className="text-colorStyle">Mim</span></h1>
            <div className="flex flex-col items-center justify-between gap-12">
                <img src={Breno} alt="" className="w-[50%] md:w-[15%] rounded-full border-[1px] border-colorStyle"/>
                <p className="text-justify md:w-[70%] font-light">Sou um profissional dedicado, com experiência em desenvolvimento web e conhecimento em tecnologias como React.js, JavaScript, TypeScript e Node.js. Já atuei em funções técnicas que me permitiram desenvolver habilidades em supervisão, comunicação e resolução de problemas. Estou sempre buscando aprender e aprimorar minhas competências para contribuir de forma eficaz em novos desafios e projetos.</p>
            </div>
        </section>
    )
};

export default About;