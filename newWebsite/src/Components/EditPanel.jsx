import React, { useState } from 'react';
import './EditPanel.css';

const icons = ['⭐', '🌟', '🚀', '🎯', '🔥', '💡', '📦', '🛠️', '💻', '🎉'];

const EditPanel = ({ card, onUpdate, onClose }) => {
  const [iconIndex, setIconIndex] = useState(0);
  const [text, setText] = useState(card.text);
  const [showIconPicker, setShowIconPicker] = useState(false);

  const changeIcon = (step) => {
    const newIndex = (iconIndex + step + icons.length) % icons.length;
    setIconIndex(newIndex);
    onUpdate({ icon: icons[newIndex] });
  };

  return (
    <div className="edit-panel">
      <h2>Edit Card</h2>
      <div className="icon-picker">
        <button onClick={() => changeIcon(-1)}>⬅</button>
        <span className="icon">{icons[iconIndex]}</span>
        <button onClick={() => changeIcon(1)}>➡</button>
      </div>

      <input
        type="text"
        placeholder="Enter card text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          onUpdate({ text: e.target.value });
        }}
      />

      <button onClick={() => setShowIconPicker(true)}>More Icons</button>
      <button className="close-btn" onClick={onClose}>Close</button>

      {showIconPicker && (
        <div className="modal-overlay">
          <div className="modal-content">
            <input
              type="text"
              placeholder="Search icons..."
              onChange={(e) => {
                const filtered = icons.filter(icon => icon.includes(e.target.value));
                setIconIndex(icons.indexOf(filtered[0]) || 0);
              }}
            />
            <div className="icon-grid">
              {icons.map((icon, i) => (
                <span key={i} className="icon" onClick={() => {
                  setIconIndex(i);
                  onUpdate({ icon });
                  setShowIconPicker(false);
                }}>
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPanel;
