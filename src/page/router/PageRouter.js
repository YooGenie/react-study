import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Study from "../study/StudyPage";
import QRCode from "../study/QRCodePage";
import Main from "../main";
import StateStudy from "../study/StatePage";
import MenuList from "../study/menu/MenuList";
import ViewPDF from "../study/ViewPDFPage";



const PageRouter = () => (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/study" element={<Study/>} />
                <Route path="/qr-code" element={<QRCode/>} />
                <Route path="/state-study" element={<StateStudy/>}/>
                <Route path="/menu" element={<MenuList/>}/>
                <Route path="/view-pdf" element={<ViewPDF/>}/>
            </Routes>
        </BrowserRouter>
    </>
);

export default PageRouter;


