import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { AuthCheck, useAuth } from 'reactfire';

const Home=lazy(()=>import('../views/Home'));
const Login=lazy(()=>import('../views/Login'));
const Pokemones=lazy(()=>import('../views/Pokemones'));
const Register=lazy(()=>import('../views/Register'));
const NavBar=lazy(()=>import('./NavBar'));

 function Routes(){
    const state = useSelector((store:any) => store.auth.authState)
    const auth=useAuth();

     return(
        <AuthCheck fallback={<Login/>} auth={auth}>
            <Router>  
                {(state)&&
                    <NavBar/>
                }              
             <Switch>
                <Route path="/" exact>
                    <Home />
                 </Route>
                 <Route path="/login" exact>
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
      </AuthCheck>
     ); 
}

export default Routes;