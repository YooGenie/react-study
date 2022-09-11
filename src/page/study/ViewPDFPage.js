import React, {useState,useEffect} from 'react';
import {Button, message} from "antd";
import {ApiService} from "./ApiService";
import {saveAs} from "file-saver";
import PreviewPDF from "./PreviewPDF";

const ViewPDF = () => {
    const [file, setFile] = useState()
    const [openModal, setOpenModal] = useState(false)
    const downloadPdf = (id) => {
        ApiService.getPdf(id)
            .then((bold) => {
                const file = new Blob([bold.data], {type: 'application/pdf'});
                setFile(file)
                const fileURL = URL.createObjectURL(file);
                window.open(fileURL);
                saveAs(bold.data, "member_list.pdf");
                message.success("다운되었습니다")
            })
            .catch(() => {
                message.error("다운 실패했습니다")
            })
    }

    const getPDF = (id) => {
        ApiService.getPdf(id)
            .then((bold) => {
                const file = new Blob([bold.data], {type: 'application/pdf'});
                const fileURL = URL.createObjectURL(file);
                setFile(fileURL)
            })
    }

    useEffect(()=>getPDF(2), [])

    return (
        <>
            <div>
                <Button id="exportFile" onClick={() => {
                    downloadPdf(2)
                }}>PDF 다운</Button>
            </div>
            <div><Button id="preview" onClick={() => {
                setOpenModal(true)
            }}>PDF 미리보기</Button></div>
            <PreviewPDF
                openModal={openModal}
                file={file}
                onClose={() => setOpenModal(false)}
            />
        </>
    )
}

export default ViewPDF;