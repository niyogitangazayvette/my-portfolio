// src/components/SocialIcons.js
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./SocialIcons.css";

function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/in/yvette-niyogitangaza"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/yvetteniyogitangaza"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <FaGithub />
      </a>
      <a href="mailto:niyogitangazayvette@gmail.com" title="Email">
        <FaEnvelope />
      </a>
      <a
        href="https://wa.me/250783629811"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default SocialIcons;
