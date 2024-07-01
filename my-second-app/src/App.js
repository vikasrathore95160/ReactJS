import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      // document.body.style.backgroundColor = 'black';
    }
    else  {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode}/> 
        {/* <About/> */}
      </div>

      
    </>
  );
}

export default App;
