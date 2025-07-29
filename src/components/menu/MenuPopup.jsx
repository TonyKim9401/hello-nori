import React from "react";
import Badge from "./Badge";

function MenuPopup({ item, onClose }) {
  const icons = item.icons || [];
  const iconMap = {
    GF: <Badge label="GF" />,
    V: <Badge label="V" />,
    O: <Badge label="O" />,
  };

  const iconsToShow = icons.map((icon) => iconMap[icon]).filter(Boolean);

  const itemWithIcons = {
    ...item,
    name:
      icons.length > 0 ? (
        <span>
          <span>{item.name}</span>
          {iconsToShow.map((iconElement, idx) => (
            <span key={idx}>{iconElement}</span>
          ))}
        </span>
      ) : (
        item.name
      ),
  };

  const addOns = [
    { name: "Avocado", price: 3 },
    { name: "Cucumber", price: 2 },
    { name: "Green Onion", price: 0.5 },
    { name: "Shiso leaf", price: 1 },
  ];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: "9%",
        left: "2%",
        width: "93%",
        height: "88%",
        backgroundColor: "#1e1e1e",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        zIndex: 1000,
        borderRadius: "8px",
        padding: "20px",
        boxSizing: "border-box",
        gap: "20px",
        borderRadius: "8px",
        padding: "20px",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1, backgroundColor: "#333", borderRadius: "8px" }}>
        <img
          src={item.image}
          alt="Menu Preview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
            display: "block",
          }}
        />
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
        }}
      >
        <strong>{itemWithIcons.name}</strong>{" "}
        {item.price && <span> - ${item.price}</span>}
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          fontSize: "1rem",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ flex: 1, overflowY: "auto", paddingRight: "4px" }}>
          {item.options?.length > 0 && (
            <p style={{ marginBottom: "10px" }}>
              <strong>Options</strong>{" "}
              <span className="block">
                {item.options.map((opt) => opt.name).join(", ")}
              </span>
            </p>
          )}
          <strong>Description</strong>
          <span className="block">{item.description}</span>
        </div>

        {item.type === "Handroll" && (
          <div>
            <p style={{ fontWeight: "bold", marginBottom: "0px" }}>Add on's</p>
            <div className="grid grid-cols-2" style={{ gap: "3px" }}>
              {addOns.map((addOn) => {
                const isRecommended = item.topping?.includes(addOn.name);
                return (
                  <div
                    key={addOn.name}
                    style={{
                      position: "relative",
                      padding: "3px",
                      height: "78%",
                      border: isRecommended
                        ? "2px solid white"
                        : "1px solid gray",
                      borderRadius: "8px",
                      textAlign: "center",
                      backgroundColor: "#2a2a2a",
                    }}
                  >
                    <div style={{ fontWeight: "bold" }}>{addOn.name}</div>
                    <div style={{ fontSize: "12px", color: "#ccc" }}>
                      ${addOn.price}
                    </div>

                    {isRecommended && (
                      <span
                        style={{
                          position: "absolute",
                          top: "-12px",
                          right: "-6px",
                          backgroundColor: "#facc15",
                          color: "black",
                          fontSize: "0.7rem",
                          padding: "2px 6px",
                          borderRadius: "12px",
                          fontWeight: "bold",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                          zIndex: 1,
                        }}
                      >
                        Best!
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuPopup;
