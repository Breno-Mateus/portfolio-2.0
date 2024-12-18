const Contact = () => {
    return (
        <section id="contact" className="bg-colorPrimary py-16 px-2 flex flex-col gap-16 items-center">
            <h1 className="text-3xl font-bold uppercase text-center">Entre em <span className="text-colorStyle">Contato</span></h1>

            <form className="flex flex-col gap-4 items-center md:w-[50%]">
                <div className="flex gap-2 font-light">
                    <div className="w-[50%]">
                        <label htmlFor="name">Nome Completo</label>
                        <input type="text" id="name" className="bg-colorSecondary w-full rounded-md p-2 focus:outline-none focus:bg-colorSecondary"/>
                    </div>

                    <div className="w-[50%]">
                        <label htmlFor="email">Endereço de E-mail</label>
                        <input type="text" id="email" className="bg-colorSecondary w-full rounded-md p-2 focus:outline-none focus:bg-colorSecondary"/>
                    </div>
                </div>

                <div className="flex gap-2 font-light">
                    <div className="w-[50%]">
                        <label htmlFor="phone">Telefone</label>
                        <input type="text" id="phone" className="bg-colorSecondary w-full rounded-md p-2 focus:outline-none focus:bg-colorSecondary"/>
                    </div>

                    <div className="w-[50%]">
                        <label htmlFor="subject">Assunto do E-mail</label>
                        <input type="text" id="subject" className="bg-colorSecondary w-full rounded-md p-2 focus:outline-none focus:bg-colorSecondary"/>
                    </div>
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