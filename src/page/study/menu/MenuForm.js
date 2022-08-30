import React, {useState} from 'react';
import {Button, Form, Input, InputNumber, Typography} from "antd";
import {createMenu} from './MenuService';

const {Title} = Typography;

const MenuForm = (props) => {
    //등록 후 필드를 지워주는 기능
    const [form] = Form.useForm();
    //더블클릭해서 두번 저장하는 것을 방지하기 위해서
    const [loading, setLoading] = useState(false);
    const handleSubmit = (data) => {
        if (loading) {
            return;
        }
        setLoading(true);
        createMenu(data)
            .then(() => {
                form.resetFields();
                setLoading(false);
                props.onComplete();
            })
    };

    return (
        <Form
            form={form}
            name="register"
            onFinish={handleSubmit}
            style={{backgroundColor: "white", marginTop: 23, padding: 15}}
        >
            <Title style={{textAlign: 'center', paddingLeft: 15}}>메뉴 등록</Title>
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: '필수 정보입니다',
                    },
                    {
                        max: 50,
                        message: '최대 50자입니다.'
                    }

                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Price"
                name="price"
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
                rules={[
                    {
                        max: 200,
                        message: '최대 200자 입니다.',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading} style={{marginLeft: 10}}>
                    저장
                </Button>
            </Form.Item>
        </Form>
    );
}

export default MenuForm;