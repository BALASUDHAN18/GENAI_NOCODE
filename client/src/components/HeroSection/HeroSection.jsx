import React, { useRef, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [start, setStart] = useState({ x: 0, y: 0 });

    // Handle Scroll Zooming (Mouse)
    const handleWheel = (event) => {
        event.preventDefault();
        let newScale = scale + event.deltaY * -0.01;
        newScale = Math.min(Math.max(0.5, newScale), 3); // Limit zoom
        setScale(newScale);
    };

    // Handle Dragging (Mouse & Touch)
    const handleMouseDown = (event) => {
        setDragging(true);
        setStart({ x: event.clientX - position.x, y: event.clientY - position.y });
    };

    const handleMouseMove = (event) => {
        if (!dragging) return;
        setPosition({
            x: event.clientX - start.x,
            y: event.clientY - start.y,
        });
    };

    const handleMouseUp = () => setDragging(false);

    // Handle Pinch-to-Zoom (Touch)
    const handleTouchStart = (event) => {
        if (event.touches.length === 2) {
            event.preventDefault();
            const touchDistance = getDistance(event.touches[0], event.touches[1]);
            containerRef.current.dataset.startDistance = touchDistance;
            containerRef.current.dataset.startScale = scale;
        } else if (event.touches.length === 1) {
            // Handle dragging for touch
            setDragging(true);
            setStart({ x: event.touches[0].clientX - position.x, y: event.touches[0].clientY - position.y });
        }
    };

    const handleTouchMove = (event) => {
        if (event.touches.length === 2) {
            event.preventDefault();
            const newDistance = getDistance(event.touches[0], event.touches[1]);
            const startDistance = parseFloat(containerRef.current.dataset.startDistance);
            const startScale = parseFloat(containerRef.current.dataset.startScale);
            let newScale = startScale * (newDistance / startDistance);
            newScale = Math.min(Math.max(0.5, newScale), 3); // Limit zoom
            setScale(newScale);
        } else if (event.touches.length === 1 && dragging) {
            // Handle dragging for touch
            setPosition({
                x: event.touches[0].clientX - start.x,
                y: event.touches[0].clientY - start.y,
            });
        }
    };

    const getDistance = (touch1, touch2) => {
        return Math.sqrt(
            Math.pow(touch2.clientX - touch1.clientX, 2) +
            Math.pow(touch2.clientY - touch1.clientY, 2)
        );
    };

    return (
        <div className="HeroSection__Container">
            {/* Draggable & Zoomable Workspace */}
            <div
                className="HeroSection__Canvas"
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
                    transformOrigin: "center",
                    cursor: dragging ? "grabbing" : "grab",
                }}
            >
                <h2>Pinch, Zoom, and Drag Here</h2>
            </div>

            {/* Additional UI Elements */}
            <div className="HeroSection__elements">
                <button onClick={() => setScale(1)}>Reset Zoom</button>
            </div>
        </div>
    );
};

export default HeroSection;
