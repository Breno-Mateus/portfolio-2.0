import Inputs from "../../inputs";

const Contact = () => {
    return (
        <section id="contact" className="bg-colorPrimary py-16 px-2 flex flex-col gap-16 items-center">
            <h1 className="text-3xl font-bold uppercase text-center">Entre em <span className="text-colorStyle">Contato</span></h1>

            <form className="flex flex-col gap-4 items-center md:w-[50%]">
                <div className="flex gap-2 font-light">
                    <Inputs htmlForId="name" type="text" label="Nome Completo"/>
                    <Inputs htmlForId="email" type="email" label="Endereço de E-mail"/>
                </div>

                <div className="flex gap-2 font-light">
                    <Inputs htmlForId="phone" type="number" label="Telefone"/>
                    <Inputs htmlForId="subject" type="text" label="Assunto do E-mail"/>
                </div>

                <div className="flex flex-col w-full font-light">
                    <label>Sua mensagem</label>
                    <textarea className="bg-colorSecondary w-full h-28 rounded-md p-2 focus:outline-none focus:bg-colorSecondary"/>
                </div>

                <button className="bg-colorStyle w-[30%] p-2 rounded-md font-light hover:opacity-80 hover:cursor-pointer">Enviar</button>
            </form>
        </section>
    )
};

export default Contact;