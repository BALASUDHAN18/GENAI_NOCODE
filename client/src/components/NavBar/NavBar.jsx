import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Home from "../../assets/NavbarIcons/Home.svg";
import Circle from "../../assets/NavbarIcons/Add_Circle.svg";
import NotesIcon from "../../assets/NavbarIcons/Notes.svg";
import Settings from "../../assets/NavbarIcons/Settings.svg";
import Timeline from "../../assets/NavbarIcons/Timeline.svg";
import Notes from "../Notes/Notes"; // Import Notes Component

const NavBar = () => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <>
      <div className="navBar__container">
        <div className="navBar__elements">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <button aria-label="Home">
              <img src={Home} alt="Home" />
            </button>
          </NavLink>

          <NavLink to="/workflow" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <button aria-label="Add Workflow">
              <img src={Circle} alt="Add_Circle" />
            </button>
          </NavLink>

          {/* Toggle Notes Modal */}
          <button
            aria-label="Notes"
            className="notes-button"
            onClick={() => setShowNotes(true)}
          >
            <img src={NotesIcon} alt="Notes" />
          </button>

          <NavLink to="/settings" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <button aria-label="Settings">
              <img src={Settings} alt="Settings" />
            </button>
          </NavLink>

          <NavLink to="/timeline" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <button aria-label="Timeline">
              <img src={Timeline} alt="Timeline" />
            </button>
          </NavLink>
        </div>
      </div>

      {/* Show Notes Modal if Open */}
      {showNotes && <Notes closeNotes={() => setShowNotes(false)} />}
    </>
  );
};

export default NavBar;
