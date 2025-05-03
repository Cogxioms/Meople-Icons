// Components/Dashboard.jsx
import React, { useState } from 'react';
import './Dashboard.css';
import Meople from './Meople';
import IconPickerModal from './IconPickerModal';
import { iconList } from './Icons';
import Card from './Card';

const Dashboard = ({ color, background }) => {
  // All cards use the selected color from previous screen
  const defaultValues = [100, 120, 110, 130, 140, 150, 160, 170];
  const icons = iconList.map(i => i.icon);
  const [cards, setCards] = useState(Array(8).fill().map((_, i) => ({
    id: i,
    icon: icons[i % icons.length], // use icon components for initial state
    text: `Card ${i + 1}`,
    value: defaultValues[i],
    color: color // use selected color for all cards
  })));
  const [editingCard, setEditingCard] = useState(null);
  const [showIconPicker, setShowIconPicker] = useState(false);

  const handleCardClick = (card) => setEditingCard(card);

  const handleTextChange = (e) => {
    const updated = [...cards];
    updated[editingCard.id].text = e.target.value;
    setCards(updated);
  };

  const handleValueChange = (e) => {
    const updated = [...cards];
    updated[editingCard.id].value = e.target.value;
    setCards(updated);
  };

  const handleColorChange = (e) => {
    const updated = [...cards];
    updated[editingCard.id].color = e.target.value;
    setCards(updated);
  };

  const changeIcon = (direction) => {
    const currentIndex = icons.indexOf(cards[editingCard.id].icon);
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % icons.length
      : (currentIndex - 1 + icons.length) % icons.length;

    const updated = [...cards];
    updated[editingCard.id].icon = icons[newIndex];
    setCards(updated);
  };

  const handleIconSelect = (icon) => {
    const updated = [...cards];
    updated[editingCard.id].icon = icon;
    setCards(updated);
    setShowIconPicker(false);
  };

  const getBackgroundStyle = () => {
    return background.startsWith('pattern')
      ? { backgroundImage: `url(/src/Images/${background}.jpeg)`, backgroundSize: 'cover' }
      : { background: color };
  };

  return (
    <div className="dashboard-container custom-dashboard-layout">
      <div className={`dashboard-main${editingCard ? ' dashboard-shifted' : ''}`}>
        {editingCard ? (
          <>
            <DashboardView 
              cards={cards} 
              color={color} 
              background={background} 
              onCardClick={handleCardClick} 
              isPreview={true} 
            />
            <div className="edit-panel-right">
              <h3>Edit Card {editingCard.id + 1}</h3>
              <div className="icon-controls">
                <button onClick={() => changeIcon('prev')} style={{ background: cards[editingCard.id].color, color: '#fff' }}>&#9664;</button>
                <div className="current-icon">{cards[editingCard.id].icon}</div>
                <button onClick={() => changeIcon('next')} style={{ background: cards[editingCard.id].color, color: '#fff' }}>&#9654;</button>
              </div>
              <button onClick={() => setShowIconPicker(true)} className="more-icons-btn" style={{ background: cards[editingCard.id].color, color: '#fff' }}>More Icons</button>
              <div className="text-input">
                <label>Card Text:</label>
                <input type="text" value={cards[editingCard.id].text} onChange={handleTextChange} />
              </div>
              <div className="value-input">
                <label>Card Value:</label>
                <input type="number" value={cards[editingCard.id].value} onChange={handleValueChange} />
              </div>
              <div className="color-input">
                <label>Card Color:</label>
                <input type="color" value={cards[editingCard.id].color} onChange={handleColorChange} />
              </div>
              <button onClick={() => setEditingCard(null)} className="done-btn" style={{ background: cards[editingCard.id].color, color: '#fff' }}>Done</button>
            </div>
            {showIconPicker && <IconPickerModal onSelect={handleIconSelect} onClose={() => setShowIconPicker(false)} />}
          </>
        ) : (
          <DashboardView 
            cards={cards} 
            color={color} 
            background={background} 
            onCardClick={handleCardClick} 
          />
        )}
      </div>
    </div>
  );
};

const DashboardView = ({ cards, color, background, onCardClick, isPreview }) => {
  // Always apply background style, even in preview/edit mode
  const backgroundStyle = background.startsWith('pattern')
    ? { backgroundImage: `url(/src/Images/${background}.jpeg)`, backgroundSize: 'cover' }
    : { background: color };

  // Arrange cards in a square/rectangle around the board
  const positions = [
    { left: 60, top: 20 },   // top-left
    { left: 300, top: 20 },  // top-center
    { left: 540, top: 20 },  // top-right
    { left: 540, top: 300 }, // right-center
    { left: 540, top: 540 }, // bottom-right
    { left: 300, top: 540 }, // bottom-center
    { left: 60, top: 540 },  // bottom-left
    { left: 60, top: 300 }   // left-center
  ];

  return (
    <div className={`dashboard-grid ${isPreview ? 'preview' : ''}`} style={{ ...backgroundStyle, position: 'relative', width: 700, height: 700, margin: '0 auto' }}>
      <div className="corner-circle top-left" style={{ backgroundColor: color }}></div>
      <div className="corner-circle top-right" style={{ backgroundColor: color }}></div>
      <div className="corner-circle bottom-left" style={{ backgroundColor: color }}></div>
      <div className="corner-circle bottom-right" style={{ backgroundColor: color }}></div>

      <div className="cards-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {cards.map((card, i) => (
          <Card
            key={card.id}
            icon={card.icon}
            text={card.text}
            value={card.value}
            color={card.color}
            onClick={() => onCardClick(card)}
            style={{ position: 'absolute', ...positions[i] }}
          />
        ))}
      </div>
      <div className="meople-center rotated-center-content" style={{ position: 'absolute', left: 350 - 25, top: 350 - 140 }}>
        <Meople color={color} />
        {color.startsWith('linear-gradient') ? (
          <div
            className="board-label"
            style={{
              background: color,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: '100px',
              fontWeight: 'bold',
              letterSpacing: '2px',
              transform: 'rotate(-55deg)',
              display: 'inline-block',
            }}
          >
            𝕮𝖔𝖌𝖝𝖎𝖔𝖒𝖘
          </div>
        ) : (
          <div
            className="board-label"
            style={{
              color: color,
              fontSize: '100px',
              fontWeight: 'bold',
              letterSpacing: '2px',
              transform: 'rotate(-55deg)',
              display: 'inline-block',
            }}
          >
            MEOPLE
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

