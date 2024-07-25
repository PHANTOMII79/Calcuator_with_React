import PropsTypes from 'prop-types'
import React, {useState} from "react"
function Button(props){
const ButtonNumber = (number) => console.log(`${number}`);
    return(
        <>
            <button id={props.Id} className={props.className} onClick={() => props.onClick(props.name)}> {props.name} </button>
        </>
    );
}
export default Button