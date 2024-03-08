import { 재고Context} from "../App";
import react, { useContext } from "react";
import { useHistory } from "react-router-dom";

function Card(props) {
  const {shoes,i}=props;
  let 재고=useContext(재고Context);
  let history = useHistory();

  return (
    <div className="col-md-4">
      {/* <a href={"/detail/"+i}> */}
        <img src={"s" + (props.i + 1) + ".jpg"} width="100%" alt="" 
        onClick={()=>{
          history.push("/details/"+i)
        }}
        />

      {/* </a> */}
      <h4>{shoes.title}</h4>
      <p>
        {props.shoes.content} &{props.shoes.price}원
      </p>
      {재고[i] }
      
    </div>
  );
}
  export default Card;