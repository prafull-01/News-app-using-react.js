import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home'
import NavBar from './component/NavBar';
import { useState } from 'react';


function App() {
  const [category, setCategory]=useState("general");
  

  return (
    <>
    
      <NavBar setCategory={setCategory} />
      <Home category={category}/>
      
    </>
  )
}

export default App
