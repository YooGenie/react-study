import React from 'react';
import {Button, message} from "antd";
import {useNavigate} from "react-router-dom";
import Header from "../components/layout/Header";

const Main = () => {
    const navigate = useNavigate();
    return (
        <>

        <div>
            <Button  onClick={() => {
                navigate('//qr-code');
            }}>공부하기</Button>
            </div>
  </>
    );
}

export default Main;