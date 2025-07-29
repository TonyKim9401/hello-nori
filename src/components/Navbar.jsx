function Navbar() {
  const baseStyle = {
    flex: 1,
    height: "45px",
    padding: "0 8px",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.2s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid white",
    fontSize: "20px",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: "0px",
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        height: "45px",
        border: "1px solid white",
        borderRadius: "6px",
        overflow: "hidden",
        maxWidth: "960px",
        margin: "0 auto", // ✅ 중앙 정렬
        backgroundColor: "#333",
      }}
    >
      <div
        style={{
          ...baseStyle,
          fontSize: "18px",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#000")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "transparent")
        }
      >
        Happy Hour
      </div>

      <div
        style={{
          ...baseStyle,
          fontSize: "22px",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#000")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "transparent")
        }
      >
        Menu
      </div>

      <div
        style={{
          ...baseStyle,
          fontSize: "22px",
          borderRight: "none",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#000")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "transparent")
        }
      >
        Drink
      </div>
    </nav>
  );
}

export default Navbar;
