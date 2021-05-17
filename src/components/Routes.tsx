import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Login from '../views/Login';
import Pokemones from '../views/Pokemones';
import Register from '../views/Register';
import NavBar from './NavBar';

 function Routes(){
     return(
         <Router>
             <NavBar/>
             <Switch>
                 <Route path="/" exact>
                     <Login/>
                 </Route>
                 <Route path="/register" exact>
                     <Register/>
                 </Route>
                 <Route path="/pokemones" exact>
                     <Pokemones/>
                 </Route>
             </Switch>
         </Router>
     ); 
}
export default Routes;