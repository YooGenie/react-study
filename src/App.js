import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import AppLayout from "./components/layout/AppLayout";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<AppLayout/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
