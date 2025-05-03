import React from 'react';
import './Meople.css';

const Meople = ({ color }) => (
  <div className="meople">
    <div className="meople-head" style={{ backgroundColor: color }}></div>
    <div className="meople-body" style={{ backgroundColor: color }}></div>
  </div>
);

export default Meople;
