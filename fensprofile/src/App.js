import React from 'react'


// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Navigation';
// import { BrowserRouter as Route, Switch } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
 
	
function App() {
	return (
		<div>
			<Nav></Nav>
			<main>
				
				<About></About>
				<Projects></Projects>
				
				
			</main>
		</div>
		
	);
	
}



export default App;

