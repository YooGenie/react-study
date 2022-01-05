import React, {Component} from 'react';
import {HashRouter, Route,Switch} from "react-router-dom";
import './App.css';
import Main from "./page/main";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path={'/'} component={Main}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
