import React, { useState } from "react";
import { Link } from "react-router-dom";

function SidebarMenu({ items }) {
  const [activeButtonId, setActiveButtonId] = useState("1");

  const handleButtonClick = (e) => {
    setActiveButtonId(e.target.id);
  };

  return (
    <>
      {items.map((item) => (
        <div className="sidebarMenu" key={item.id}>
          <h3 className="sidebarTitle">{item.title}</h3>
          <ul className="sidebarList">
            <Link to={item.link} className="link">
              <li
                id={item.id}
                className={
                  item.id === activeButtonId
                    ? "active sidebarListItem"
                    : "sidebarListItem"
                }
                onClick={handleButtonClick}
              >
                {item.icons}
                {item.name}
              </li>
            </Link>
          </ul>
        </div>
      ))}
    </>
  );
}

export default SidebarMenu;
