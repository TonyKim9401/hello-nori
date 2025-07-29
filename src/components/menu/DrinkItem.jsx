import React from "react";
import MenuItem from "./MenuItem";

function DrinkItem({ item, onClick }) {
  const drinkOptions = [];

  return <MenuItem item={item} onClick={onClick} />;
}

export default DrinkItem;
