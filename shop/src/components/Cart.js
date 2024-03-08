import React from 'react'
import { Table } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

const Cart = (props) => {
  let state = useSelector((state) => state)
  let dispatch = useDispatch();
  let history = useHistory();

  // let tableArray = props.state.map((a,i)=>{
  let tableArray = state.reducer.map((a, i) => {
    return (
      <tr key={i}>
        <td>{a.id}</td>
        <td>{a.name}</td>
        <td>{a.quan}</td>
        <td>
          <button onClick={() => { dispatch({ type: "수량증가", id: i }) }}>+</button>
          <button onClick={() => { dispatch({ type: "수량감소", id: i }) }}>-</button>
        </td>

      </tr>
    );
  });
  let alert닫기 = (
    <div className="my-alert2">
      <p>지금 구매하시면 20%할인</p>
      <button onClick={() => dispatch({ type: "alert닫기" })}>닫기</button>
    </div>
  )
  return (
    <div>
      <Table responsive striped hover bordered>
        <tr>
          <th>아이디</th>
          <th>상품명</th>
          <th>수량</th>
        </tr>
        {tableArray}

      </Table>
      <button className="btn btn-danger"
        onClick={() => {
          history.goBack();
        }}
      >
        뒤로하기
      </button>
      {state.reducer2 === true ? alert닫기 : null}
    </div>
  );
};

export default Cart;