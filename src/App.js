import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App=() =>{
  //handle alert msg
  const handleAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  }

  //button performance
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0c3320';
      document.body.style.color = 'azure';
      handleAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      handleAlert("Light mode has been enabled", "success")
      
    }
  }



  const [mode, setMode] = useState('light');
  //whether dark mode is ebnabled or not 

  const [alert, setAlert] = useState(null);


  return (
    // <div>
    //   <Navbar title="TextEngineering" frst="Home" scnd="About" mode={mode} toggleMode={toggleMode} />

    //   <Alert alert={alert} />

    //   <div className="container my-4" >
    //     <About mode={mode} />
    //     <TextForm handleAlert={handleAlert} mode={mode} heading="Analyze your text" />

    //   </div>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar  alert={alert} title="TextEngineering" frst="Home" scnd="About" mode={mode} toggleMode={toggleMode}/>}>
         
        <Route index element={<TextForm handleAlert={handleAlert} mode={mode} heading="Analyze your text"/>}/>        
        <Route path="/about" element={<About mode={mode}/>} />
            
      </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
// 