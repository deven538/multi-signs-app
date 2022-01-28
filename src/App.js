import React, { Component } from 'react';
 
 
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Successful from './Components/Successful'
class App extends Component {
 render() {
  
   return (
     <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/successful" element={<Successful/>}/>
       </Routes>
      
     </BrowserRouter>
   );
 }
}
 
export default App;
