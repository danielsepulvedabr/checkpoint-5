import React from 'react';
function MyButton(props) {
    return(
        <button
            onClick={props.onSimpleClick}
            style={props.style}>
            {props.label}
        </button>


    );
}
export default MyButton;