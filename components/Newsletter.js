"use client";

import { useState } from "react";

export default function Newsletter() {
  const [message, setMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    setMessage("Sending...");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.get("email") }),
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <section className="newsletter">
      <div className="container newsletterInner">
        <div>
          <span>STAY UPDATED</span>
          <h2>Fresh news, straight to your inbox.</h2>
          <p>Product updates, helpful nutrition ideas and brand stories.</p>
        </div>
        <form onSubmit={submit}>
          <input name="email" type="email" required placeholder="Enter your email address" />
          <button>Subscribe</button>
        </form>
      </div>
      {message && <div className="newsletterMessage">{message}</div>}
    </section>
  );
}
