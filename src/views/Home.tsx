import React, { Fragment } from 'react';
import { useAuth } from 'reactfire';

const Home = () => {
    const auth =useAuth();
    const logout=()=>{
        auth.signOut()
        
    }
    return (
        <Fragment>
            <button onClick={logout}>logout</button>
        </Fragment>
    )    
}

export default Home