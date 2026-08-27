import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PenTool,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import {
  getPublications,
  submitContact,
  submitManuscript,
} from "./api";

/* =========================================================
   SAMPLE PUBLICATIONS
========================================================= */

const publications = [
  {
    title: "Advanced Computing & Artificial Intelligence",
    author: "Sample Author",
    category: "Computer Science",
    year: "2026",
  },
  {
    title: "Modern Engineering Concepts",
    author: "Sample Author",
    category: "Engineering",
    year: "2026",
  },
  {
    title: "Research Methods for Academic Writing",
    author: "Sample Author",
    category: "Academic",
    year: "2026",
  },
  {
    title: "Emerging Technologies & Innovation",
    author: "Sample Author",
    category: "Technology",
    year: "2026",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    icon: BookOpen,
    title: "Textbook Publishing",
    text: "Professional support for textbooks, academic books, reference books and educational content.",
  },
  {
    icon: FileText,
    title: "Research Publications",
    text: "Publication support for research books, technical manuscripts and scholarly content.",
  },
  {
    icon: Lightbulb,
    title: "Patent Publications",
    text: "Support for preparing and presenting patent-related publication material and documentation.",
  },
  {
    icon: PenTool,
    title: "Editing & Proofreading",
    text: "Language refinement, proofreading and editorial support to improve clarity and consistency.",
  },
  {
    icon: Sparkles,
    title: "Design & Formatting",
    text: "Professional manuscript formatting, typesetting and publication-ready document preparation.",
  },
  {
    icon: GraduationCap,
    title: "Academic Support",
    text: "Guidance for authors, educators and researchers throughout the publication workflow.",
  },
];

/* =========================================================
   LAYOUT
========================================================= */

function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const nav = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Publications", "/publications"],
    ["Publish With Us", "/publish"],
    ["Contact", "/contact"],
  ];

  const close = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">

          <Link to="/" className="brand" onClick={close}>
            <img
              src="/srb-logo.jpg"
              alt="SRB Publication"
              className="brand-logo"
            />

            <span>
              <strong>SRB Publication</strong>
              <small>Textbook & Patent Publications</small>
            </span>
          </Link>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav className={`main-nav ${open ? "open" : ""}`}>

            {nav.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={close}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                {label}
              </NavLink>
            ))}

            <Link
              className="nav-cta"
              to="/publish"
              onClick={close}
            >
              Submit Manuscript
              <ArrowRight size={16} />
            </Link>

          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">

        <div className="container footer-grid">

          <div>

            <Link to="/" className="brand footer-brand">

              <img
                src="/srb-logo.jpg"
                alt="SRB Publication"
                className="brand-logo"
              />

              <span>
                <strong>SRB Publication</strong>
                <small>Textbook & Patent Publications</small>
              </span>

            </Link>

            <p className="footer-copy">
              Supporting authors, educators, researchers and innovators
              with professional publication services.
            </p>

          </div>

          <div>

            <h4>Quick Links</h4>

            <Link to="/about">
              About Us
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/publications">
              Publications
            </Link>

            <Link to="/publish">
              Publish With Us
            </Link>

          </div>

          <div>

            <h4>Contact</h4>

            <a href="mailto:srbpublication@gmail.com">
              <Mail size={16} />
              srbpublication@gmail.com
            </a>

            <a
              href="https://wa.me/917989162608"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} />
              79891 62608
            </a>

            <span>
              <MapPin size={16} />
              Vijayawada, India
            </span>

            <span>
              <Clock3 size={16} />
              24 Hours · Response within 1 Hour
            </span>

          </div>

        </div>

        <div className="container footer-bottom">

          <span>
            © {new Date().getFullYear()} SRB Publication.
            All rights reserved.
          </span>

          <span>
            Publication services · Academic support · Editorial services
          </span>

        </div>

      </footer>
    </>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
  eyebrow,
  title,
  text,
}) {
  return (
    <div className="section-title">

      {eyebrow && (
        <span className="eyebrow">
          {eyebrow}
        </span>
      )}

      <h2>{title}</h2>

      {text && (
        <p>{text}</p>
      )}

    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  return (
    <>

      <section className="hero">

        <div className="container hero-grid">

          <div className="hero-content">

            <span className="eyebrow light">
              SRB PUBLICATION
            </span>

            <h1>
              Publish Your Knowledge.
              <br />
              <em>Share Your Innovation.</em>
            </h1>

            <p>
              Professional textbook, research and patent publication
              support for authors, educators, researchers and innovators.
            </p>

            <div className="hero-actions">

              <Link
                className="btn btn-primary"
                to="/publish"
              >
                Publish With Us
                <ArrowRight size={18} />
              </Link>

              <Link
                className="btn btn-outline"
                to="/publications"
              >
                Explore Publications
              </Link>

            </div>

            <div className="trust-row">

              <span>
                <CheckCircle2 size={17} />
                Professional Support
              </span>

              <span>
                <CheckCircle2 size={17} />
                Author Focused
              </span>

              <span>
                <CheckCircle2 size={17} />
                Fast Response
              </span>

            </div>

          </div>

          <div className="hero-card">

            <div className="book-visual">

              <div className="book-spine">
                SRB
              </div>

              <div className="book-face">

                <span>
                  SRB PUBLICATION
                </span>

                <h3>
                  Ideas Into
                  <br />
                  Published Work
                </h3>

                <small>
                  Textbooks · Research · Innovation
                </small>

              </div>

            </div>

            <div className="hero-card-caption">

              <ShieldCheck size={20} />

              <div>

                <strong>
                  Publication Support
                </strong>

                <span>
                  From manuscript to final publication
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="stats">

        <div className="container stats-grid">

          <div>
            <strong>24/7</strong>
            <span>Availability</span>
          </div>

          <div>
            <strong>1 Hr</strong>
            <span>Typical Response</span>
          </div>

          <div>
            <strong>6+</strong>
            <span>Core Services</span>
          </div>

          <div>
            <strong>1:1</strong>
            <span>Author Support</span>
          </div>

        </div>

      </section>

      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="WHAT WE DO"
            title="Publication services built around your work"
            text="From manuscript preparation to publication-ready documents, SRB Publication helps you move from idea to professionally presented work."
          />

          <div className="cards-grid">

            {services.map(
              ({
                icon: Icon,
                title,
                text,
              }) => (

                <div
                  className="service-card"
                  key={title}
                >

                  <div className="icon-box">
                    <Icon size={24} />
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <Link to="/services">
                    Learn more
                    <ArrowRight size={15} />
                  </Link>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      <section className="section soft">

        <div className="container split">

          <div>

            <span className="eyebrow">
              WHY SRB PUBLICATION
            </span>

            <h2>
              A professional publishing journey, made simple.
            </h2>

            <p>
              We aim to make the publication process clear and
              approachable for authors who want dependable editorial,
              formatting and publication support.
            </p>

            <div className="check-list">

              {[
                "Clear submission process",
                "Professional editorial assistance",
                "Publication-ready formatting",
                "Responsive author communication",
                "Support for academic and technical subjects",
              ].map((item) => (

                <div key={item}>

                  <CheckCircle2 size={19} />

                  {item}

                </div>

              ))}

            </div>

            <Link
              className="text-link"
              to="/about"
            >
              Learn more about SRB Publication
              <ArrowRight size={16} />
            </Link>

          </div>

          <div className="process-card">

            <span className="eyebrow">
              OUR PROCESS
            </span>

            {[
              [
                "01",
                "Submit",
                "Share your manuscript and requirements.",
              ],
              [
                "02",
                "Review",
                "We review the submission and scope.",
              ],
              [
                "03",
                "Prepare",
                "Editing, formatting and design support.",
              ],
              [
                "04",
                "Publish",
                "Move toward your final publication.",
              ],
            ].map(
              ([number, title, description]) => (

                <div
                  className="process-row"
                  key={number}
                >

                  <b>{number}</b>

                  <div>

                    <strong>
                      {title}
                    </strong>

                    <p>
                      {description}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="FEATURED PUBLICATIONS"
            title="Explore our publication categories"
            text="Sample entries are shown below. Replace them with your real books and publications."
          />

          <div className="books-grid">

            {publications
              .slice(0, 3)
              .map((book, index) => (

                <BookCard
                  key={book.title}
                  book={book}
                  index={index}
                />

              ))}

          </div>

          <div className="center">

            <Link
              className="btn btn-dark"
              to="/publications"
            >
              View All Publications
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

      <CTA />

    </>
  );
}

/* =========================================================
   BOOK CARD
========================================================= */

function BookCard({
  book,
  index = 0,
}) {
  return (
    <article className="book-card">

      <div
        className={`book-cover cover-${index % 4}`}
      >

        <span>
          SRB PUBLICATION
        </span>

        <strong>
          {book.category}
        </strong>

        <small>
          {book.year}
        </small>

      </div>

      <div className="book-info">

        <span className="tag">
          {book.category}
        </span>

        <h3>
          {book.title}
        </h3>

        <p>
          By {book.author}
        </p>

        <Link to="/publications">
          View publication
          <ArrowRight size={15} />
        </Link>

      </div>

    </article>
  );
}

/* =========================================================
   CTA
========================================================= */

function CTA() {
  return (
    <section className="cta">

      <div className="container cta-inner">

        <div>

          <span className="eyebrow light">
            READY TO PUBLISH?
          </span>

          <h2>
            Let's take your work to the next stage.
          </h2>

          <p>
            Send your manuscript or publication enquiry and
            our team will get back to you.
          </p>

        </div>

        <Link
          className="btn btn-white"
          to="/publish"
        >
          Submit Your Manuscript
          <ArrowRight size={18} />
        </Link>

      </div>

    </section>
  );
}

/* =========================================================
   ABOUT
========================================================= */

function About() {
  return (
    <>

      <PageHero
        title="About SRB Publication"
        text="A publication-focused platform for textbooks, research content and innovation-related publishing support."
      />

      <section className="section">

        <div className="container split">

          <div>

            <span className="eyebrow">
              WHO WE ARE
            </span>

            <h2>
              Helping ideas become professionally presented publications.
            </h2>

            <p>
              SRB Publication is positioned to support authors,
              educators, researchers and innovators with practical
              publishing services.
            </p>

            <p>
              Our approach is centered on clear communication,
              quality document preparation and author-focused
              support from submission through publication.
            </p>

          </div>

          <div className="about-panel">

            <div>

              <GraduationCap size={26} />

              <strong>
                Academic Focus
              </strong>

              <span>
                Textbooks, research and educational content
              </span>

            </div>

            <div>

              <Lightbulb size={26} />

              <strong>
                Innovation
              </strong>

              <span>
                Patent-related publication support
              </span>

            </div>

            <div>

              <ShieldCheck size={26} />

              <strong>
                Quality
              </strong>

              <span>
                Editorial and formatting support
              </span>

            </div>

          </div>

        </div>

      </section>

      <section className="section soft">

        <div className="container">

          <SectionTitle
            eyebrow="OUR VALUES"
            title="What we aim to deliver"
          />

          <div className="values-grid">

            {[
              "Clarity",
              "Quality",
              "Integrity",
              "Responsiveness",
            ].map((value, index) => (

              <div
                className="value-card"
                key={value}
              >

                <span>
                  0{index + 1}
                </span>

                <h3>
                  {value}
                </h3>

                <p>
                  Professional communication and practical
                  support throughout the publication journey.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <CTA />

    </>
  );
}

/* =========================================================
   SERVICES
========================================================= */

function Services() {
  return (
    <>

      <PageHero
        title="Our Services"
        text="Publication and editorial services designed for academic, educational and technical content."
      />

      <section className="section">

        <div className="container">

          <div className="cards-grid">

            {services.map(
              ({
                icon: Icon,
                title,
                text,
              }) => (

                <div
                  className="service-card large"
                  key={title}
                >

                  <div className="icon-box">
                    <Icon size={25} />
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <ul>
                    <li>Requirement discussion</li>
                    <li>Professional document support</li>
                    <li>Author communication</li>
                  </ul>

                  <Link to="/publish">
                    Enquire about this service
                    <ArrowRight size={15} />
                  </Link>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      <CTA />

    </>
  );
}

/* =========================================================
   PUBLICATIONS
========================================================= */

function Publications() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(publications);

  useEffect(() => {

    getPublications()
      .then((data) => {

        if (
          Array.isArray(data) &&
          data.length
        ) {
          setItems(data);
        }

      })
      .catch(() => {});

  }, []);

  const filtered = items.filter(
    (item) =>
      `${item.title} ${item.category} ${item.author}`
        .toLowerCase()
        .includes(query.toLowerCase())
  );

  return (
    <>

      <PageHero
        title="Our Publications"
        text="A showcase area for SRB Publication books and other published works."
      />

      <section className="section">

        <div className="container">

          <div className="toolbar">

            <div>

              <span className="eyebrow">
                LIBRARY
              </span>

              <h2>
                Featured works
              </h2>

            </div>

            <input
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              placeholder="Search publications..."
            />

          </div>

          <div className="books-grid">

            {filtered.map(
              (book, index) => (

                <BookCard
                  key={book.id || book.title}
                  book={book}
                  index={index % 4}
                />

              )
            )}

          </div>

          {!filtered.length && (
            <div className="empty">
              No publications found.
            </div>
          )}

        </div>

      </section>

      <CTA />

    </>
  );
}

/* =========================================================
   PUBLISH WITH US
========================================================= */

function Publish() {

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [submissionId, setSubmissionId] = useState("");

  async function submit(e) {

    e.preventDefault();

    setSending(true);
    setSent(false);
    setError("");
    setSubmissionId("");

    const form = e.currentTarget;

    const formData = new FormData(form);

    /*
      Remove optional fields if they are empty.
      This prevents Django from trying to validate
      empty strings as integers or dates.
    */

    if (!formData.get("expected_pages")) {
      formData.delete("expected_pages");
    }

    if (!formData.get("expected_publication_date")) {
      formData.delete("expected_publication_date");
    }

    if (!formData.get("institution")) {
      formData.delete("institution");
    }

    if (!formData.get("subject")) {
      formData.delete("subject");
    }

    if (!formData.get("additional_requirements")) {
      formData.delete("additional_requirements");
    }

    /*
      Remove manuscript when no file was selected.
      The frontend below also marks the file as required.
    */

    const manuscript = formData.get("manuscript");

    if (
      !manuscript ||
      !manuscript.name
    ) {
      formData.delete("manuscript");
    }

    try {

      const result =
        await submitManuscript(formData);

      console.log(
        "Submission successful:",
        result
      );

      setSent(true);

      setSubmissionId(
        result.submission_id || ""
      );

      form.reset();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    } catch (err) {

      console.log(
      "SUBMISSION ERROR DETAILS:\n",
      JSON.stringify(err.data, null, 2)
      );

      const errors =
        err.data?.errors;

      if (errors) {

        const messages =
          Object.entries(errors)
            .flatMap(
              ([field, fieldMessages]) =>
                fieldMessages.map(
                  (message) =>
                    `${field}: ${message}`
                )
            );

        setError(
          messages.length
            ? messages.join(" | ")
            : "Please check your details."
        );

      } else {

        setError(
          err.data?.message ||
            "Submission failed. Please try again or contact us."
        );

      }

    } finally {

      setSending(false);

    }
  }

  return (
    <>

      <PageHero
        title="Publish With Us"
        text="Tell us about your manuscript, textbook, research work or publication requirement."
      />

      <section className="section">

        <div className="container form-layout">

          <div>

            <span className="eyebrow">
              SUBMISSION
            </span>

            <h2>
              Start your publication enquiry
            </h2>

            <p>
              Submit your publication details and manuscript.
              Your enquiry is stored securely and the SRB
              Publication team is notified.
            </p>

            <div className="contact-mini">

              <a href="mailto:srbpublication@gmail.com">

                <Mail size={18} />

                srbpublication@gmail.com

              </a>

              <a
                href="https://wa.me/917989162608"
                target="_blank"
                rel="noreferrer"
              >

                <MessageCircle size={18} />

                WhatsApp: 79891 62608

              </a>

              <span>

                <Clock3 size={18} />

                24 Hours · Response within 1 Hour

              </span>

            </div>

          </div>

          <form
            className="form-card"
            onSubmit={submit}
            encType="multipart/form-data"
          >

            {sent && (

              <div className="success">

                <CheckCircle2 size={20} />

                <div>

                  <strong>
                    Submission successful!
                  </strong>

                  <br />

                  Your manuscript enquiry
                  has been received.

                  {submissionId && (
                    <>
                      <br />

                      Submission ID:{" "}

                      <strong>
                        {submissionId}
                      </strong>
                    </>
                  )}

                </div>

              </div>

            )}

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <div className="form-row">

              <label>

                Full Name *

                <input
                  name="name"
                  required
                  placeholder="Your name"
                />

              </label>

              <label>

                Email Address *

                <input
                  name="email"
                  required
                  type="email"
                  placeholder="you@example.com"
                />

              </label>

            </div>

            <div className="form-row">

              <label>

                Phone / WhatsApp *

                <input
                  name="phone"
                  required
                  placeholder="10-digit number"
                />

              </label>

              <label>

                Institution / Organization

                <input
                  name="institution"
                  placeholder="College or organization"
                />

              </label>

            </div>

            <label>

              Publication Type *

              <select
                name="publication_type"
                defaultValue=""
                required
              >

                <option
                  value=""
                  disabled
                >
                  Select type
                </option>

                <option>
                  Textbook
                </option>

                <option>
                  Research Publication
                </option>

                <option>
                  Academic Book
                </option>

                <option>
                  Patent Publication Support
                </option>

                <option>
                  Technical Book
                </option>

                <option>
                  Other
                </option>

              </select>

            </label>

            <div className="form-row">

              <label>

                Title / Topic *

                <input
                  name="title"
                  required
                  placeholder="Title of your work"
                />

              </label>

              <label>

                Subject / Domain

                <input
                  name="subject"
                  placeholder="e.g. AI, Engineering, Management"
                />

              </label>

            </div>

            <label>

              Abstract / Description *

              <textarea
                name="abstract"
                required
                rows="6"
                placeholder="Briefly describe your work and requirements"
              />

            </label>

            <div className="form-row">

              <label>

                Expected Pages

                <input
                  name="expected_pages"
                  type="number"
                  min="1"
                  placeholder="e.g. 120"
                />

              </label>

              <label>

                Expected Publication Date

                <input
                  name="expected_publication_date"
                  type="date"
                />

              </label>

            </div>

            <label>

              Additional Requirements

              <textarea
                name="additional_requirements"
                rows="4"
                placeholder="Editing, proofreading, formatting, ISBN, printing, etc."
              />

            </label>

            <label>

              Upload Manuscript *

              <input
                name="manuscript"
                type="file"
                accept=".pdf,.doc,.docx"
                required
              />

              <small className="form-note">
                PDF, DOC or DOCX. Maximum 10 MB.
              </small>

            </label>

            <button
              className="btn btn-dark full"
              type="submit"
              disabled={sending}
            >

              {sending
                ? "Submitting..."
                : "Submit Manuscript"}

              {!sending && (
                <ArrowRight size={18} />
              )}

            </button>

            <small className="form-note">

              Your submission is stored in the SRB
              Publication system and the company can be
              notified by email when SMTP is configured.

            </small>

          </form>

        </div>

      </section>

    </>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function Contact() {

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submit(e) {

    e.preventDefault();

    setSending(true);
    setSent(false);
    setError("");

    const form = e.currentTarget;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {

      await submitContact(data);

      setSent(true);

      form.reset();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    } catch (err) {

      console.error(
        "Contact error:",
        err.data
      );

      const errors =
        err.data?.errors;

      if (errors) {

        const messages =
          Object.entries(errors)
            .flatMap(
              ([field, fieldMessages]) =>
                fieldMessages.map(
                  (message) =>
                    `${field}: ${message}`
                )
            );

        setError(
          messages.length
            ? messages.join(" | ")
            : "Please check your details."
        );

      } else {

        setError(
          err.data?.message ||
            "Message could not be sent. Please try WhatsApp or email."
        );

      }

    } finally {

      setSending(false);

    }
  }

  return (
    <>

      <PageHero
        title="Contact Us"
        text="Have a manuscript, textbook, research work or publication question? Get in touch."
      />

      <section className="section">

        <div className="container form-layout">

          <div>

            <span className="eyebrow">
              GET IN TOUCH
            </span>

            <h2>
              We're here to help.
            </h2>

            <p>
              Contact SRB Publication for publishing
              enquiries and service information.
            </p>

            <div className="contact-list">

              <a href="mailto:srbpublication@gmail.com">

                <Mail />

                <div>

                  <strong>
                    Email
                  </strong>

                  <span>
                    srbpublication@gmail.com
                  </span>

                </div>

              </a>

              <a
                href="https://wa.me/917989162608"
                target="_blank"
                rel="noreferrer"
              >

                <MessageCircle />

                <div>

                  <strong>
                    WhatsApp / Phone
                  </strong>

                  <span>
                    79891 62608
                  </span>

                </div>

              </a>

              <div>

                <MapPin />

                <div>

                  <strong>
                    Location
                  </strong>

                  <span>
                    Vijayawada, India
                  </span>

                </div>

              </div>

              <div>

                <Clock3 />

                <div>

                  <strong>
                    Availability
                  </strong>

                  <span>
                    24 Hours · Response within 1 Hour
                  </span>

                </div>

              </div>

            </div>

          </div>

          <form
            className="form-card"
            onSubmit={submit}
          >

            {sent && (

              <div className="success">

                <CheckCircle2 size={20} />

                <div>

                  <strong>
                    Message sent successfully!
                  </strong>

                  <br />

                  SRB Publication has received
                  your enquiry.

                </div>

              </div>

            )}

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <label>

              Name *

              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
              />

            </label>

            <label>

              Email *

              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
              />

            </label>

            <label>

              Phone / WhatsApp

              <input
                type="text"
                name="phone"
                placeholder="Your phone number"
              />

            </label>

            <label>

              Subject *

              <input
                type="text"
                name="subject"
                required
                placeholder="How can we help?"
              />

            </label>

            <label>

              Message *

              <textarea
                name="message"
                required
                rows="7"
                placeholder="Your message"
              />

            </label>

            <button
              className="btn btn-dark full"
              type="submit"
              disabled={sending}
            >

              {sending
                ? "Sending..."
                : "Send Message"}

              {!sending && (
                <ArrowRight size={18} />
              )}

            </button>

            <small className="form-note">

              The enquiry is saved in the database and
              company email notification is sent when
              SMTP is configured.

            </small>

          </form>

        </div>

      </section>

    </>
  );
}

/* =========================================================
   PAGE HERO
========================================================= */

function PageHero({
  title,
  text,
}) {
  return (
    <section className="page-hero">

      <div className="container">

        <span className="eyebrow light">
          SRB PUBLICATION
        </span>

        <h1>
          {title}
        </h1>

        <p>
          {text}
        </p>

      </div>

    </section>
  );
}

/* =========================================================
   APP ROUTES
========================================================= */

function App() {

  return (
    <Layout>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/publications"
          element={<Publications />}
        />

        <Route
          path="/publish"
          element={<Publish />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<Home />}
        />

      </Routes>

    </Layout>
  );
}

export default App;