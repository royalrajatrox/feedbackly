import React, { Component } from 'react';


export default ({input, label, meta}) => {   //input = props.input

    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px'}}/>
            <div className="red-text" style={{marginBottom: '20px'}}>
            {meta.touched && meta.error}
            </div>
        </div>
    );
}

//{...input} = obBlur = {input.onBlur} input hass all callback functions for eventhandling

