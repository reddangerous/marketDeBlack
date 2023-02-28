import './App.css';
import VerticalTabs from './VerticalTabs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
function App() {
  return (
    <>
    <VerticalTabs/>
     <BrowserRouter>
       
      <Routes>
      <Route exact path='/signup' element= {<SignUp/>} />
      <Route path='/login' element= {<Login/>} />
        
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
