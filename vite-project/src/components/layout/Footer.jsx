import React from "react";
import { Mail, Phone, MapPin, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Apply for Jobs", path: "/apply-for-jobs" },
    { name: "Partnership Programme", path: "/partnership-programme" },
    { name: "FAQ", path: "/faq" },
  ];

  const services = [
    { name: "Academicians", path: "/academicians" },
    { name: "R&D / EBI", path: "/rnd-ebi" },
    { name: "University & College", path: "/university-college" },
    { name: "Editors || NGO || Business", path: "/editors-ngo-business" },
    { name: "Educational Services", path: "/educational" },
  ];

  const colors = {
    navy: "#062B55",
    deepNavy: "#031D3A",
    gold: "#C89B3C",
    softGold: "#F5B82E",
    text: "#D7E3F4",
    white: "#FFFFFF",
  };

  const headingStyle = {
    color: colors.softGold,
    margin: 0,
    marginBottom: "10px",
    fontSize: "19px",
    fontWeight: 700,
    letterSpacing: "0.2px",
  };

  const underlineStyle = {
    width: "42px",
    height: "3px",
    background: colors.softGold,
    borderRadius: "20px",
    marginBottom: "22px",
  };

  const linkStyle = {
    fontSize: "12.5px",
    color: colors.text,
    cursor: "pointer",
    transition: "0.3s ease",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "12px",
    lineHeight: "1.4",
  };

  return (
    <footer
      className="site-footer"
      style={{
        background:
          "radial-gradient(circle at 82% 35%, rgba(255,255,255,0.08), transparent 28%), linear-gradient(135deg, #082F5F 0%, #062B55 48%, #031D3A 100%)",
        color: colors.white,
        marginTop: "40px",
        position: "relative",
        overflow: "hidden",
        borderTop: `4px solid ${colors.gold}`,
      }}
    >
      <div
        className="footer-pattern"
        style={{
          position: "absolute",
          right: "70px",
          top: "65px",
          width: "390px",
          height: "230px",
          opacity: 0.13,
          backgroundImage: "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
          pointerEvents: "none",
        }}
      />

      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.45fr 0.75fr 1fr 1.2fr",
          padding: "38px 65px",
          gap: "35px",
          maxWidth: "1600px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="footer-about">
          <h3 style={headingStyle}>Edwin Incorporation</h3>
          <div style={underlineStyle} />

          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.9",
              color: colors.text,
              margin: 0,
            }}
          >
            A global academic and research support platform providing
            comprehensive publication assistance, PhD guidance, DOI services,
            and patent support. We specialize in educational consultancy for
            scholars and institutions worldwide, ensuring the highest standards
            of academic integrity and excellence. Our mission is to bridge the
            gap between research and global recognition by providing expert
            editorial and technical support to the academic community.
          </p>

          <div
            className="footer-pill"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "22px",
              padding: "9px 18px",
              border: `1px solid ${colors.gold}`,
              borderRadius: "999px",
              color: colors.softGold,
              fontSize: "13px",
              fontWeight: 600,
              background: "rgba(255,255,255,0.04)",
            }}
          >
            Excellence <span>•</span> Research <span>•</span> Innovation
          </div>
        </div>

        <div className="footer-section">
          <h3 style={headingStyle}>Quick Links</h3>
          <div style={underlineStyle} />
          {quickLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={linkStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.color = colors.softGold;
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = colors.text;
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <ChevronRight size={15} color={colors.softGold} />
              {item.name}
            </Link>
          ))}
        </div>

        <div className="footer-section">
          <h3 style={headingStyle}>Our Services</h3>
          <div style={underlineStyle} />
          {services.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={linkStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.color = colors.softGold;
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = colors.text;
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <ChevronRight size={15} color={colors.softGold} />
              {item.name}
            </Link>
          ))}
        </div>

        <div className="footer-section footer-contact">
          <h3 style={headingStyle}>Contact Us</h3>
          <div style={underlineStyle} />

          {[
            [Mail, "care@edwinepc.com"],
            [Phone, "+91 6262752167"],
            [MapPin, "15th Floor, Eros Corporate Tower, Nehru Place, New Delhi, India"],
            [Globe, "www.edwinepc.com"],
          ].map(([Icon, text], index) => (
            <p
              className="footer-contact-row"
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                fontSize: "14px",
                color: colors.text,
                lineHeight: "1.7",
                margin: "0 0 15px",
              }}
            >
              <Icon size={18} color={colors.softGold} style={{ minWidth: "18px", marginTop: "3px" }} />
              {text}
            </p>
          ))}
        </div>
      </div>

      <div
        className="footer-bottom"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.14)",
          padding: "10px",
          textAlign: "center",
          fontSize: "11px",
          color: colors.text,
          background: "rgba(0,0,0,0.24)",
          position: "relative",
          zIndex: 1,
        }}
      >
        © {new Date().getFullYear()} Edwin Incorporation. All Rights Reserved.
      </div>

      <style>{`
        .site-footer,
        .site-footer * {
          box-sizing: border-box;
        }

        .footer-about p,
        .footer-contact-row,
        .footer-section a {
          overflow-wrap: anywhere;
        }

        @media (max-width: 1100px) {
          .footer-grid {
            grid-template-columns: 1.25fr 1fr !important;
            padding: 34px 32px !important;
            gap: 30px !important;
          }

          .footer-pattern {
            right: 20px !important;
            width: 280px !important;
          }
        }

        @media (max-width: 640px) {
          .site-footer {
            margin-top: 28px !important;
          }

          .footer-grid {
            grid-template-columns: 1fr !important;
            padding: 28px 18px !important;
            gap: 26px !important;
          }

          .footer-pattern {
            display: none !important;
          }

          .footer-about p {
            font-size: 13px !important;
            line-height: 1.75 !important;
          }

          .footer-pill {
            width: 100% !important;
            justify-content: center !important;
            flex-wrap: wrap !important;
            border-radius: 12px !important;
            padding: 10px 12px !important;
            text-align: center !important;
          }

          .footer-contact-row {
            font-size: 13px !important;
            gap: 10px !important;
          }

          .footer-bottom {
            padding: 12px 18px !important;
            line-height: 1.6 !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
