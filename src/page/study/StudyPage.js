import React, { useEffect, useState } from "react";
import {Button, message, Space, Table} from "antd";

const Study = () => {
    const list =
        [
            {
                "id": 1,
                "donorName": "지니",
                "quantity": 3,
                "amount": 6272,
                "registrationNo": "990101-2******",
            },
    {
        "id": 2,
        "donorName": "지니",
        "quantity": 1,
        "amount": 1830,
        "registrationNo": "990101-2******",
    },
    {
        "id": 3,
        "donorName": "유지니",
        "quantity": 2,
        "amount": 3660,
        "registrationNo": "990101-2******",
    },
    {
        "id": 4,
        "donorName": "유지니",
        "quantity": 22,
        "amount": 55318,
        "registrationNo": "990101-2******",
    },
    {
        "id": 5,
        "donorName": "유지니",
        "quantity": 2,
        "amount": 4442,
        "registrationNo": "990101-2******",
    },
    {
        "id": 6,
        "donorName": "지니",
        "quantity": 3,
        "amount": 12728,
        "registrationNo": "990101-2******",
    },
    {
        "id": 7,
        "donorName": "지니",
        "quantity": 4,
        "amount": 6272,
        "registrationNo": "990101-2******",
    },
    {
        "id": 8,
        "donorName": "유지니",
        "quantity": 1,
        "amount": 5881,
        "registrationNo": "990101-2******",
    },
    {
        "id": 9,
        "donorName": "유지니이다",
        "quantity": 7,
        "amount": 6272,
        "registrationNo": "990101-2******",
    },
    {
        "id": 10,
        "donorName": "유지니이다",
        "quantity": 2,
        "amount": 4442,
        "registrationNo": "990101-2******",
    },
]

    const infoIncludes =
    {
        "donorName": "지니",
        "registrationNo": "990101-2******",
        "quantity": 0,
        "amount": 0,
    }

    const infoFind =
        {
            "donorName": "지니",
            "registrationNo": "990101-2******",
            "quantity": 0,
            "amount": 0,
        }

    const infoMap =
        {
            "donorName": "지니",
            "registrationNo": "990101-2******",
            "quantity": 0,
            "amount": 0,
        }

    const columns = [
        {
            title: "id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "기부자 이름",
            dataIndex: "donorName",
            key: "donorName",
        },
        {
            title: "등록번호",
            dataIndex: "registrationNo",
            key: "registrationNo",
        },
        {
            title: "총 기부 건수",
            dataIndex: "donationCount",
            key: "donationCount",
            align: "right",
        },
        {
            title: "총 기부 수량",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "총 기부금영수증 금액",
            dataIndex: "amount",
            key: "amount",
        },
    ];

    const reset = () => {
        infoFind.amount = 0;
        infoFind.quantity =0;
        infoIncludes.amount = 0;
        infoIncludes.quantity =0;
        infoMap.amount = 0;
        infoMap.quantity =0;
    }


    const IncludesMethod = () => {
        list.map((v) => {
            if (
                v.donorName.includes("지니") &&
                v.registrationNo.includes("990101-2******")
            ){
                infoIncludes.quantity = infoIncludes.quantity + v.quantity;
                infoIncludes.amount = infoIncludes.amount + v.amount;
            }
        })
        message.success("총 금액 : " + infoIncludes.amount +"/ 총 개수" +infoIncludes.quantity)
        reset()

    }

    const FindMethod = () => {
        list.find((record) => {
            if (
                record.donorName === "지니" &&
                record.registrationNo === "990101-2******"
            ){
                infoFind.quantity = infoFind.quantity + record.quantity;
                infoFind.amount = infoFind.amount + record.amount;
            }
        });
        message.success("총 금액 : " + infoFind.amount +"/ 총 개수" +infoFind.quantity)
        reset()
    }

    const MapMethod = () => {
        list.map((record) => {
            if (
                record.donorName === "지니" &&
                record.registrationNo === "990101-2******"
            ){
                infoMap.quantity = infoMap.quantity + record.quantity;
                infoMap.amount = infoMap.amount + record.amount;
            }
        });
        message.success("총 금액 : " + infoMap.amount +"/ 총 개수" +infoMap.quantity)
        reset()
    }

    return (
        <>
        <div>
            <Button onClick={()=> {
                IncludesMethod()
            }}>
                Includes() 버튼
            </Button>
            <Button onClick={()=> {
                FindMethod()
            }}>
                Find() 검색
            </Button>
            <Button onClick={()=> {
                MapMethod()
            }}>
                Map() 검색
            </Button>
        </div>
   <div>
    <Table dataSource={list}  columns={columns}/>
   </div>
        </>
    );
}

export default Study;