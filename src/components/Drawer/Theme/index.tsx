import React, { useState } from 'react';

import './styles.css';

import { useTheme } from '../../../contexts/theme';

interface ThemeProps {
  callback(close: boolean): void;
}

const Theme: React.FC<ThemeProps> = ({ callback }) => {

  const { theme, changeTheme } = useTheme();
  const [selectOption, setSelectOption] = useState(1);

  function handleChangeThemeWPP() {
    if (selectOption == 1) {
      changeTheme(false);
    } else {
      changeTheme(true);
    }
    callback(false);
  }

  function handleOptionChange(e: any) {
    setSelectOption(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div id="dialog-theme" style={{ backgroundColor: theme.backgroundSecondary }}>
      <span style={{ color: theme.colorPrimary }}>Escolha um tema</span>

      <div className="radio-container">
        <div className="radio">
          <input type="radio" id="1" value={1} name="radio" onChange={handleOptionChange} checked={selectOption == 1} />
          <label style={{ color: theme.colorPrimary }} htmlFor="1">Claro</label>
        </div>
        <div className="radio">
          <input type="radio" id="2" value={2} name="radio" onChange={handleOptionChange} checked={selectOption == 2} />
          <label style={{ color: theme.colorPrimary }} htmlFor="2">Escuro</label>
        </div>
      </div>

      <div className="button-container">
        <button onClick={() => callback(false)} type="button" className="button cancel">Cancelar</button>
        <button onClick={handleChangeThemeWPP} style={{ color: '#fff' }} type="button" className="button">OK</button>
      </div>
    </div>
  );
}

export default Theme;