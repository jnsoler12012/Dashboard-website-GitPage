import React, { useState } from 'react';
import MUIThemeProvider from './MUIThemeProvider/MUIThemeProvider';
import ReactRouterProvider from './ReactRouterProvider/ReactRouterProvider';
import { MainContextProvider } from './MainContextProvider';


function App() {

  return (
    <MUIThemeProvider>
      <MainContextProvider>
        <ReactRouterProvider />
      </MainContextProvider>
    </MUIThemeProvider>
  )
}

export default App