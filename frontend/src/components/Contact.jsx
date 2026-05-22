import React, { useState } from "react";
import axios from "axios";
import SectionHeading from "./SectionHeading";
import { PROFILE } from "../data/portfolio";
import { Mail, Phone, Linkedin, Github, Send, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in every field.");
      return;
    }
    setStatus("loading");
    try {
      await axios.post(`${API}/contact`, form);
      setStatus("success");
      toast.success("Message sent — I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    } catch (err) {
      setStatus("error");
      const detail =
        err?.response?.data?.detail ||
        "Couldn't send your message. Please email me directly.";
      toast.error(detail);
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 border-t border-[#141414] bg-[#080808]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          id="contact"
          kicker="06 / Contact"
          title="Let's build something."
          description="Hiring, collaborating, or just want to say hi? Drop a note — I read every message."
        />

        <div className="grid grid-cols-12 gap-8">
          {/* Direct contact info */}
          <div className="col-span-12 lg:col-span-5">
            <div className="space-y-6">
              <ContactRow
                icon={Mail}
                label="Email"
                value={PROFILE.email}
                href={`mailto:${PROFILE.email}`}
                testid="contact-email"
              />
              <ContactRow
                icon={Phone}
                label="Phone"
                value={PROFILE.phone}
                href={`tel:${PROFILE.phone.replace(/[^0-9+]/g, "")}`}
                testid="contact-phone"
              />
              <ContactRow
                icon={Linkedin}
                label="LinkedIn"
                value="guillaume-girishya"
                href={PROFILE.linkedin}
                testid="contact-linkedin"
              />
              <ContactRow
                icon={Github}
                label="GitHub"
                value="GGirishya"
                href={PROFILE.github}
                testid="contact-github"
              />
            </div>

            <div className="mt-10 p-6 border border-[#27272A] bg-[#0C0C0C]">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FFB000] mb-2">
                Availability
              </p>
              <p className="text-[#F4F4F5]">
                Recently graduated — open to{" "}
                <span className="text-[#FFB000]">full-time SWE / front-end</span>{" "}
                roles, and freelance projects.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {PROFILE.workModes.map((m) => (
                  <span
                    key={m}
                    data-testid={`work-mode-${m.toLowerCase()}`}
                    className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F4F4F5] border border-[#27272A] px-2.5 py-1"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            data-testid="contact-form"
            noValidate
            className="col-span-12 lg:col-span-7 border border-[#27272A] bg-[#0C0C0C] p-6 md:p-10 space-y-6"
          >
            <Field
              label="Your name"
              htmlFor="contact-name"
            >
              <input
                id="contact-name"
                data-testid="contact-name-input"
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Ada Lovelace"
                className="w-full bg-[#050505] border border-[#27272A] px-4 py-3 text-[#F4F4F5] placeholder:text-[#52525B] focus:outline-none focus:border-[#FFB000] transition-colors"
                required
              />
            </Field>

            <Field label="Email" htmlFor="contact-email-input">
              <input
                id="contact-email-input"
                data-testid="contact-email-input"
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="ada@analytical.engine"
                className="w-full bg-[#050505] border border-[#27272A] px-4 py-3 text-[#F4F4F5] placeholder:text-[#52525B] focus:outline-none focus:border-[#FFB000] transition-colors"
                required
              />
            </Field>

            <Field label="Message" htmlFor="contact-message">
              <textarea
                id="contact-message"
                data-testid="contact-message-input"
                rows={6}
                value={form.message}
                onChange={update("message")}
                placeholder="Tell me about the role, project, or idea…"
                className="w-full bg-[#050505] border border-[#27272A] px-4 py-3 text-[#F4F4F5] placeholder:text-[#52525B] focus:outline-none focus:border-[#FFB000] transition-colors resize-y"
                required
              />
            </Field>

            <button
              type="submit"
              data-testid="contact-submit-button"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 bg-[#FFB000] text-black font-semibold px-7 py-3.5 hover:bg-[#E59E00] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(255,176,0,0.35)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : status === "success" ? (
                <>
                  <Check size={16} />
                  Sent
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href, testid }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      data-testid={testid}
      className="group flex items-center gap-5 p-5 border border-[#27272A] bg-[#0C0C0C] hover:border-[#FFB000]/60 transition-colors"
    >
      <div className="p-3 border border-[#27272A] bg-[#141414] group-hover:border-[#FFB000]/60 transition-colors">
        <Icon size={18} className="text-[#FFB000]" />
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#71717A]">
          {label}
        </p>
        <p className="text-[#F4F4F5] group-hover:text-[#FFB000] transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[#A1A1AA] mb-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
