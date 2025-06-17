
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationheader from './components/navigationheader/Navigationheader';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Aboutuspage from './components/aboutuspage/Aboutuspage';
import Cancellationpage from './components/cancellationpage/Cancellationpage';
import Bookingenquirypage from './components/bookingenquirypage/Bookingenquirypage';
import Managebookingpage from './components/managebookingpage/Managebookingpage';
import Loginpage from './components/loginpage/Loginpage';


function App() {
  return (
    <div>
      <Navigationheader></Navigationheader>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/Aboutuspage' element={<Aboutuspage></Aboutuspage>}></Route>
          <Route path='/Cancellationpage' element={<Cancellationpage></Cancellationpage>}></Route>
          <Route path='/Bookingenquirypage' element={<Bookingenquirypage></Bookingenquirypage>}></Route>
          <Route path='/Managebookingpage' element={<Managebookingpage></Managebookingpage>}></Route>
          <Route path='/Loginpage' element={<Loginpage></Loginpage>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
