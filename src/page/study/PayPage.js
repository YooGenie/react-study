import React, {useEffect} from 'react';
import {Button} from "antd";



const PayStudy = () => {

    useEffect(()=>{
        //포트원 라이브러리 추가
        let script = document.querySelector(
            `script[src="https://cdn.iamport.kr/v1/iamport.js"]`
        );

        if (!script) {
            script = document.createElement("script");
            script.src = "https://cdn.iamport.kr/v1/iamport.js";
            script.async = true;
            document.body.appendChild(script);

        }

        return () => {
            document.body.removeChild(script);
        };
    },[])

   const onclickPay = (pgValue,payMethod) => {
       const {IMP} = window
       IMP.init("가맹점 식별코드")

       const data = { // param
            pg: pgValue,//"PG사구분코드.{사이트코드}"
            pay_method: payMethod, // card
            merchant_uid: "ORD20180131-0000012",
            name: "노르웨이 회전 의자",
            amount: 100,
            buyer_email: "gildong@gmail.com",
            buyer_name: "홍길동",
            buyer_tel: "010-0000-0000",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181",
            m_redirect_url: ""
        }
        IMP.request_pay(data, rsp => { // callback
            if (rsp.success) {
            console.log("결제 성공 했다")
            } else {
                console.log("결제 실패 했다")
            }
        });
    }



    return (
        <>
            <Button onClick={()=>onclickPay("kakaopay.TC0ONETIME","kakaopay")}>카카오페이</Button>
            <Button onClick={()=>onclickPay("kcp.A52CY","card")}>NHN KCP</Button>
            <Button onClick={()=>onclickPay("html5_inicis.INIpayTest","card")}>KG이니시스</Button>
        </>

    )
}

export default PayStudy;