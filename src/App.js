import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Study from "./page/study/StudyPage";
import Main from "./page/main";
import QRCode from "./page/study/QRCodePage";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path="/study" element={<Study/>} />
                    <Route path="/qr-code" element={<QRCode/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
