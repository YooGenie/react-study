import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Study from "../study/StudyPage";
import QRCode from "../study/QRCodePage";
import Main from "../main";
import StateStudy from "../study/StatePage";
import MenuList from "../study/menu/MenuList";
import ViewPDF from "../study/ViewPDFPage";
import FileStudy from "../study/FilePage";
import PayStudy from "../study/PayPage";
import FormStudy from "../study/FormPage";
import Model from "../study/ModelPage";



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
                <Route path="/file" element={<FileStudy/>}/>
                <Route path="/pay" element={<PayStudy/>}/>
                <Route path="/form" element={<FormStudy/>}/>
                <Route path="/model" element={<Model/>}/>
            </Routes>
        </BrowserRouter>
    </>
);

export default PageRouter;


