import React from "react";

const Header = ({ title = "" }) => {
  document.title = title;
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
