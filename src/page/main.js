import React from 'react';
import {Button, message} from "antd";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const history = useNavigate();
    return (
        <>
        <div>
            <Button  onClick={() => {
                history('/study');
                message.success("클릭했습니다");
            }}>공부하기</Button>
                <Button onClick={() => {
                    message.success("클릭했습니다")
                }}>메뉴판</Button>
            </div>
  </>
    );
}

export default Main;