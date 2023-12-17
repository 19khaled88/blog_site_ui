'use client'
import React from "react";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import GridLoader from "react-spinners/GridLoader";

import Lottie from "lottie-react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


const Loading = () => {
  let [color, setColor] = useState("#ffffff");
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <GridLoader
        color={color}

        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading