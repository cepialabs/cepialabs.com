import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  DatabaseZap,
  Factory,
  Globe2,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Quote,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Stat = {
  value: string;
  label: string;
  icon: LucideIcon;
};

type Testimonial = {
  name: string;
  quote: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Artificial Intelligence Solutions",
    description:
      "Build intelligent systems that automate processes, enhance decision-making, and deliver measurable business impact.",
    icon: BrainCircuit,
  },
  {
    title: "Agentic AI Systems",
    description:
      "Build autonomous, goal-driven AI agents that can plan, reason, and execute tasks without human intervention.",
    icon: Bot,
  },
  {
    title: "Generative AI & LLM Solutions",
    description:
      "Reimagine productivity and creativity using powerful Generative AI and LLM-based automation.",
    icon: Sparkles,
  },
  {
    title: "Machine Learning & Predictive Analytics",
    description:
      "Turn your historical data into accurate forecasts, risk predictions, and smart recommendations.",
    icon: TrendingUp,
  },
];

const stats: Stat[] = [
  {
    value: "500+",
    label: "Experienced Consultants",
    icon: UsersRound,
  },
  {
    value: "120+",
    label: "Successfull Projects",
    icon: CheckCircle2,
  },
  {
    value: "150+",
    label: "Global Clients",
    icon: Globe2,
  },
  {
    value: "5+",
    label: "Countries Served",
    icon: MapPin,
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Ava Mitchell",
    quote:
      "CepiaLabs helped us automate our entire reporting workflow using AI agents. We cut manual effort by almost 80% within the first month. Their execution speed and clarity were exceptional",
    image: "/assets/testimonial-1.png",
  },
  {
    name: "Rahul Desai",
    quote:
      "The predictive models built by CepiaLabs improved our forecasting accuracy dramatically. Their team understood our challenges immediately and delivered insights we could trust.",
    image: "/assets/testimonial-2.png",
  },
  {
    name: "Claire Benson",
    quote:
      "Their agentic AI solution became the backbone of our customer support operations. We now resolve issues faster, with more consistency, and zero extra staff cost",
    image: "/assets/testimonial-3.png",
  },
  {
    name: "Liam Chen",
    quote:
      "CepiaLabs brings rare technical depth. They built scalable data pipelines and AI systems that integrated effortlessly with our existing stack. The impact was noticeable from day one.",
    image: "/assets/testimonial-4.png",
  },
];

const edgeItems = [
  {
    icon: Lightbulb,
    copy: "Our expertise blends deep AI research with modern automation, creating intelligent systems that optimize operations and accelerate digital transformation.",
  },
  {
    icon: Factory,
    copy: "We combine advanced AI engineering with real-world problem solving to deliver solutions that are fast, scalable, and designed for measurable business impact.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="CepiaLabs home">
          <Image
            src="/assets/logo.png"
            alt="CepiaLabs"
            width={190}
            height={54}
            priority
          />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="/about-us-cepialabs">About Us</a>
          <a href="/contact-us-cepialabs">Contact</a>
          <a href="https://ignite.cepialabs.com/">Internship</a>
        </nav>
      </header>

      <section
        className="hero section-shell"
        id="home"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <p className="site-kicker">Inventive | Innovative | Cognitive</p>
          <h1 id="hero-title">Transform Decisions with Intelligent AI</h1>
          <p className="hero-text">
            Drive automation, accuracy, and insights with enterprise-grade AI,
            Data Science, and Analytics solutions designed for scalable business
            impact.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a href="#services" className="button button-primary">
              our services
              <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
            </a>
            <a href="#contact" className="button button-secondary">
              Contact Us
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <Image
            src="/assets/heroine-generative-blob.png"
            alt=""
            fill
            sizes="(max-width: 900px) 80vw, 45vw"
            priority
          />
        </div>
      </section>

      <section
        className="services section-shell"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="section-heading">
          <p className="eyebrow">our services</p>
          <h2 id="services-title">Intelligence that Works for You</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.title}>
                <div className="icon-box">
                  <Icon size={26} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <div className="rule" aria-hidden="true" />
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="about section-shell"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="image-panel">
          <Image
            src="/assets/about.png"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">about us</p>
          <h2 id="about-title">
            Innovating the Future with AI, Data, and Intelligent Automation.
          </h2>
          <h3>Get to Know Us</h3>
          <p>
            At CepiaLabs, we empower businesses to unlock the full potential of
            their data through world-class AI, Machine Learning, and Advanced
            Analytics solutions.
          </p>
          <p>
            As a next-generation AI & Data Science company, we specialize in
            building intelligent systems&mdash;from predictive analytics and
            automation to enterprise-grade Agentic AI and Generative AI
            solutions.
          </p>
          <p>
            Our mission is simple: to help organizations make smarter decisions,
            automate complex processes, and accelerate digital transformation.
          </p>
        </div>
      </section>

      <section
        className="stats-band section-shell"
        aria-label="CepiaLabs records"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="stat" key={stat.label}>
              <Icon size={24} strokeWidth={2} aria-hidden="true" />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          );
        })}
      </section>

      <section className="edge section-shell" aria-labelledby="edge-title">
        <div className="edge-copy">
          <p className="eyebrow">Our Edge in AI & Innovation</p>
          <h2 id="edge-title">
            Intelligent solutions engineered for speed, scale, and measurable
            business outcomes.
          </h2>
          <h3>What Sets Us Apart</h3>
          <div className="edge-list">
            {edgeItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="edge-item" key={item.copy}>
                  <div className="icon-box">
                    <Icon size={24} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="image-panel image-panel-tall">
          <Image
            src="/assets/profit.png"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
      </section>

      <section
        className="testimonials section-shell"
        aria-labelledby="testimonials-title"
      >
        <div className="section-heading">
          <p className="eyebrow">testimonials</p>
          <h2 id="testimonials-title">What Our Clients Say</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <Quote size={24} strokeWidth={2} aria-hidden="true" />
              <p>{testimonial.quote}</p>
              <div className="person">
                <Image
                  src={testimonial.image}
                  alt=""
                  width={52}
                  height={52}
                  sizes="52px"
                />
                <h3>{testimonial.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="contact">
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
              We, at CepiaLabs are proven best team for Inventing innovative &
              solutions for your business needs. Our team is always passionate
              for working on best quality, highly efficient solutions for your
              better customer satisfaction..
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
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
