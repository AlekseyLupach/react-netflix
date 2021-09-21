import "./topbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">AdminDashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
