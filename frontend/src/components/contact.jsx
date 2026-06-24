import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { profile } from "../data/portfolio";
import { Meander, GoldRule } from "./ornaments";

const FORMSPREE_URL = "https://formspree.io/f/xjgqgjan";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("A whole tablet, please — name, email, and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(FORMSPREE_URL, form, {
        headers: {
          'Accept': 'application/json'
        }
      });
      toast.success("Your message has been carved in stone. I'll reply soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast.error("The oracle did not answer. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-32 md:py-44 marble-bg"
    >
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: "Outfit, sans-serif",
            background: "#1a1a1a",
            color: "#f9f6f0",
            border: "1px solid #d4af37",
            borderRadius: 0,
          },
        }}
      />
      <Meander className="absolute top-0 left-0 right-0" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="font-accent text-[11px] text-[#5c5c5c] mb-6">
              · VI · SEND WORD
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              Begin a <em className="text-[#997a15]">dialogue</em>.
            </h2>
            <p className="mt-8 font-body text-[#5c5c5c] max-w-md leading-relaxed">
              Whether it's a collaboration, an internship lead, or simply a
              question about something I've built — I read every message.
            </p>

            <div className="mt-10 space-y-4">
              <div>
                <p className="font-accent text-[10px] text-[#5c5c5c]">EMAIL</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="gold-link font-display text-xl"
                  data-testid="contact-email-link"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="font-accent text-[10px] text-[#5c5c5c]">
                  ELSEWHERE
                </p>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                  {profile.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="gold-link font-accent text-[11px]"
                      data-testid={`contact-social-${s.label.toLowerCase()}`}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-7">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            onSubmit={onSubmit}
            data-testid="contact-form"
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <label className="block">
                <span className="font-accent text-[10px] text-[#5c5c5c]">
                  NAME
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className="museum-input"
                  data-testid="contact-input-name"
                  required
                />
              </label>
              <label className="block">
                <span className="font-accent text-[10px] text-[#5c5c5c]">
                  EMAIL
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@domain.com"
                  className="museum-input"
                  data-testid="contact-input-email"
                  required
                />
              </label>
            </div>

            <label className="block">
              <span className="font-accent text-[10px] text-[#5c5c5c]">
                SUBJECT
              </span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={update("subject")}
                placeholder="What shall we speak of?"
                className="museum-input"
                data-testid="contact-input-subject"
              />
            </label>

            <label className="block">
              <span className="font-accent text-[10px] text-[#5c5c5c]">
                MESSAGE
              </span>
              <textarea
                name="message"
                value={form.message}
                onChange={update("message")}
                placeholder="Inscribe your thoughts here..."
                className="museum-input"
                rows={5}
                data-testid="contact-input-message"
                required
              />
            </label>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="font-body text-xs text-[#5c5c5c] max-w-md">
                By sending, you consent to be contacted regarding your enquiry.
              </p>
              <button
                type="submit"
                disabled={loading}
                className="btn-ink disabled:opacity-50"
                data-testid="contact-submit"
              >
                {loading ? "Sending…" : "Dispatch Message"}
              </button>
            </div>

            <div className="pt-4">
              <GoldRule />
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
