import React from 'react'
import { inputField, inputRow, fieldDiv } from './jobcreationform.module.css'
import TopLabeledTextInput from './toplabeledtextinput';

function JobCreationForm() {
    return(
        <div>
            <div className={inputRow}>
                <TopLabeledTextInput label="Job Title" fieldName="jobTitle" />
                <TopLabeledTextInput label="Department" fieldName="department" />
            </div>

            <div className={inputRow}>
                <TopLabeledTextInput label="Salary" fieldName="salary" />
                <TopLabeledTextInput label="Location" fieldName="location" />
            </div>
        </div>
    )
}

export default JobCreationForm;