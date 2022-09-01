import React, {useEffect, useState} from 'react';
import {getDetail, updateMenu} from "./MenuService";
import {Button, Form, Input, InputNumber, Modal} from "antd";
import Title from "antd/lib/typography/Title";

const MenuUpdateForm = ({id, onComplete, onClose, open}) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!id) {
            return;
        }
        getDetail(id)
            .then(responseData => {
                setData(responseData);
            });
    }, [id])

    const updateFormSubmit = (data) => {
        data.id = id
        if (loading) {
            return;
        }
        setLoading(true);
        updateMenu(id, data)
            .then(() => {
                setLoading(false);
                onComplete();
            });
    };

    const cancel = () => {
        setData(null);
        onClose();
    }

    if (!data) {
        return null;
    }
    const {name, price, description} = data;

    return (
        <Modal
            title="정보를 수정하세요"
            style={{top: 20}}
            width={1000}
            footer={null}
            visible={open}
            onCancel={() => cancel()}
        >
            <Form name="update"
                  style={{backgroundColor: "white", marginTop: 23, padding: 15}}
                  onFinish={updateFormSubmit}>
                <Title style={{textAlign: 'center', paddingLeft: 15}}>메뉴를 수정하세요</Title>
                <Form.Item
                    label="Name"
                    name="name"
                    initialValue={name}
                    rules={[
                        {
                            required: true,
                            message: '필수 정보입니다',
                        },
                        {
                            message: '최대 50자입니다.',
                            max: 5,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Price"
                    name="price"
                    initialValue={price}
                    rules={[
                        {
                            required: true,
                            message: '필수 정보입니다',
                        }
                    ]}
                >
                    <InputNumber/>
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    initialValue={description}
                    rules={[
                        {
                            required: true,
                            message: '필수 정보입니다',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={loading}
                        style={{marginLeft: 10}}>
                        수정
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default MenuUpdateForm;


