import { Route } from 'react-router-dom';
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Card from "./card";
import axios from 'axios';

function Home(props) {
  let getUrl = "https://codingapple1.github.io/shop/data2.json";
  let [show, setShow] = useState(false);

  const loading=()=> {
    return (
      <div>
        <h2>loding.....중</h2>
      </div>
    )
  }
  const loading2=(<div>로딩중....</div>);

  const getData=()=>{ 
    axios
      .get(getUrl)
      .then((result)=>{
        //console.log(result.data);
        setShow(true)
        props.setShoes([...props.shoes, ...result.data])
        setTimeout(()=>{
          setShow(false)
        }, 1000)
      })
      .catch(()=>{
        console.log("접속실패..."); 
        setShow(true)
      });
  };
  //console.log(props);
    
  return(
      <>
        <Container className="background mt-4">
          <h1>20% Season Off(파격세일)</h1>
          <p>Welcome to my shopMall !!!</p>
        </Container>

        <div className="container">
          <div className="row">
            {props.shoes.map((a, i) => {
              return <Card shoes={props.shoes[i]} i={i} key={i}/>   
                      // Card컴포넌트(함수)
            })}
            {show?loading():null}
            
          </div>
          <button className="btn btn-primary" onClick={getData}>더보기(axios)</button>
        </div>
    </>
  );
}
export default Home;