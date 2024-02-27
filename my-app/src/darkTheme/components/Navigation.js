import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useDarkTheme';

function Navigation() {
    const {theme, toggleTheme} = useTheme();
    const onThemeChange = () => {
        toggleTheme();
    }
  return (
    <div className='navigation-container'>
      <div className='navigation-container__links'>
      <Link to={'/home'} className='navigation-container__link'>Home</Link>
      <Link to={'/about'} className='navigation-container__link'>About</Link>
      <Link to={'/blog'} className='navigation-container__link'>Blog</Link>
      </div>
      <label htmlFor='checkbox' className='checkbox-lavel'>
        <input type='checkbox' checked={theme ==='dark'} onChange={onThemeChange} id='checkbox'/>
        <span className='slider'></span>
      </label>
      
    </div>
  );
}

export default Navigation;
