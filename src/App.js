//import logo from './logo.svg';
import Navbar from './customer/components/Navbar/Navbar';


import './App.css';
import HomePage from './customer/Pages/HomePage/HomePage';
//import { Navigation } from '@mui/icons-material';

function App() {
  return (
    <div className="">
      <Navbar/>
      
      <div> 
       <HomePage/>
      </div>
    </div>
  )
}

export default App
