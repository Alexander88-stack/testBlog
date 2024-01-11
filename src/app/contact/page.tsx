"use client";
import { useState } from "react";

import styles from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
    const data = await res.json();
    if (data.errors) {
      setErrors(data.errors);
    } else {
      setName("");
      setEmail("");
      setMessage("");
      setErrors({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      <div className={styles.contactForm}>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div className={styles.error}>{errors.name}</div>}
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}
          </label>
          <label>
            Mensaje:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <div className={styles.error}>{errors.message}</div>
            )}
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
