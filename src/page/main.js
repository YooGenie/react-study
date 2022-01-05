import React from 'react';
import {Button, message} from "antd";
import {useHistory} from "react-router-dom";

const Main = () => {
    const history = useHistory;
    return (
        <>
        <div>
            <Button onClick={() => {
                message.success("클릭했습니다")
            }}>공부하기</Button>
                <Button onClick={() => {
                    message.success("클릭했습니다")
                }}>메뉴판</Button>
            </div>
  </>
    );
}

export default Main;