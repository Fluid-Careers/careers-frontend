import React, { useEffect, useState } from 'react'
import { fieldDiv, inputField, labelStyle } from './toplabeledtextinput.module.css'

function TopLabeledTextInput(props) {

    const [field, setField] = useState("")

    useEffect(() => {
        console.log(field);
    });

    return(
        <div className={fieldDiv}>
            <label for={props.fieldName} className={labelStyle}>{props.label}</label>
            <input type="text" value={field} onChange={e => setField(e.target.value)} name={props.fieldName} className={inputField} />
        </div>
    )
}

export default TopLabeledTextInput;