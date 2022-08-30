import React, {useEffect, useState} from 'react';
import {deleteMenu, getMenus} from './MenuService';
import {Button, Modal, Table} from "antd";
import {EditOutlined} from "@ant-design/icons";
import MenuForm from "./MenuForm";
import MenuDetail from "./MenuDetail"
import MenuUpdateForm from "./MenuUpdateForm"

const PAGE_SIZE = 10;
const FIRST_PAGE = 1;

// 클래스 느낌
const MenuList = () => {
    const [loading, setLoading] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(null);
    const [updateOpen, setUpdateOpen] = useState(null);
    const [detailOpen, setDetailOpen] = useState(null);
    const [data, setData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const NumberFormatter = new Intl.NumberFormat('ko-KR', {maximumSignificantDigits: 3});

    // 로딩시만 구동됩니다. 왜? 두번재 변수가 빈 배열이니까.
    useEffect(()=>load(FIRST_PAGE),[]);

    const load = (page) => {
        if (loading) {
            return;
        }
        setLoading(true);
        getMenus({page: page, pageSize: PAGE_SIZE})
            .then(responseData => {
                //응답에 올때 json result 배열, totalCount
                setData(responseData.result);
                setTotalCount(responseData.totalCount);
                setLoading(false);
            })
    };

    const afterSave = () => {
        setRegisterOpen(false);
        setUpdateOpen(false);
        load(FIRST_PAGE);
    };

    const confirmDelete = (id) => {
        if (loading) {
            return;
        }

        setLoading(true);
        deleteMenu(id)
            .then(() => {
                setDeleteOpen(false);
                setLoading(false);
            })
            .then(() => load(FIRST_PAGE));
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            align: 'center'
        }, {
            title: "Name",
            dataIndex: "name",
            key: "name",
            align: 'center'
        }, {
            title: "Price",
            dataIndex: "price",
            key: "price",
            align: 'right',
            render: (text, record) => {
                return (
                    NumberFormatter.format(record.price)
                );
            },
        },
        {
            title: '',
            dataIndex: '',
            key: 'actions',
            align: 'center',
            fixed: 'right',
            width: '400px',
            render: (text, record) => {
                return (
                    <>
                        <Button onClick={() => {
                            setDetailOpen(record.id)
                        }}>
                            상세보기
                        </Button>
                        <Button onClick={() => {
                            setUpdateOpen(record.id)
                        }}>
                            수정
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => {
                                setDeleteOpen(record.id)
                            }}>
                            삭제
                        </Button>
                    </>
                );
            },
        },
    ];

    return (
        <div>
            <Modal
                title="메뉴를 등록하세요."
                style={{top: 20}}
                visible={registerOpen}
                footer={null}
                onCancel={() => {
                    setRegisterOpen(false)
                }}
                width={500}
            >
                <div class="modal-body">
                    {/*폼화면이 뜨는것이다.*/}
                    <MenuForm onComplete={afterSave}/>
                </div>
            </Modal>
            <Button style={
                {
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: 'bold'
                }
            } type="primary"
                    onClick={() => setRegisterOpen(true)}><EditOutlined key="edit"/>
                등록하기
            </Button>
            <MenuDetail
                id={detailOpen}
                open={Boolean(detailOpen)}
                onClose={() => setDetailOpen(null)}/>
            <MenuUpdateForm
                id={updateOpen}
                open={Boolean(updateOpen)}
                onClose={() => setUpdateOpen(null)}
                onComplete={afterSave}/>
            <Modal
                title="삭제하겠습니까?"
                style={{top: 20}}
                visible={Boolean(deleteOpen)}
                onOk={() => confirmDelete(deleteOpen)}
                onCancel={() => setDeleteOpen(null)}
                width={500}
            >
            </Modal>
            <Table
                size={"small"}
                style={{margin: "10px"}}
                dataSource={data}
                columns={columns}
                title={() => "총 : " + totalCount + " 건"}
                footer={() => <div style={{textAlign: "right"}}> 합계 : {totalCount} 건 </div>}
                pagination={{
                    pageSize: PAGE_SIZE,
                    total: totalCount,
                    onChange: load
                }}
                bordered
            />
        </div>
    );
}

export default MenuList;