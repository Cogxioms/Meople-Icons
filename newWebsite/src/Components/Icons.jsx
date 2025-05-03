import * as FaIcons from 'react-icons/fa';

// Export an array of at least 100 unique FontAwesome icons
export const iconList = Object.entries(FaIcons)
  .filter(([name]) => name.startsWith('Fa'))
  .slice(0, 200)
  .map(([name, IconComponent]) => ({ icon: <IconComponent />, name }));

// Optionally, export a default icon for initial use
export const DefaultIcon = iconList[0].icon;