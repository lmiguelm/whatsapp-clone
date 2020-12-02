import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import './styles.css';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface DrawerProps {
  show: boolean;
  anchor: Anchor;
}

const DrawerComponent: React.FC<DrawerProps> = ({ children, anchor, show }) => {

  return (
    <Drawer
      anchor={anchor}
      open={show}
    >
      {children}
    </Drawer>
  );
}

export default DrawerComponent;

