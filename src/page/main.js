import React from 'react';
import {Button} from "antd";
import {useNavigate} from "react-router-dom";


const Main = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Button onClick={() => {
                    navigate('/study');
                }}>공부하기</Button>
                <Button onClick={() => {
                    navigate('/qr-code');
                }}>QR코드</Button>
                <Button onClick={() => {
                    navigate('/state-study');
                }}>state 공부</Button>
                <Button onClick={() => {
                    navigate('/menu');
                }}>메뉴판</Button>
                <Button onClick={() => {
                    navigate('/view-pdf');
                }}>PDF 미리보기</Button>
            </div>
        </>
    );
}

export default Main;