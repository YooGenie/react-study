import React from "react";
import {Button} from "antd";
import {updatePageState} from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from 'react-router-dom';

const ReduxPage = () => {
    const dispatch = useDispatch();
    const startPageState = useSelector((state) => state.startPageState); // useSelector 훅은 Redux 스토어의 상태를 읽어오기 위한 훅
    const navigate = useNavigate();

    const memberPage = () =>{
        dispatch(
            updatePageState({
                ...startPageState,
                startPage: "member",
                page: 1,
                registrationNo:"9901012000000",
                donorName: "헤이유"
            })
        );
        navigate('/redux-sub');
    }

    const donationPage = () =>{
        dispatch(
            updatePageState({
                ...startPageState,
                startPage: "donation",
                page: 2,
                registrationNo:"0001013000000",
                donorName: "하이유"
            })
        );
        navigate('/redux-sub');

    }


    return(
        <>
            <Button onClick={()=> {
                memberPage()
            }}>memberPage</Button>
            <Button onClick={()=> {
                donationPage()
            }}>donationPage</Button>
            <div>
               <p> 현재 상태값</p>
                <p>  현재 페이지 이름 : {startPageState.startPage}</p>
                <p>  현재 페이지 수 : {startPageState.page}</p>
                <p>  현재 기부자 이름 : {startPageState.donorName}</p>
                <p>  현재 등록번호 : {startPageState.registrationNo}</p>
            </div>


        </>

    )
}

export default ReduxPage;