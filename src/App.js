import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Study from "./page/study/studyPage";
import Main from "./page/main";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path="/qr-code" element={<Study/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
