import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menu, className, ikoStyle, position }) => {
  let txtClass = "menu";

  if (position) {
    txtClass += " " + position;
  }

  if (ikoStyle) {
    txtClass += " style-" + ikoStyle;
  }

  if (className) {
    txtClass += " " + className;
  }

  return (
    <ul className={txtClass}>
      {menu.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </ul>
  );
};

export default Menu;
