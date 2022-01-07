import React, {Component} from 'react';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import './App.css';
import Study from "./page/study/studyPage";
import AppLayout from "./components/layout/AppLayout";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<AppLayout/>}/>
                </Routes>
                <Routes>
                    <Route path={'/study'} element={<Study />}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
