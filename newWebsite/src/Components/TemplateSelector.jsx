import React, { useState } from 'react';
import './TemplateSelector.css';
import pattern1 from '../Images/pattern1.jpeg';
import pattern2 from '../Images/pattern2.jpeg';
import pattern3 from '../Images/pattern3.jpeg';
import pattern4 from '../Images/pattern4.jpeg';
import pattern5 from '../Images/pattern5.jpeg';
import pattern6 from '../Images/pattern6.jpeg';
import pattern7 from '../Images/pattern7.jpeg';

const colors = [
  { name: 'Meople Sunset', value: 'linear-gradient(135deg, #A66DD4, #8A4FC1)' },
  { name: 'Solar Bloom', value: 'linear-gradient(135deg, #F6C542, #FF69B4)' },
  { name: 'Seafoam Breeze', value: 'linear-gradient(135deg, #20B2AA, #3CB371)' },
  { name: 'Tutti Frutti', value: 'linear-gradient(135deg, #D87EFF, #50E3C2)' },
  { name: 'Peach Soufflé', value: 'linear-gradient(135deg, #FFDAB9, #FF7F50)' },
  { name: 'Mystic Sky', value: 'linear-gradient(135deg, #89CFF0, #4682B4)' },
  { name: 'Lavender Dream', value: 'linear-gradient(135deg, #E6E6FA, #9370DB)' }
];

const backgrounds = [
  { id: 'pattern1', image: pattern1 },
  { id: 'pattern2', image: pattern2 },
  { id: 'pattern3', image: pattern3 },
  { id: 'pattern4', image: pattern4 },
  { id: 'pattern5', image: pattern5 },
  { id: 'pattern6', image: pattern6 },
  { id: 'pattern7', image: pattern7 }
];

const TemplateSelector = ({ setBackground, setColor, onStart }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(null);

  return (
    <div className="template-selector">
      <h2>Choose a template</h2>

      <h3>Choose a color for your board:</h3>
      <div className="color-choices">
        {colors.map((col) => (
          <div
            key={col.name}
            className={`color-circle ${selectedColor === col.value ? 'selected' : ''}`}
            style={{ background: col.value }}
            title={col.name}
            onClick={() => {
              setColor(col.value);
              setSelectedColor(col.value);
            }}
          />
        ))}
      </div>

      <h3>Choose a background for your board (Optional):</h3>
      <div className="background-choices">
        {backgrounds.map((bg) => (
          <div
            key={bg.id}
            className={`background-preview ${selectedBackground === bg.id ? 'selected' : ''}`}
            onClick={() => {
              setBackground(bg.id);
              setSelectedBackground(bg.id);
            }}
          >
            <img src={bg.image} alt={bg.id} className="background-thumb" />
          </div>
        ))}
      </div>

      <div className="template-actions">
        <button onClick={onStart} className="start-btn">START BOARD</button>
      </div>
    </div>
  );
};

export default TemplateSelector;
