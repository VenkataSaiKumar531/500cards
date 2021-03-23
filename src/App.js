import Navbar from './Components/Layouts/Navbar';
 import index from './Components/Layouts/Index'
// import Navbar from './Components/Layouts/Navbar';
import {BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import React from 'react';
import More from './Components/tracks/More'

import {Provider } from './Context.js';

const  App=()=> {
  return (

    <React.Fragment>
      <Provider>


      
            <Router>
      
                <Navbar/>

                  <div className="container">

                    <Switch>


                      <Route exact path='/' component={index} />

                      <Route exact path='/More' component={More}/>
                  



                    </Switch>
                  
                  </div> 



                  </Router>

                  </Provider>
    </React.Fragment>
  );
}

export default App;
