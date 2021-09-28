import './App.css';
import Menu from './component/menu/Menu';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import Pricing from './component/pricing/Pricing';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './component/about/About';
import Contact from './component/contact/Contact';

function App() {

  return (
    <Router>
    <div>
    
    <div className="App">
      <Menu></Menu>
    </div>
    <Switch>
    <div className="App-content">
    <Route path="/" exact component={Home} />
    <Route path="/pricing" exact component={Pricing} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
    </div>
    </Switch>
    <div className="App-footer">
      <Footer></Footer>
    </div>
    </div>
    </Router>
  );
}



export default App;
