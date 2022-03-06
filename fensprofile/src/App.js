import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';



  function App() {
    return (
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <h4>ReactJS Reactstrap ListGroup Component</h4>
            <ListGroup>
                <ListGroupItem>Sample List Item 1</ListGroupItem>
                <ListGroupItem>Sample List Item 2</ListGroupItem>
                <ListGroupItem>Sample List Item 3</ListGroupItem>
                <ListGroupItem>Sample List Item 4</ListGroupItem>
                <ListGroupItem>Sample List Item 5</ListGroupItem>
            </ListGroup>
        </div>
    );
}
//     <BrowserRouter>
//       <div>
    
//         <Headr 
//         to={to}
//         label={label}/>
//           </div>
//           <Switch>
//           <Route path="/" compoent={About} />
//           <Route path="/:projects" component={Projects} />
//           <Route path="/:contacts" component={Contact} />
//           </Switch>
            
//         <div>
//         <Footer />
//         </div>
//     </BrowserRouter>
      
//   </div>
//   );
// }

export default App;
