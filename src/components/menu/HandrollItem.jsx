import React from "react";
import MenuItem from "./MenuItem";

function HandrollItem({ item, onClick }) {
  return <MenuItem item={item} onClick={onClick} />;
}

export default HandrollItem;
