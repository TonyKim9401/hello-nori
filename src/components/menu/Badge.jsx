// components/Badge.js
import React from "react";

function Badge({ label }) {
  const colorMap = {
    GF: {
      borderColor: "#FFA726", // 밝은 주황
      backgroundColor: "#FFE0B2",
      textColor: "#EF6C00",
    },
    V: {
      borderColor: "#AED581", // 밝은 연두
      backgroundColor: "#F1F8E9",
      textColor: "#558B2F",
    },
    O: {
      borderColor: "#81D4FA", // 밝은 하늘색
      backgroundColor: "#E1F5FE",
      textColor: "#0277BD",
    },
  };

  const { borderColor, backgroundColor, textColor } = colorMap[label] || {
    borderColor: "#333",
    backgroundColor: "#fff",
    textColor: "#333",
  };

  return (
    <span
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        height: 20,
        borderRadius: "50%",
        border: `1.5px solid ${borderColor}`,
        backgroundColor,
        fontSize: 12,
        fontWeight: "bold",
        color: textColor,
        userSelect: "none",
        marginLeft: 4,
      }}
      title={label}
    >
      {label}
    </span>
  );
}

export default Badge;
