import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Study from "../study/StudyPage";
import QRCode from "../study/QRCodePage";
import Main from "../main";
import StateStudy from "../study/StatePage";



const PageRouter = () => (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/study" element={<Study/>} />
                <Route path="/qr-code" element={<QRCode/>} />
                <Route path="/state-study" element={<StateStudy/>}/>
            </Routes>
        </BrowserRouter>
    </>
);

export default PageRouter;


