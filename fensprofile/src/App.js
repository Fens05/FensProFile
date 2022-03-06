import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Switch, Route} from




function App() {
  return (
  <div style={Background}>
  
    <BrowserRouter>
      <div>
    
        <Headr 
        to={to}
        label={label}/>
          </div>
          <Switch>
          <Route path="/" compoent={About} />
          <Route path="/:projects" component={Projects} />
          <Route path="/:contacts" component={Contact} />
          </Switch>
            
        <div>
        <Footer />
        </div>
    </BrowserRouter>
      
  </div>
  );
}

export default App;
