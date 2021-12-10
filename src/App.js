import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';

function App() {
  return (   
<div>
  <Header/>
  <Home/>
  <About/>
  <Work/>
<Contact/>


{/* <Router>
  <Header />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      {/* <Route exact path="/About" element={<About/>}/> */}
      {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
      {/* <Route path="*" element={<NotFound/>}/> */}
    {/* </Routes> */}
{/* </Router> */} 


</div>
  );
}

export default App;
