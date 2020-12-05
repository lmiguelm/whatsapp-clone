import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Color from '../../Color';

import { useTheme } from '../../../contexts/theme';

import './styles.css';

interface WallpaperProps {
  callback(close: boolean): void;
}

const Wallpaper: React.FC<WallpaperProps> = ({ callback }) => {

  const { theme } = useTheme();

  return (
    <div id="drawer-wallpaper" style={{ backgroundColor: theme.backgroundDrawer }}>
      <div className="header" style={{ backgroundColor: theme.backgroundTertiary }}>
        <FiArrowLeft size={24} style={{ cursor: 'pointer' }} onClick={() => callback(false)} />
        <strong style={{ marginLeft: '30px' }}>Definir papel de parede da conversa</strong>
      </div>

      <div className="colors-container">
        <Color color="#0d1418" />
        <Color color="#ccebdc" />
        <Color color="#aed8c7" />
        <Color color="#7acba5" />
        <Color color="#c7e9eb" />
        <Color color="#a9dbd8" />
        <Color color="#68d5d9" />
        <Color color="#6ec3d4" />
        <Color color="#f2dad5" />
        <Color color="#f2d5e1" />
        <Color color="#fbcad2" />
        <Color color="#ffa7a8" />
        <Color color="#cbdaec" />
        <Color color="#d7d3eb" />
        <Color color="#e5c0eb" />
        <Color color="#d0deb1" />
        <Color color="#dee0b4" />
        <Color color="#e6dfa8" />
        <Color color="#f7e9a8" />
        <Color color="#ffd1a4" />
        <Color color="#ff8a8c" />
        <Color color="#ff5978" />
        <Color color="#f56056" />
        <Color color="#dc6e4f" />
        <Color color="#e6e365" />
        <Color color="#73c780" />
        <Color color="#2293a4" />
        <Color color="#219ed9" />
        <Color color="#2b5aa6" />
        <Color color="#74676a" />
        <Color color="#48324d" />
        <Color color="#dee3e9" />
        <Color color="#d9dade" />
        <Color color="#c0c1c4" />
        <Color color="#7e90a3" />
        <Color color="#55626f" />
        <Color color="#243640" />
        <Color color="#162127" />
      </div>
    </div>


  );
}

export default Wallpaper;