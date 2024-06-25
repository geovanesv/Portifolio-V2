"use client";

import z from "zod";
import { FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast } from "../ui/ReactToast";
import { sendMail } from "@/src/lib/mail";
import { getContactFormHtml } from "@/src/lib/template/contact-form";

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will trigger only once when it comes into view
    threshold: 0.3, // Percentage of element visible to trigger the animation
  });

  const contactSchema = z.object({
    firstName: z.string().min(1, { message: "Insira o seu nome" }),
    lastName: z.string().min(1, { message: "Insira o seu sobrenome" }),
    email: z
      .string()
      .min(1, { message: "Insira o seu E-mail" })
      .email({ message: "E-mail inválido" }),
    message: z.string().min(1, { message: "Insira a sua mensagem" }),
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);

    const typeCheck = contactSchema.safeParse({
      firstName: formdata.get("firstName"),
      lastName: formdata.get("lastName"),
      email: formdata.get("email"),
      message: formdata.get("message"),
    });

    if (!typeCheck.success) {
      toast.warn(typeCheck.error.issues[0].message);
      return;
    }

    try {
      const id = toast.loading("Enviando E-mail...");

      const html = getContactFormHtml(typeCheck.data);

      const res = await sendMail({
        to: "",
        name: "",
        subject: "Portfolio Form",
        body: html,
      });

      if (!res) {
        toast.update(id, {
          render: "Não foi possível enviar o e-mail!",
          type: "error",
          isLoading: false,
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: true,
        });
      } else {
        toast.update(id, {
          render: "E-mail enviado Successfully",
          type: "success",
          isLoading: false,
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          closeButton: true,
        });
      }
    } catch (error) {
      console.error("Got Error:", error);
    }
  };

  return (
    <section
      className="w-full bg-transparent text-white p-[3.4em] md:p-[10em] grid place-content-center relative z-10"
      id="contact"
      ref={ref}
    >
      <div className="text-center mb-4 md:mb-8">
        <h2>Contato</h2>
        <h3>Envie um E-mail</h3>
      </div>

      <motion.form
        initial={{ opacity: 0, scale: 0.6 }} // Initial animation values
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0.6,
        }} // Target animation values
        transition={{ duration: 0.7 }} // Animation duration
        className="w-full max-w-lg"
        onSubmit={handleSubmit}
        noValidate={true}
      >
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
              Nome
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-[#1fbeda] rounded-lg py-2 md:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Nome"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
              Sobrenome
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-[#1fbeda] rounded-lg py-2 md:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Sobrenome"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
              Seu E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-[#1fbeda] rounded-lg py-2 md:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="username"
              type="email"
              name="email"
              placeholder="E-mail"
            />
          </div>
          <div className="md:mb-6 w-full">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
              Sua Mensagem
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-[#1fbeda] rounded-lg py-2 md:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="txtmessage"
              name="message"
              placeholder="Mensagem"
              rows={5}
            />
          </div>
        </div>

        <div className="mt-8 md:mt-0 text-center w-auto">
          <button className={"text-center"} id="btn">
            Enviar <i className="uil uil-message"></i>
          </button>
        </div>
      </motion.form>
    </section>
  );
}

export default Contact;
