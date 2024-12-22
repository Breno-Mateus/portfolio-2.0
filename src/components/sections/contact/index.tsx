import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "../../../schema/contact-form"; 
import emailjs from '@emailjs/browser';
import FeedbackMessage from "../../feedback-message";
import { useState } from "react";

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const [ isMessage, setIsMessage ] = useState(false);

    const [ isValid, setIsValid ] = useState<boolean>();

    const handleSubmitForm = (data: ContactFormData) => {
        try {
            emailjs.send(
              "service_e2p6k0e",
              "template_bo2p4pa",
              {
                name: data.name,
                email: data.email,
                phone: data.phone,
                subject: data.subject,
                message: data.message,
              },
              "CqmKdfY4OtgySJ5V5",
            );

            setIsMessage(true);
            setIsValid(true);

            setTimeout(() => {
                setIsMessage(false);
                window.location.reload();
            }, 5000);

          } catch {
            setIsMessage(true);
            setIsValid(false);
          }
    };

    return (
        <section id="contact" className="bg-colorPrimary py-16 px-2 flex flex-col gap-16 items-center">
            <h1 className="text-3xl font-bold uppercase text-center">Entre em <span className="text-colorStyle">Contato</span></h1>

            <form className="flex flex-col gap-4 items-center md:w-[50%]" onSubmit={handleSubmit(handleSubmitForm)}>
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

            {isMessage === true &&  isValid === true && (<FeedbackMessage message="Mensagem enviada com sucesso!" valid={true}/>)}

            {isMessage === true &&  isValid === false && (<FeedbackMessage message="Erro ao enviar a mensagem!" valid={false}/>)}
            
        </section>
    )
};

export default Contact;