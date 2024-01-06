import React, { useState } from 'react';
import MUIThemeProvider from './MUIThemeProvider/MUIThemeProvider';
import ReactRouterProvider from './ReactRouterProvider/ReactRouterProvider';
import { Sidebar, Topbar } from '../UI/Components/global';

function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <MUIThemeProvider>

      <ReactRouterProvider />

    </MUIThemeProvider>
  )
}

export default App