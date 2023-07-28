export default function Contact() {
  return (
    <section className="contact_container">
      <div>
        <div className="title">Newsletter</div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, eius.
        </p>
      </div>
      <form>
        <div className="inputs">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo" />
        </div>
        <button>Enviar</button>
      </form>
    </section>
  );
}
