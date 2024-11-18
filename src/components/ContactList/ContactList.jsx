import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  return (
    <div className={s.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ContactList;
