import React from 'react';
import './Card.css';

const Card = ({ icon, text, value, color, onClick, style }) => {
  return (
    <div className="dashboard-card" onClick={onClick} style={{ background: color, ...style }}>
      <div className="card-icon">{icon}</div>
      <div className="card-text">{text}</div>
      <div className="card-value">{value}</div>
    </div>
  );
};

export default Card;