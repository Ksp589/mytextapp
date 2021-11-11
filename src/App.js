import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App(props) {

  const [mode , setmode] = useState("light");
  const [alert , setAlert] = useState(null);
  const showalert =(message, type)=>{
    setAlert({
             msg: message,
             type:type
            })
              setTimeout(() => {
               setAlert(null);
         }, 1500);
      

  }

  const toggelMode =()=>{
    
    if(mode==="light"){
      setmode('dark');
      document.body.style.backgroundColor="grey"
      showalert("dark mode has been enabled", "success");
      document.title='kulvin-dark mode';
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white"
      showalert("light mode has been enabled", "success");
      document.title='kulvin-light mode';
    }
  }

  return (
    <> 
     <Navbar title="kulvin" mode= {mode} toggelMode={toggelMode} />
     <Alert alert={alert}/>
     <div className="container">
     <TextForm showalert={showalert}Header="Enter your Text to analysis" mode={mode}/>
     </div>
      
    </>
    
  );  
}

export default App;
