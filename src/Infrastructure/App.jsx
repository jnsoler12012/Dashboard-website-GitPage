import React, { useState } from 'react';
import MUIThemeProvider from './MUIThemeProvider/MUIThemeProvider';
import ReactRouterProvider from './ReactRouterProvider/ReactRouterProvider';
import { Sidebar, Topbar } from '../UI/Components/global';

// other comment
/** other comment */
function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <MUIThemeProvider>
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          <ReactRouterProvider />
        </main>
      </div>
    </MUIThemeProvider>
  )
}

export default App