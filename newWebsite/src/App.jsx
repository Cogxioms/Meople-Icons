import React, { useState } from 'react';
import TemplateSelector from './Components/TemplateSelector';
import Dashboard from './Components/Dashboard';

const App = () => {
  const [background, setBackground] = useState('default');
  const [color, setColor] = useState('#FF7F50');
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="app">
      {!showDashboard ? (
        <TemplateSelector 
          setBackground={setBackground} 
          setColor={setColor} 
          onStart={() => setShowDashboard(true)}
        />
      ) : (
        <Dashboard background={background} color={color} />
      )}
    </div>
  );
};

export default App;