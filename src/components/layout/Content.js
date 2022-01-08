import React from 'react';
import {Layout} from "antd";
import PageRouter from "../../page/router/PageRouter";



function Content() {

    return (
        <>
            <Layout.Content className="site-layout-content">
                <section>
                    <p>뭐가 나와라!!!!!!!</p>
                <PageRouter/>
                </section>
            </Layout.Content>
        </>
    )
}

export default Content;
