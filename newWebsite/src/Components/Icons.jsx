import { FaSun, FaHippo, FaMountain, FaWater, FaSnowflake, FaIcicles } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';

// Use SVG icons for sun, lion, mountains, sea, snow, and ice, styled black
const customIcons = [
  { icon: <FaSun color="black" />, name: 'Sun' },
  { icon: <FaHippo color="black" />, name: 'Lion' }, // FaHippo as closest animal
  { icon: <FaMountain color="black" />, name: 'Mountains' },
  { icon: <FaWater color="black" />, name: 'Sea' },
  { icon: <FaSnowflake color="black" />, name: 'Snow' },
  { icon: <FaIcicles color="black" />, name: 'Ice' },
];

export const iconList = [
  ...customIcons,
  ...Object.entries(FaIcons)
    .filter(([name]) => name.startsWith('Fa'))
    .slice(0, 200)
    .map(([name, IconComponent]) => ({ icon: <IconComponent />, name })),
];

export const DefaultIcon = iconList[0].icon;