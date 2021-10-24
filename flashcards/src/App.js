import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CardState from './context/flashcards/CardState';
import Alert  from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';

function App() {

  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#031633';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <>
      <CardState>
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert}  mode={mode}/>
              </Route>
              <Route exact path="/about">
                <About  mode={mode}/>
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/login">
                <Login  showAlert={showAlert}/>
              </Route>
              <Route exact path="/signup">
                <Signup  showAlert={showAlert}/>
              </Route>
            </Switch>
          </div>
          <Footer  mode={mode}/>
        </Router>
      </CardState>
    </>
  );
}

export default App;

