import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/settings.css";

import Dangologo from "../assets/Dangologo.png";

const Settings = () => {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <section className="sidebar-container">
          <div className="logo">
            <img src={Dangologo} alt="DangoDot Logo" />
            <h1>DangoDot</h1>
          </div>

          <h3>Profile Settings</h3>
          <div className="sidebar-list">
            <a href="#" className="sidebar-item">
              Profile Picture
            </a>
            <a href="#" className="sidebar-item">
              Display Name
            </a>
          </div>

          <h3>Account Settings</h3>
          <div className="sidebar-list">
            <a href="#" className="sidebar-item">
              Username/Password
            </a>
            <a href="#" className="sidebar-item">
              Email
            </a>
            <a href="#" className="sidebar-item">
              Membership
            </a>
            <a href="#" className="sidebar-item">
              Language
            </a>
            <a href="#" className="sidebar-item">
              Theme
            </a>
          </div>
        </section>

        <section className="content-container">
          <div className="content">
            <h1>Settings</h1>
            <p>Coming Soon!</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
