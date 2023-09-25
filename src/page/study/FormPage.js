import React, {useState} from 'react';
import {Button, Form, Input, message, Modal, Space} from "antd";

const FormStudy = () => {
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [note, setNote] = useState("");


    const reset = () => {
        form.setFieldsValue({
            note: "",
        });
    };

    return (
        <>
            <Button onClick={() => {
                setNote("")
                setOpen(true)}}>모달창</Button>
            <p>메 모 내 용</p>
            <p>{note}</p>
            <Modal
                footer={null}
                visible={open}
                onCancel={() => {
                    reset()
                    setOpen(false)}}
                width={600}
            >
                <Form
                    form={form}
                    size="large"
                    onFinish={(v)=> {
                        setNote(v.note)
                        message.success("성공했습니다.")
                        reset()
                        setOpen(false)
                    }}
                >
                    <Form.Item
                        name="note"
                        style={{marginBottom: "0.5rem", maxWidth: 400}}
                        rules={[
                            {
                                required: true,
                                message: "메모를 입력해 주세요",
                            },
                        ]}
                    >
                        <Input.TextArea
                            placeholder="메모"
                            allowClear
                            autoSize={{minRows: 3, maxRows: 5}}
                        />
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{width: "100%", maxWidth: 400}}
                    >
                        저장
                    </Button>
                </Form>
            </Modal>


        </>
    )
}

export default FormStudy;