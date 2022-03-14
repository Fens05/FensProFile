import React from 'react'
import './App.css';


// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Navigation';
// import { BrowserRouter as Route, Switch } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
 
	
function App() {
	return (
		<div>
			<Nav></Nav>
			<main>
				
				<About></About>
				<Projects></Projects>
				<Contact></Contact>
				
				
			</main>
			<Footer></Footer>
		</div>
		
	);
	
}



export default App;

