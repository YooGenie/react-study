import React, {useState} from 'react';
import {Button, Input, message} from "antd";

const IMAGE_MAX_SIZE = 1 * 1024 * 1024;

const FileStudy = () => {
    const [ imgErrMessage ,setImgErrMessage] = useState("이미지를 넣어주세요")
    return (
        <>
        <Input
            type="file"
            accept="image/*"
            name="file"
            onChange={(e) => {
                if (e.target.files[0]) {
                    e.target.files[0].size > IMAGE_MAX_SIZE
                        ? setImgErrMessage("용량이 너무 큽니다")
                        : setImgErrMessage("")
                } else {
                    setImgErrMessage("이미지를 넣어주세요")
                }
            }}
            style={{ width: 300, marginLeft: 10, marginTop: 10 }}
        />
            <Button
            onClick={()=>imgErrMessage===""?message.success("성공했습니다."):message.error(imgErrMessage)}
            >

                확인</Button>
        </>
    )
}

export default FileStudy;