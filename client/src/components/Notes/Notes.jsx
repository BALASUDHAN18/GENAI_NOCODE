import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import { Bold, Italic, AlignLeft, AlignCenter, AlignRight, Save, Trash2, X } from "lucide-react";
import "./Notes.css";

const Notes = ({ closeNotes }) => {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [alignment, setAlignment] = useState("left");

  useEffect(() => {
    const savedText = localStorage.getItem("notepad-text");
    if (savedText) setText(savedText);
  }, []);

  useEffect(() => {
    localStorage.setItem("notepad-text", text);
  }, [text]);

  const handleSave = () => {
    if (!text.trim()) {
      alert("Cannot save an empty note.");
      return;
    }
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "notepad.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="notes-overlay">
      <Rnd
        default={{
          x: "50%",
          y: 0,
          width: 400,
          height: 300,
        }}
        minWidth={300}
        minHeight={200}
        bounds="window"
        dragHandleClassName="notes-title"
        enableResizing={false} // Disable resizing to prevent misalignment
      >
        <div className="notes-card">
          <button className="close-btn" onClick={closeNotes}>
            <X size={18} />
          </button>
          <div className="notes-toolbar">
            <h1 className="notes-title">Notepad</h1>

            <div className="toolbar-controls">
              <select
                className="font-size-select"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
              >
                {[12, 14, 16, 18, 20, 24, 28, 32].map((size) => (
                  <option key={size} value={size}>{size}px</option>
                ))}
              </select>

              <button
                aria-label="Toggle Bold"
                className={`toolbar-button ${isBold ? "active" : ""}`}
                onClick={() => setIsBold(!isBold)}
              >
                <Bold className="icon" />
              </button>

              <button
                aria-label="Toggle Italic"
                className={`toolbar-button ${isItalic ? "active" : ""}`}
                onClick={() => setIsItalic(!isItalic)}
              >
                <Italic className="icon" />
              </button>

              <div className="alignment-buttons">
                <button
                  aria-label="Align Left"
                  className={`toolbar-button ${alignment === "left" ? "active" : ""}`}
                  onClick={() => setAlignment("left")}
                >
                  <AlignLeft className="icon" />
                </button>
                <button
                  aria-label="Align Center"
                  className={`toolbar-button ${alignment === "center" ? "active" : ""}`}
                  onClick={() => setAlignment("center")}
                >
                  <AlignCenter className="icon" />
                </button>
                <button
                  aria-label="Align Right"
                  className={`toolbar-button ${alignment === "right" ? "active" : ""}`}
                  onClick={() => setAlignment("right")}
                >
                  <AlignRight className="icon" />
                </button>
              </div>

              <button className="toolbar-button save-button" onClick={handleSave} aria-label="Save Note">
                <Save className="icon" />
              </button>

              <button className="toolbar-button clear-button" onClick={() => setText("")} aria-label="Clear Note">
                <Trash2 className="icon" />
              </button>
            </div>
          </div>

          <textarea
            className="notes-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              textAlign: alignment,
            }}
            placeholder="Start typing..."
          />
        </div>
      </Rnd>
    </div>
  );
};

export default Notes;
