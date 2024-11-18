import React from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";

function Contact({ contact, onDelete }) {
  return (
    <div className={s.item}>
      <div className={s.info}>
        <div className={s.contactInfo}>
          <FaUser className={s.icon} />
          <p className={s.text}>{contact.name}</p>
        </div>
        <div className={s.contactInfo}>
          <FaPhone className={s.icon} />
          <p className={s.number}>{contact.number}</p>
        </div>
      </div>
      {/* Delete button */}
      <button className={s.button} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
