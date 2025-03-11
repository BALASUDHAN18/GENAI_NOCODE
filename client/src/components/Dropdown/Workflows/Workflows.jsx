import React, { useState } from 'react';
import './Workflows.css'; // Import the CSS file

const HoverDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className='dropdown-container'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className='dropdown-button'>Hover Me</button>

      {isOpen && (
        <div className='dropdown-menu'>
          <a href='#'>Option 1</a>
          <a href='#'>Option 2</a>
          <a href='#'>Option 3</a>
        </div>
      )}
    </div>
  );
};

export default HoverDropdown;
