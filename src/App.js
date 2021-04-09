import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {GlobalProvider} from './Global/GlobalState';
import "./App.css";
const Loader = lazy(() => import("./components/Loader"));
const Nav = lazy(() => import("./components/Nav"));
// const Cart = lazy(() => import("./components/Cart"));
const Buyer = lazy(() => import("./components/Buyer"));
const Sellers = lazy(() => import("./components/Sellers"));
const Home = lazy(() => import("./components/Home"));

function App() {
  

  return (

      <Suspense fallback={<h1>Loading Web App...</h1>}>
          < GlobalProvider>
        <div className="App"> 
            <Router>
              <Nav/>
              <div className="this">
                <Suspense fallback={<Loader />}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/buyers" component={Buyer} />
                   
                    <Route path="/sellers" component={Sellers} />
                  
                    <Route
                      path="*"
                      render={() => <p className="link">Not found</p>}
                    />
                  </Switch>
                </Suspense>
              </div>
            </Router>
            
          
        </div>
        </GlobalProvider>
      </Suspense>
  
  );
}
export default App;
