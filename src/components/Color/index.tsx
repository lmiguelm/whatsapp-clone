import React from 'react';

import './styles.css';

import { useTheme } from '../../contexts/theme';

interface ColorProps {
  color: string;
}

const Color: React.FC<ColorProps> = ({ color }) => {

  const { changeWallpaper } = useTheme();

  return <div onClick={() => changeWallpaper(color)} id="color" style={{ backgroundColor: color }} />
}
export default Color;