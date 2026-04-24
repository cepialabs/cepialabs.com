import Image from "next/image";
import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - CepiaLabs",
  description:
    "Learn about CepiaLabs, our AI and Data Science mission, vision, and core services.",
};

export default function AboutUsPage() {
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
        <p className="eyebrow">About Us - CepiaLabs</p>
        <h1>Innovating Tomorrow, Today with AI and Data Science</h1>
        <p>
          At Cepialabs, we are a leading software company that specializes in delivering AI and
          Data Science solutions designed to revolutionize how businesses operate. Our passion for
          innovation and excellence drives us to harness the power of cutting-edge technologies like
          artificial intelligence, machine learning, and big data analytics to help our clients
          achieve extraordinary results and stay ahead of the curve in an increasingly data-driven
          world.
        </p>
      </section>

      <section className="content-page section-shell" aria-label="About CepiaLabs details">
        <article className="content-block">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: To empower businesses with transformative AI and data science
            solutions that drive measurable value. We are dedicated to helping organizations unlock
            the full potential of their data, enabling smarter decisions, optimized processes, and
            better business outcomes. By combining our deep industry expertise with innovative
            technologies, we strive to deliver high-impact, scalable, and intelligent solutions that
            shape the future.
          </p>
        </article>

        <article className="content-block">
          <h2>Our Vision</h2>
          <p>
            To be the trusted partner in AI and data science innovation, providing tailored
            solutions that drive business success, foster digital transformation, and deliver
            sustained value across industries worldwide.
          </p>
        </article>

        <article className="content-block">
          <h2>What We Do</h2>
          <p>
            At Cepialabs, we offer a broad range of AI and Data Science services tailored to meet
            the unique challenges and objectives of each client. Our core offerings include:
          </p>
          <ul className="content-list">
            <li>
              <strong>AI Solutions:</strong> We develop custom artificial intelligence models that
              automate processes, optimize workflows, and unlock new business opportunities.
            </li>
            <li>
              <strong>Machine Learning:</strong> By implementing machine learning algorithms, we
              help businesses predict trends, identify patterns, and make data-driven decisions that
              improve outcomes.
            </li>
            <li>
              <strong>Data Analytics:</strong> Our advanced data analytics services provide
              actionable insights by turning raw data into meaningful, easy-to-understand
              visualizations and reports.
            </li>
            <li>
              <strong>Big Data Solutions:</strong> We build robust infrastructures to handle, store,
              and process large datasets, providing real-time analytics and insights for
              organizations.
            </li>
            <li>
              <strong>Consulting and Strategy:</strong> From strategy development to technology
              implementation, our consulting services guide businesses through every phase of their
              AI and data science journey, ensuring successful outcomes.
            </li>
          </ul>
        </article>
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
