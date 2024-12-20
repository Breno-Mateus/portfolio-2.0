import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string().min(2, "O nome precisa ter pelo menos 2 caracteres"),
    email: z.string().email("Informe um email válido"),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Informe um número de telefone válido"),
    subject: z.string().min(3, "O assunto precisa ter pelo menos 3 caracteres"),
    message: z.string().min(10, "A mensagem precisa ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;