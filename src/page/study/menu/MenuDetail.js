import React, {useEffect, useState} from 'react';
import {getDetail} from "./MenuService";
import {Descriptions, Modal} from 'antd'


const MenuDetail = (props) => {
    const [data, setData] = useState(null)
    const CurrencyFormatter = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' });


    useEffect(() => {
        const load = (id) => {
            if (id) {
                getDetail(id)
                    .then(responseData => {
                        setData(responseData);
                    })
            }
        }
        load(props.id);
    }, [props.id]);
    //화면에 가장 처음 렌더링 될때만 실행하고
    // 업데이트 할 경우에는 실행할 필요가 없는 경우엔 함수의 두번째 파라미터로 비어있는 배열을 넣어 주면된다.
    //두번째 파라미터로 id를 넣어주면 id가 변경될때마다 로딩되고 없으면 1번만 로딩된다.

    const cancel = () => {
        setData(null);
        props.onClose();
    }

    if (!data) {
        return null;
    }

    return (
        <Modal
            title=""
            style={{top: 20}}
            width={1000}
            footer={null}
            visible={props.open}
            onCancel={() => cancel()}
        >
            <Descriptions
                bordered
                title="상세보기"
                size={500}
            >
                <Descriptions.Item label="ID">{data.id}</Descriptions.Item>
                <Descriptions.Item label="이름">{data.name}</Descriptions.Item>
                <Descriptions.Item
                    label="가격">{CurrencyFormatter.format(data.price)}</Descriptions.Item>
                <Descriptions.Item label="설명">
                    {data.description}
                </Descriptions.Item>
            </Descriptions>
        </Modal>

    );
}

export default MenuDetail;