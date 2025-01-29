import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "../schema/contact-form";
import emailjs from '@emailjs/browser';

export function useContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const [feedbackStatus, setFeedbackStatus] = useState<"success" | "error" | null>(null);

    const onSubmit = async (data: ContactFormData) => {
        try {
            await emailjs.send(
                "service_e2p6k0e",
                "template_bo2p4pa",
                {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    subject: data.subject,
                    message: data.message,
                },
                "CqmKdfY4OtgySJ5V5"
            );

            setFeedbackStatus("success");
            reset(); // Reseta o formulário após o envio
        } catch {
            setFeedbackStatus("error");
        }

        setTimeout(() => setFeedbackStatus(null), 5000);
    };

    return { register, handleSubmit, errors, onSubmit, feedbackStatus };
}
