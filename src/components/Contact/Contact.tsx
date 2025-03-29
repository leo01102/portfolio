/* src/components/Contact/Contact.tsx */

import React, {
  useState,
  FormEvent,
  ChangeEvent,
  useRef,
  useEffect,
} from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY");
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS service
      const serviceId =
        process.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId =
        process.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey =
        process.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      if (!formRef.current) return;

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.text === "OK") {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          success: false,
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      link: "mailto:leonardorearte0@gmail.com",
      ariaLabel: "Send an email",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/leonardo-rearte-910523278/",
      ariaLabel: "Visit LinkedIn profile",
    },
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/leo01102",
      ariaLabel: "Visit GitHub profile",
    },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume.pdf";
    link.download = "Leonardo_Rearte_Resume.pdf";
    link.click();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            Have a project in mind or want to collaborate? Send me a message!
          </p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="social-link"
                aria-label={social.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon />
                {social.name}
              </a>
            ))}
            <button className="download-resume" onClick={handleDownloadResume}>
              <Download />
              Resume
            </button>
          </div>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {submitStatus && (
            <div
              className={`submit-status ${
                submitStatus.success ? "success" : "error"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
