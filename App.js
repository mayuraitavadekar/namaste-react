import React from "react"
import ReactDOM from "react-dom/client";



const Heading = () => {
    return(
        <div>
            <h1>root 1 heading</h1>
        </div>
    )
}

const Heading2 = () => {
    return (
        <div>
            <h2>root 2 heading</h2>
        </div>
    )
}


const root1 = ReactDOM.createRoot(document.getElementById("root1"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root1.render(<Heading />);
root2.render(<Heading2 />);