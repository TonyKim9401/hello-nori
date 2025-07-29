import React from "react";
import Badge from "./Badge";
import menuItem from "../../../public/data/menuData.json";

function MenuItem({ item, priceRight = true, onClick = () => {} }) {
  const { name, price, options, icons = [] } = item || {};
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
        <span className="flex items-center gap-1">
          <span>{name}</span>
          {iconsToShow.map((iconElement, idx) => (
            <span key={idx}>{iconElement}</span>
          ))}
        </span>
      ) : (
        name
      ),
  };

  if (priceRight) {
    return (
      <div
        className="p-2 rounded-md cursor-pointer transition-colors"
        onClick={() => onClick(item)}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#e5e7eb";
          e.currentTarget.style.color = "#000000";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "";
        }}
      >
        <div className="flex justify-between items-center">
          <span className="m-0 p-0 leading-tight" style={{ fontSize: "21px" }}>
            {itemWithIcons.name}
          </span>

          <span className="m-0 p-0 leading-none" style={{ fontSize: "21px" }}>
            {typeof price === "number" ? `$${price.toFixed(2)}` : price}
          </span>
        </div>
      </div>
    );
  }

  // Set Menus: Centered price
  return (
    <div
      className="p-2 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
      onClick={() => onClick(item)}
    >
      <div
        className="flex flex-col items-center leading-none"
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#e5e7eb";
          e.currentTarget.style.color = "#000000";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "";
        }}
      >
        <h3
          className="m-0 p-0 text-sm font-medium leading-none"
          style={{ lineHeight: "1", marginBottom: 4 }}
        >
          {itemWithIcons.name}
        </h3>
        <span
          className="m-0 p-0 text-sm leading-none"
          style={{ lineHeight: "1", marginTop: 0 }}
        >
          {typeof price === "number" ? `$${price.toFixed(2)}` : price}
        </span>
      </div>

      <ul
        className="text-sm text-black m-0 p-0 text-left"
        style={{
          listStyleType: "none", // 기본 불릿 없애기
          marginLeft: 0,
          paddingLeft: 0,
        }}
      >
        {options.map((opt, idx) => {
          const handrollSection = menuItem.find(
            (section) => section.section === "Handrolls"
          );
          const handrollItems = handrollSection?.items || [];

          const matched = handrollItems.find((hr) => hr.name === opt.name);

          return (
            <li
              key={idx}
              className="transition-colors leading-none flex items-start gap-1"
              style={{
                marginLeft: 0,
                paddingLeft: 0,
                marginBottom: "6px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                onClick(matched);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#e5e7eb";
                e.currentTarget.style.color = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "";
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  backgroundColor: "white",
                  borderRadius: "100%",
                  marginTop: "0.3em",
                  flexShrink: 0,
                  marginRight: "2px",
                }}
              ></span>
              <span>{opt.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuItem;
