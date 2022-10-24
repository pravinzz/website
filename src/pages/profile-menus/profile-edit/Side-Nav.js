import React from "react";

const SideNav = ({ isOpen, toggle, menuList, children }) => {
  return (
    <div className="container">
      <div className={`sidebar ${isOpen && "sidebar--open"}`}>
        <nav class="menu">
          <button onClick={() => toggle()}>Swipe</button>
          <ul>
            {menuList.map((item, idx) => (
              <li key={idx + '-menu-item'}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div class={`content ${isOpen && "content--open"}`}>{children}</div>
    </div>
  );
};

export default SideNav;