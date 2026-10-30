"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "./icons";

export function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `${message}\n\n— ${name}`;
    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject || "Website enquiry",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <p className="form__title">Compose message</p>

      <div className="field">
        <label htmlFor="cf-name">Your name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Mkhize"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="cf-subject">Subject</label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          placeholder="Graduate role / collaboration"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="What are you building, and where could I help?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn--primary" style={{ justifyContent: "center" }}>
        Open in mail app <ArrowUpRight />
      </button>

      <p className="form__note">
        This form opens your email client with the message prefilled. Nothing is stored or sent
        from this site.
      </p>
    </form>
  );
}
