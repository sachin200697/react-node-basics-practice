import React, {createContext, useContext, useEffect, useState} from 'react';

const ThemeContext = createContext();

export const useTheme = ()=>{
    return useContext(ThemeContext);
}

export function ThemeProvider({children, name}) {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark?'dark':'light';

  const toggleTheme = ()=>{
    setIsDark(!isDark);
  }

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme);
  }, [isDark]);

  console.log('doc',name);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>        
        {children}
    </ThemeContext.Provider>
  );
}

