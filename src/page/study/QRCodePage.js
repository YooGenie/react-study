import React from 'react';
import QR from "qrcode.react";
import logo from "../../img/logo.png"


const QRCode = () => {
    return (
        <div>
            <QR
                value={"https://pink1016.tistory.com/"}
                size={300}
                imageSettings={{src: logo, width: 100, height: 100}}
                id="qr-gen"
                level={"M"}
                includeMargin={true}
                bgColor={"pink"}
                //fgColor={"yellow"}
            />
        </div>
    );
}

export default QRCode;