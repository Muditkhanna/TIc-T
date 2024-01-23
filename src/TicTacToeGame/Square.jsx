import React from "react";

const Square=(props)=>{
    return(
        <div 
        onClick={props.onClick}
        style={{
        border:"1px solid",
        height:"200px",
        width:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:'46'
    }}
        className="square">
            <h5>{props.value}</h5>
        </div>
    )
}
export default Square;