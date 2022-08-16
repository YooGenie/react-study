import React, {Component} from "react";
import {Layout} from 'antd';
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";


export default class AppLayout extends Component {
    state = {
        collapsed: false,
    };
    render() {
        return (
            <Layout>
                <Header/>
                <Content/>
                <Footer/>
            </Layout>
        );
    }
}
