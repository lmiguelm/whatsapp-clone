import React from 'react';
import { Checkbox } from '@material-ui/core';

import './styles.css';

interface CheckBoxProps {
  id: string;
  label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ id, label }) => {
  return (
    <div id="checkbox-item">
      <Checkbox id={id} style={{
        color: '#00af9c'
      }} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default CheckBox;