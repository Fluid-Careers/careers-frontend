import React from 'react'
import { fieldDiv, inputField, labelStyle } from './toplabeledtextinput.module.css'

function TopLabeledTextInput(props) {
    return(
        <div className={fieldDiv}>
            <label for={props.fieldName} className={labelStyle}>{props.label}</label>
            <input type="text" name={props.fieldName} className={inputField} />
        </div>
    )
}

export default TopLabeledTextInput;