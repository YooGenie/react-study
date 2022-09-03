import React, {useState} from 'react';
import {Button,message} from "antd";
import {ApiService} from "./ApiService";
import { saveAs } from "file-saver";

const ViewPDF = () => {
    const downloadPdf = (id) => {
        ApiService.getPdf(id)
            .then((bold) => {
                saveAs(bold.data, "member_list.pdf");
                message.success("다운되었습니다")
                const link = document.createElement("a");
                link.click();
            })
            .catch(() => {
                message.error("다운 실패했습니다")
            })
    }

    return (
        <div>
            <Button id="exportFile" onClick={() => {downloadPdf(2)}}>PDF 다운</Button>
        </div>
    )
}

export default ViewPDF;