
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationheader from './components/navigationheader/Navigationheader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Aboutuspage from './components/aboutuspage/Aboutuspage';
import Cancellationpage from './components/cancellationpage/Cancellationpage';
import Bookingenquirypage from './components/bookingenquirypage/Bookingenquirypage';
import Managebookingpage from './components/managebookingpage/Managebookingpage';
import Loginpage from './components/loginpage/Loginpage';
import Signup from './components/Signup/Signup';
import Gallerypage from './components/gallery/Gallerypage';
import Contactuspage from './components/contactuspage/Contactuspage';
import Policypage from './components/policypage/Policypage';
import Termpage from './components/termpage/Termpage';
import Routepage from './components/routepage/Routepage';
import Bushirepage from './components/bushirepage/Bushirepage';
import Booknow from './components/booknow/Booknow';
import Selectberthpage from './components/selectberthpage/Selectberthpage';
function App() {
  return (
    <div>
      
      <Router>
        <Navigationheader></Navigationheader>
          <Routes>
            <Route path='/' element={<Homepage></Homepage>}></Route>
            <Route path='/Aboutuspage' element={<Aboutuspage></Aboutuspage>}></Route>
            <Route path='/Cancellationpage' element={<Cancellationpage></Cancellationpage>}></Route>
            <Route path='/Bookingenquirypage' element={<Bookingenquirypage></Bookingenquirypage>}></Route>
            <Route path='/Managebookingpage' element={<Managebookingpage></Managebookingpage>}></Route>
            <Route path='/Loginpage' element={<Loginpage></Loginpage>}></Route>
            <Route path='/Signup' element={<Signup></Signup>}></Route>
            <Route path='/Gallerypage' element={<Gallerypage></Gallerypage>}></Route>
            <Route path='/Contactuspage' element={<Contactuspage></Contactuspage>}></Route>
            <Route path='/Policypage' element={<Policypage></Policypage>}></Route>
            <Route path='/Termpage' element={<Termpage></Termpage>}></Route>
            <Route path='/Routepage' element={<Routepage></Routepage>}></Route>
            <Route path='/Bushirepage' element={<Bushirepage></Bushirepage>}></Route>
            <Route path='/Booknow' element={<Booknow></Booknow>}></Route>
            <Route path='/Selectberthpage' element={<Selectberthpage></Selectberthpage>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
