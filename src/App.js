import React from 'react';
import Main from 'Main';
import {ThemeProvider} from 'styled-components'; //테마를 설치하고 App을 묶어준다
import { darkTheme , lightTheme} from 'theme';
import { useState } from 'react';

const App = () => {
  const [toggle,setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle)
  }
  return (
    <ThemeProvider theme={toggle ? darkTheme : lightTheme}>
      <Main onToggle={onToggle} toggle={toggle}/>
    </ThemeProvider>
  );
};



export default App;