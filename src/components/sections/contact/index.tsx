import FeedbackMessage from "../../feedback-message";
import { useContactForm } from "../../../hooks/useContactForm";

const Contact = () => {

    const { register, handleSubmit, errors, onSubmit, feedbackStatus } = useContactForm();
     

    return (
        <section id="contact" className="bg-colorPrimary py-16 px-2 flex flex-col gap-16 items-center">
            <h1 className="text-3xl font-bold uppercase text-center">Entre em <span className="text-colorStyle">Contato</span></h1>

            <form className="flex flex-col gap-4 items-center md:w-[50%]" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-2 font-light">
                    <div className="w-[50%]">
                        <label htmlFor="name">Nome completo</label>
                        <input type="text" id="name" className="bg-colorSecondary w-full rounded-md p-2 focus:outline-none focus:bg-colorSecondary" {...register("name")}/>
                        {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
                    </div>

                    <div className="w-[50%]">
                        <label htmlFor="email">Endereço de E-mail</label>
                        <input type="email" id="email" className="bg-colorSecondary w-full rounded-md p-2 focus:outline-none focus:bg-colorSecondary" {...register("email")}/>
                        {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="flex gap-2 font-light">
                    <div className="w-[50%]">
                        <label htmlFor="phone">Telefone</label>
                        <input type="number" id="phone" className="bg-colorSecondary w-full rounded-md p-2 focus:outline-none focus:bg-colorSecondary" {...register("phone")}/>
                        {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
                    </div>

                    <div className="w-[50%]">
                        <label htmlFor="subject">Assunto do E-mail</label>
                        <input type="text" id="subject" className="bg-colorSecondary w-full rounded-md p-2 focus:outline-none focus:bg-colorSecondary" {...register("subject")}/>
                        {errors.subject && <p className="text-xs text-red-600">{errors.subject.message}</p>}
                    </div>
                </div>

                <div className="flex flex-col w-full font-light">
                    <label>Sua mensagem</label>
                    <textarea className="bg-colorSecondary w-full h-28 rounded-md p-2 focus:outline-none focus:bg-colorSecondary" {...register("message")}/>
                    {errors.message && <p className="text-xs text-red-600">{errors.message.message}</p>}
                </div>

                <button className="bg-colorStyle w-[30%] p-2 rounded-md font-light hover:opacity-80 hover:cursor-pointer" type="submit">Enviar</button>
            </form>

            {feedbackStatus === "success" && (<FeedbackMessage message="Mensagem enviada com sucesso!" valid={true}/>)}

            {feedbackStatus === "error" && (<FeedbackMessage message="Erro ao enviar a mensagem!" valid={false}/>)}
            
        </section>
    )
};

export default Contact;