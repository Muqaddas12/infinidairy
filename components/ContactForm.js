"use client";

import { useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    setMessage("Sending...");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
      }),
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <form className="contactForm" onSubmit={submit}>
      <label>Name<input name="name" required placeholder="Your name" /></label>
      <label>Email<input name="email" required type="email" placeholder="you@example.com" /></label>
      <label>Message<textarea name="message" required rows="5" placeholder="How can we help?" /></label>
      <button className="primaryBtn">Send message →</button>
      {message && <p className="formMessage">{message}</p>}
    </form>
  );
}
