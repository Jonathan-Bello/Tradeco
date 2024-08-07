import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mjkbvaoa");

  if (state.succeeded) {
    return (
      <div className="container flex justify-center items-center px-4 py-16 md:py-24">
        <p className="text-xl lg:text-2xl text-center">
          <b className="inline-block text-3xl mb-4 font-semibold">
            ¡Gracias por contactarnos!
          </b>
          <br /> Nos pondremos en contacto contigo en breve
        </p>
      </div>
    );
  }

  return (
    <section className="container md:!max-w-screen-md px-4 py-16 md:py-24">
      <form
        onSubmit={handleSubmit}
        className="ContactForm grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <label htmlFor="name">
          Nombre y Apellido
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Ingresa tu nombre y apellido"
            required
          />
        </label>
        <ValidationError prefix="Nombre" field="name" errors={state.errors} />

        <label htmlFor="email">
          E-mail
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Ingresa tu E-mail"
            required
          />
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="whatsApp">
          Teléfono
          <input
            id="whatsApp"
            type="tel"
            name="whatsApp"
            placeholder="+506 0000000000"
            required
          />
        </label>
        <ValidationError
          prefix="whatsApp"
          field="whatsApp"
          errors={state.errors}
        />

        <label htmlFor="producto">
          ¿Qué producto es de tu interés?
          <select id="producto" type="tel" name="producto" defaultValue={""}>
            <option value="" disabled hidden>
              Selecciona una opción
            </option>
            <option value="Piso vinílico Artis LVT">Piso vinílico Artis LVT</option>
            <option value="Piso vinílico Artis SPC">Piso vinílico Artis SPC</option>
            <option value="Enchape Perdura Stone">Enchape Perdura Stone</option>
            <option value="Enchape Imperial Stone">Enchape Imperial Stone</option>
            <option value="Enchape Stona">Enchape Stona</option>
          </select>
        </label>
        <ValidationError
          prefix="producto"
          field="producto"
          errors={state.errors}
        />

        <label className="md:col-span-2" htmlFor="Mensaje">
          Mensaje
          <textarea
            id="Mensaje"
            type="text"
            name="Mensaje"
            placeholder="Escribe tu consulta"
            required
          />
        </label>
        <ValidationError
          prefix="Mensaje"
          field="Mensaje"
          errors={state.errors}
        />

        <div className="md:col-span-2">
          <button
            className="w-56 self-center text-center border-2 border-accent-500 text-accent-500 px-6 py-3 rounded-full hover:bg-accent-500 hover:text-white"
            type="submit"
            disabled={state.submitting}
          >
            Enviar consulta
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
