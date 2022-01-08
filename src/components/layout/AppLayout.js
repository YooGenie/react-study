import React, {Component} from "react";
import {Layout} from 'antd';
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";


export default class AppLayout extends Component {

    render() {
        return (
            <Layout
                style={{
                    minHeight: "100%"
                }}
            >
                <Layout className="site-layout">
                    <Header/>
                    <Content/>
                    <Footer/>
                </Layout>
            </Layout>
        );
    }
}
