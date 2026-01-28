import React, { useState } from "react";

const IconButton = ({
  href,
  label,
  size,
  bg,
  hoverBg,
  iconColor,
  icon,
  className = "",
}) => {
  const [hover, setHover] = useState(false);

  const wrapperStyle = {
    width: size,
    height: size,
    background: hover ? hoverBg : bg,
    color: iconColor,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    textDecoration: "none",
    transition:
      "transform 160ms ease, box-shadow 160ms ease, background 160ms ease",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
      style={wrapperStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <span
        style={{
          width: "100%",
          height: "100%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </span>
    </a>
  );
};

export default IconButton;
