import {BrowserRouter  , Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Header from './components/Header';

export default function App() {
  return ( <BrowserRouter>
  <Header/>
  <Routes>ddddsf
  <Route path="/Home" element={ <Home /> } />
  <Route path="/sign-in" element={ <SignIn/> } />
  <Route path="/sign-up" element={ <SignUp /> } />
  <Route path="/about" element={ < About /> } />
  <Route path="/profile" element={ <Profile /> } />
  </Routes>
  </BrowserRouter>
    
    
  )
}
