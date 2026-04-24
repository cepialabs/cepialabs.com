import Image from "next/image";
import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - CepiaLabs",
  description: "Contact CepiaLabs for AI, Data Science, and Analytics solutions.",
};

export default function ContactUsPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="CepiaLabs home">
          <Image src="/assets/logo.png" alt="CepiaLabs" width={190} height={54} priority />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/about-us-cepialabs">About Us</a>
          <a href="/contact-us-cepialabs">Contact</a>
          <a href="https://ignite.cepialabs.com/">Internship</a>
        </nav>
      </header>

      <section className="subpage-hero section-shell">
        <p className="eyebrow">Contact Us - Cepialabs</p>
        <h1>Let&apos;s start working together to build the future with AI and Data Science.</h1>
        <p>
          We&apos;d love to hear from you! Whether you have a question about our services, need
          assistance with a project, or want to explore how our AI and Data Science solutions can
          transform your business, we&apos;re here to help.
        </p>
        <p>
          Get in touch with us today, and let&apos;s start working together to build the future
          with AI and Data Science!
        </p>
      </section>

      <section className="contact-page section-shell" aria-labelledby="contact-info-title">
        <div className="contact-panel">
          <h2 id="contact-info-title">Contact Information</h2>
          <div className="contact-info-grid">
            <article>
              <MapPin size={24} strokeWidth={2} aria-hidden="true" />
              <h3>CepiaLabs Headquarters</h3>
              <p>
                Plot No-20 & 21,
                <br />
                Sea View Developers
                <br />
                INFOSPACE, Sector 135, Noida
              </p>
            </article>
            <article>
              <Phone size={24} strokeWidth={2} aria-hidden="true" />
              <h3>Phone</h3>
              <a href="tel:+910520532756">+91-0520532756</a>
            </article>
            <article>
              <Mail size={24} strokeWidth={2} aria-hidden="true" />
              <h3>Email</h3>
              <a href="mailto:info@cepialabs.com">info@cepialabs.com</a>
            </article>
            <article>
              <Clock size={24} strokeWidth={2} aria-hidden="true" />
              <h3>Business Hours</h3>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM (IST)
                <br />
                Saturday - Sunday: Closed
              </p>
            </article>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-grid section-shell">
          <div>
            <h2>Contact Us</h2>
            <ul className="contact-list">
              <li>
                <MapPin size={20} strokeWidth={2} aria-hidden="true" />
                <span>Info space, Noida-135</span>
              </li>
              <li>
                <Mail size={20} strokeWidth={2} aria-hidden="true" />
                <a href="mailto:info@cepialabs.com">info@cepialabs.com</a>
              </li>
              <li>
                <Phone size={20} strokeWidth={2} aria-hidden="true" />
                <a href="tel:+919520532756">+91-9520532756</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>About Us</h2>
            <p>
              We, at CepiaLabs are proven best team for Inventing innovative & solutions for your
              business needs. Our team is always passionate for working on best quality, highly
              efficient solutions for your better customer satisfaction..
            </p>
            <div className="social-links" aria-label="Social links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Pinterest</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom section-shell">
          <span>@copyright 2025 cepialabs</span>
          <span>Proudly powered by CepiaLabs</span>
          <nav aria-label="Footer navigation">
            <a href="/">Home</a>
            <a href="/about-us-cepialabs">About</a>
            <a href="/contact-us-cepialabs">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
