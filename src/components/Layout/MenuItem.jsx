import React from "react";
import Menu from "./Menu";

const MenuItem = ({ item }) => {
  return (
    <li className="menu__item">
      <a href={item.url}>{item.name}</a>
      {item.subMenu && <Menu className="sub-menu" menu={item.subMenu} />}
    </li>
  );
};

export default MenuItem;
