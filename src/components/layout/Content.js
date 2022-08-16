import React from 'react';
import {Layout} from "antd";
import PageRouter from "../../page/router/PageRouter";


function Content() {

    return (
        <>
            <Layout.Content className="site-layout-content">
                <section>
                    <PageRouter/>
                </section>
            </Layout.Content>
        </>
    )
}

export default Content;
