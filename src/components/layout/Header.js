import React from 'react';
import {Image, Layout} from "antd";
import styles from "./AppLayout.css"
import logo from  "../../img/logo.png"

function Header() {
    return (
        <Layout.Header>
            <div>
                <b className={styles.antLayoutHeader}> 유지니의 자바스크립트 공부방 </b>
                <Image src={logo} style={{width:30}} preview={false} />
            </div>
        </Layout.Header>
    );
}


export default Header;
