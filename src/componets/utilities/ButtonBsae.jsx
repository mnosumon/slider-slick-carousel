import React from "react";

function ButtonBsae({ children, onClick, style, ...props }) {
  return (
    <button
      onClick={onClick}
      style={{
        border: "none",
        background: "none",
        padding: "8px 16px",
        cursor: "pointer",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonBsae;
