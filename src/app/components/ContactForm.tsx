"use client";

import { FormEvent, useState } from "react";

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: "idle",
      message: "",
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error || "The message could not be sent.");
      }

      form.reset();

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-black/60"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-black outline-none transition placeholder:text-neutral-400 focus:border-black"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-black/60"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-black outline-none transition placeholder:text-neutral-400 focus:border-black"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-black/60"
        >
          Subject
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          required
          maxLength={150}
          className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-black outline-none transition placeholder:text-neutral-400 focus:border-black"
          placeholder="How can we help?"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-black/60"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={6}
          className="w-full resize-y rounded-xl border border-black/20 bg-white px-4 py-3 text-black outline-none transition placeholder:text-neutral-400 focus:border-black"
          placeholder="Tell us about your question or collection."
        />
      </div>

      {/* Hidden bot-protection field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status.type !== "idle" && (
        <p
          role="status"
          className={`text-sm font-medium ${
            status.type === "success"
              ? "text-green-800"
              : "text-red-800"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}