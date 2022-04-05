import React from "react";


export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? 'black' : 'grey'
    }

    return (
        <div 
            style={styles} 
            className='box' 
            onClick={props.toggle}
        >
        </div>
    )
}