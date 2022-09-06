import React, {useState,useEffect} from 'react';
import {Button,message} from "antd";
import {ApiService} from "./ApiService";
import { saveAs } from "file-saver";

const ViewPDF = () => {

    // $http.post('/fetchBlobURL',{myParams}, {responseType: 'arraybuffer'})
    //     .success(function (data) {
    //         var file = new Blob([data], {type: 'application/pdf'});
    //         var fileURL = URL.createObjectURL(file);
    //         window.open(fileURL);
    //     });


    const downloadPdf = (id) => {
        ApiService.getPdf(id)
            .then((bold) => {
                const file = new Blob([bold.data], {type: 'application/pdf'});
                const fileURL = URL.createObjectURL(file);
                window.open(fileURL);
                console.log(file)
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
        <>
        <div>
            <Button id="exportFile" onClick={() => {downloadPdf(2)}}>PDF 다운</Button>
        </div>
        <div>미리보기</div>
        </>
    )
}

export default ViewPDF;