import React from "react";
import {Modal} from "antd";

const PreviewPDF = ({openModal, file, onClose}) => {
    console.log(file)
    const cancelModal = () => {
        onClose();
    };

    return (
        <>
            <Modal
                forceRender={true}
                title="PDF 미리보기"
                footer={null}
                visible={openModal}
                onCancel={cancelModal}
                width={1000}
            >
                <p>
                    PDF 미리보기 창입니다.
                    {file}
                </p>
                <iframe src={file+"#toolbar=0&navpanes=0"} style={{width:700, height:700}}/>
            </Modal>
        </>
    );
};

export default PreviewPDF;
