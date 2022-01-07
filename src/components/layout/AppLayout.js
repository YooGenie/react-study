import React, {Component} from "react";
import { Layout } from 'antd';
import Footer from "./Footer";
import Header from "./Header";
import Main from "../../page/main";


export default class AppLayout extends Component {
    state = {
        collapsed: false,
    };

    render() {
        return (
            <Layout
                style={{
                    minHeight: "100%"
                }}
            >
                <Layout>
                    <Header/>
                    <Main/>
                    <Footer/>
                </Layout>
            </Layout>
        );
    }
}
