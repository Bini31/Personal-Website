
import './App.css';
import {Services} from './components/Services'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './components/Navbar';
import {Home} from './components/Home';
import {Experience} from './components/Experience'
import {ContactMe} from './components/ContactMe'
function App() {
  return (
    <div className="App">

      <Navbar/>
    
      <Router>
        <Route path='/Home' component={Home}/>
        <Route path='/Services' component={Services}/>
        <Route path='/Experience' component={Experience}/>
        <Route path='/Contact' component={ContactMe}/>
    </Router>
     
     
    </div>
  );
}

export default App;
