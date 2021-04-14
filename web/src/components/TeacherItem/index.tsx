import React from "react";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars.githubusercontent.com/u/5559337?v=4"
          alt="avatar"
        />
        <div>
          <strong>Fernando Henrique</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        <br />
        <br /> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
        sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
        aliquet nec, vulputate
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$80,00</strong>
        </p>
        <button>
          <img src={whatsAppIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
