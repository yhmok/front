import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from 'styled-components';
import "../Details.scss"
import { 재고Context} from "../App"
import { useContext } from "react";
import {  useSelector, useDispatch } from 'react-redux';

// styled-components방식
let DIV = styled.div`
    padding: 20px;
    border: 1px solid blue;
    padding-top: 0;
    background: ${(props)=>props.color}
`;

let 박스 = styled.div`
    padding: 20px;
`;

let 제목 = styled.h4`
    font-size: 25px;
    color: ${(props)=>props.색상}
`;

const Details = (props) => { //익명함수 - 변수에 함수이름 없이 바로 대입
    let state = useSelector((state) => state)
    let dispatch = useDispatch();

    let history = useHistory();
    let {id} = useParams(); // 파라미터 가지고 오는것 console.log(useParams())  => {id:2}
                            // 문자열이 아니라 오브젝트 형태로 반환
                            // useParams.id
                            
    let 재고 = useContext(재고Context);
    let 찾은상품 = props.shoes.find((상품)=>상품.id === parseInt(id));

    // shoes : 부모 App.js에서 전달한 객체
    let [alert, alert변경] = useState(true);
    let [inputData, setInputData] = useState("")

    // 처음 랜더링할때 무조건 실행
    // state가 바뀌면 useEffect도 자동으로 실행된다.
    useEffect(()=> {
        let 타이머 = setTimeout(()=>{
            alert변경(false)
            console.log(alert)
        }, 3000);
        return ()=>{clearTimeout(타이머)}
    }, [alert]); //[] alert가 변경됐을 경우만 실행되게 변경

    useEffect(()=>{
        console.log("업데이트 중....")
    },[inputData]);

    return (
        <div className="container">
            <박스>
                <제목 색상={"blue"} className="blue">
                    Detail(상세페이지)
                </제목>
            </박스>
            {/* <input onChange={(e)=>{setInputData(e.target.value)}} />
            {
                alert === true ? (<div className="my-alert2">
                    <p>재고가 얼마남지 않았습니다.</p>
                </div>) : null
            } */}
            <div className="row">
                <div className="col-md-6">
                <img src={`../s${parseInt(찾은상품.id)+1}.jpg`} width="100%" alt=""/>
                </div>
                <DIV color="snow">
                    <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-primary" onClick={()=>{
                                                       props.재고변경([9, 10, 11]);
                                                       dispatch({ type: "항목추가",
                                                       데이터: { id: 찾은상품.id, name: 찾은상품.title, quan: 1 } });
                                                       history.push('/cart');    
                                                    }
                                                }>주문하기</button>
                    <button className="btn btn-danger" onClick={()=> { 
                                                    history.goBack() }
                                                }>뒤로가기</button>
                    <button className="btn btn-info" onClick={()=>{ history.push("/");}}>홈으로가기</button>
                    </div>
                </DIV>
            </div>
            <Info 재고={props.재고}></Info>
           
            {/* <Info 재고={재고}></Info> */}
        </div>
    )
}
export default Details;

function Info(props) {
    return (
        <p>재고 : {props.재고[0]}</p>
    )
}