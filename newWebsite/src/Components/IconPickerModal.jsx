import React, { useState } from 'react';
import { iconList } from './Icons';
import './IconPickerModal.css';

const IconPickerModal = ({ onSelect, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredIcons = iconList.filter(i => i.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="icon-picker-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>Select an Icon</h3>
        <input
          type="text"
          placeholder="Search icons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="icons-grid">
          {filteredIcons.map((item, index) => (
            <div key={index} className="icon-option" onClick={() => onSelect(item.icon)}>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconPickerModal;