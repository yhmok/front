import React, { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
//import { Container } from "react-bootstrap"; // export한것
import Data from "./components/data"; // export default한것
// import Card from "./components/card";
import { Route } from 'react-router-dom';
import Home from "./components/Home";
import Details from "./components/Details";
import { Switch } from "react-router-dom";
import { useContext } from 'react';

import Cart from "./components/Cart";

export const 재고Context=React.createContext();

function App() { 
  
  let [shoes, setShoes] = useState(Data);  //[state, state변경함수]
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      {/* NavBar를 컴포넌트로 만듬 */}
      <NavBar /> 
      <Switch>
        {/* Home에 재고 데이타 보내기 */}
        <Route exact path="/" >
          <재고Context.Provider value={재고}>
            <Home shoes={shoes}/>
          </재고Context.Provider>
        </Route>

        <Route path="/details" exact>
          <Details shoes={shoes}/>
        </Route>

        {/* Detail에 재고 데이타 보냄 */}
        <Route path="/details/:id" exact>
          <재고Context.Provider value={재고}>
            <Details shoes={shoes} 재고={재고} 재고변경={재고변경}/>
          </재고Context.Provider>
        </Route>

        <Route path="/cart">
          <Cart/>
        </Route>

      </Switch>

      
    </div>
  );
}
export default App;