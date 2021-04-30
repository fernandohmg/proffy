import React from "react";
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";
import "./styles.css";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

function TeacherItem({ teacher }: TeacherItemProps) {
  function createNewConnection() {
    api.post("connections", { user_id: teacher.id });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora <strong>R${teacher.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}?text=Ol%C3%A1%2C%20estou%20interessado%20nas%20suas%20aulas%21`}
          rel="noreferrer"
        >
          <img src={whatsAppIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
