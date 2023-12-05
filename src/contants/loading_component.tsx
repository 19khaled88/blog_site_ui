import { CSSProperties, useState } from "react";
// import BeatLoader from "react-spinners/BeatLoader";
import BounceLoader from "react-spinners/BounceLoader";
// import ClipLoader from "react-spinners/ClipLoader";
// import DotLoader from "react-spinners/DotLoader";
// import FadeLoader from "react-spinners/FadeLoader";
// import GridLoader from "react-spinners/GridLoader";
// import MoonLoader from "react-spinners/MoonLoader";
// import PropagateLoader from "react-spinners/PropagateLoader";
// import RiseLoader from "react-spinners/RiseLoader";
// import SyncLoader from "react-spinners/SyncLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Loading_Compoent = () => {
    let [color, setColor] = useState("#4DDCBF");
       
    return (
        <div className="flex flex-row justify-center items-center h-screen">
           
            <BounceLoader
                color={color}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loading_Compoent