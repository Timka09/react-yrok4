// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Box } from './Components/Box/Box'
import { Button } from './Components/Box/Button/Button';

function App() {

  return (
    <>
      {/* <Box type="small" />
      <Box type="medium" />
      <Box type="large" /> */}

      <Button typeBtn="btn-small" />
      <Button typeBtn="btn-medium" />
      <Button typeBtn="btn-large" />
    </>
  );
}

export default App
