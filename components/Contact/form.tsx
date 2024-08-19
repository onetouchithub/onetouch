"use client";

import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("", "", form.current, {
        publicKey: "",
      })
      .then(
        () => {
          toast.success("Email send successfully", {
            description: "Our team will connect you ASAP!",
          });
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send mail", {
            description: "contact us at info@onetouch.ae",
          });
          setLoading(false);
        },
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
        <div className="w-full px-4">
          <div className="mb-8">
            <label
              htmlFor="message"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Enter your Message"
              className="w-full resize-none rounded-lg border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            ></textarea>
          </div>
        </div>
        <div className="w-full px-4">
          <button
            disabled={loading}
            className="rounded-lg bg-primary px-4 py-1 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          >
            {loading ? <Loader className="h-6 w-6 animate-spin" /> : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
