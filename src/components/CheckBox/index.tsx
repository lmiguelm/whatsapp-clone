import React from 'react';
import { Checkbox } from '@material-ui/core';

import './styles.css';

import { useTheme } from '../../contexts/theme';

interface CheckBoxProps {
  id: string;
  label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ id, label }) => {

  const { theme } = useTheme();

  return (
    <div id="checkbox-item">
      <Checkbox id={id} style={{
        color: '#00af9c'
      }} />
      <label style={{ color: theme.colorPrimary }} htmlFor={id}>{label}</label>
    </div>
  )
}

export default CheckBox;