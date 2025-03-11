import React, { useState } from "react";
import { Search, User, Shield, PaintBucket, Settings } from "lucide-react";
import "./Settings.css";

const SettingsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="settings-container">
      {/* Sidebar Menu */}
      <aside className="settings-sidebar">
        <h2 className="sidebar-title">Settings</h2>
        <ul className="sidebar-menu">
          <li><User size={18} /> You and Google</li>
          <li><Shield size={18} /> Privacy and Security</li>
          <li><PaintBucket size={18} /> Appearance</li>
          <li><Settings size={18} /> System</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="settings-content">
        {/* Search Bar */}
        <div className="search-bar">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search settings"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* User Settings Card */}
        <div className="user-card">
          <img src="https://via.placeholder.com/50" alt="User" className="user-avatar" />
          <div>
            <h3>Bala Sudhan</h3>
            <p>balasudhan30103@gmail.com</p>
          </div>
          <button className="sign-out-btn">Sign Out</button>
        </div>

        {/* Settings List */}
        <div className="settings-list">
          <div className="setting-item">Sync and Google Services</div>
          <div className="setting-item">Manage Your Google Account</div>
          <div className="setting-item">Customize Your Chrome Profile</div>
          <div className="setting-item">Import Bookmarks and Settings</div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
