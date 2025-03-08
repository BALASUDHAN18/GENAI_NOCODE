import React, { useRef, useState, useCallback, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  }, []);

  // Handle Scroll Zooming (Mouse)
  const handleWheel = useCallback((event) => {
    event.preventDefault();
    setScale((prevScale) => {
      let newScale = prevScale + event.deltaY * -0.01;
      return Math.min(Math.max(0.5, newScale), 3);
    });
  }, []);

  // Handle Dragging (Mouse & Touch)
  const startDragging = useCallback(
    (clientX, clientY) => {
      setDragging(true);
      setStart({ x: clientX - position.x, y: clientY - position.y });
    },
    [position]
  );

  const updateDragging = useCallback(
    (clientX, clientY) => {
      if (!dragging) return;
      setPosition((prevPosition) => ({
        x: prevPosition.x + (clientX - start.x - prevPosition.x),
        y: prevPosition.y + (clientY - start.y - prevPosition.y),
      }));
    },
    [dragging, start]
  );

  const handleMouseDown = (event) =>
    startDragging(event.clientX, event.clientY);
  const handleMouseMove = (event) =>
    updateDragging(event.clientX, event.clientY);
  const handleMouseUp = () => setDragging(false);

  // Handle Pinch-to-Zoom (Touch)
  const handleTouchStart = (event) => {
    if (event.touches.length === 2) {
      event.preventDefault();
      const touchDistance = getDistance(event.touches[0], event.touches[1]);
      containerRef.current.dataset.startDistance = touchDistance;
      containerRef.current.dataset.startScale = scale;
    } else if (event.touches.length === 1) {
      startDragging(event.touches[0].clientX, event.touches[0].clientY);
    }
  };

  const handleTouchMove = (event) => {
    if (event.touches.length === 2) {
      event.preventDefault();
      const newDistance = getDistance(event.touches[0], event.touches[1]);
      const startDistance = parseFloat(
        containerRef.current.dataset.startDistance
      );
      const startScale = parseFloat(containerRef.current.dataset.startScale);
      setScale(
        Math.min(Math.max(0.5, startScale * (newDistance / startDistance)), 3)
      );
    } else if (event.touches.length === 1) {
      updateDragging(event.touches[0].clientX, event.touches[0].clientY);
    }
  };

  const getDistance = (touch1, touch2) => {
    return Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
    );
  };

  return (
    <div className='HeroSection__Container'>
      <div
        className='HeroSection__Canvas'
        ref={containerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setDragging(false)}
        style={{
          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
          transformOrigin: 'center',
          cursor: dragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '20000px',
          height: '20000px',
        }}
      ></div>
      <div className='HeroSection__elements'>
        <button
          onClick={() => {
            setScale(1);
            setPosition({
              x: window.innerWidth / 2,
              y: window.innerHeight / 2,
            });
          }}
        >
          Reset Zoom
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
