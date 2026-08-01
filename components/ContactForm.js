"use client";

import { useState } from "react";
import { company } from "@/lib/content";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // No backend yet — open the user's mail client with a prefilled message.
    const subject = `New enquiry from ${form.name || "website"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Service: ${form.service}`,
      "",
      form.message,
    ].join("\n");

    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setStatus("sent");
      if (typeof window !== "undefined") {
        window.location.href = mailto;
      }
    }, 600);
  };

  if (status === "sent") {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>
        <h3>Thank you, {form.name || "there"}!</h3>
        <p>
          Your email client should have opened with your message ready to send.
          If not, reach us directly at <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
        <button
          className="btn btn--ghost"
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", company: "", service: "", message: "" });
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Full name *</span>
          <input
            name="name"
            required
            value={form.name}
            onChange={update}
            placeholder="Jane Doe"
          />
        </label>
        <label className={styles.field}>
          <span>Work email *</span>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={update}
            placeholder="jane@company.com"
          />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span>Company</span>
          <input
            name="company"
            value={form.company}
            onChange={update}
            placeholder="Company name"
          />
        </label>
        <label className={styles.field}>
          <span>Service of interest</span>
          <select name="service" value={form.service} onChange={update}>
            <option value="">Select a service</option>
            <option>Web &amp; Mobile Applications</option>
            <option>Cloud &amp; DevOps</option>
            <option>Data &amp; AI</option>
            <option>Product &amp; UX Design</option>
            <option>Enterprise Software</option>
            <option>Managed Support</option>
          </select>
        </label>
      </div>

      <label className={styles.field}>
        <span>How can we help? *</span>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update}
          placeholder="Tell us a little about your project, goals and timeline…"
        />
      </label>

      <button
        type="submit"
        className="btn btn--primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      <p className={styles.note}>
        We typically reply within one business day.
      </p>
    </form>
  );
}
