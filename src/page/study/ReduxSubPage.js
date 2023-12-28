import React from "react";
import {useSelector } from "react-redux";


const ReduxSubPage = () => {
    const startPageState = useSelector((state) => state.startPageState); // useSelector 훅은 Redux 스토어의 상태를 읽어오기 위한 훅
   return(
       <>
           <div>
               <p> 이 페이지 정보</p>
               <p>  현재 페이지 이름 : {startPageState.startPage}</p>
               <p>  현재 페이지 수 : {startPageState.page}</p>
               <p>  현재 기부자 이름 : {startPageState.donorName}</p>
               <p>  현재 등록번호 : {startPageState.registrationNo}</p>
           </div>


       </>
   )
}

export default ReduxSubPage;