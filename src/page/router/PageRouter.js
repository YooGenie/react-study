import React from "react";
import { Routes, Route} from "react-router-dom";
import Study from "../study/studyPage";
import Main from "../main";


const PageRouter = () => (
  <>
    <Routes>
        <Route path="/" element={<Main/>} />
      <Route path="/study" element={<Study/>} />
    </Routes>
  </>
);

export default PageRouter;
