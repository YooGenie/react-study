import React from "react";
import {Modal} from "antd";

const PreviewPDF = ({openModal, file, onClose}) => {
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
                width={700}
            >
                <p>
                    PDF 미리보기 창입니다.
                    {file}
                </p>
            </Modal>
        </>
    );
};

export default PreviewPDF;
