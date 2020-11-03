import React from 'react';
import {Main} from './pages/Main.page'
import {StateProvider} from "./store/store";

function App() {
  return (
      <StateProvider>
        <Main />
      </StateProvider>
  );
}

export default App;
