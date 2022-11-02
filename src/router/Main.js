import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";

const Main = (props) => {
  // 첫로드시 1회
  useEffect(() => {
    props.setNavIndex("");
  }, []);
  // 렌더링 될 때마다
  useEffect(() => {
    props.setUserMenuColor("");
    props.setUnmount(false);
  });

  return (
    <>
      <Banner unmount={props.unmount} />
    </>
  );
};

export default Main;
