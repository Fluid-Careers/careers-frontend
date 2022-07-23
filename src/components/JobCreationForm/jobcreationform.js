import React, { useState } from 'react'
import { inputField, inputRow, fieldDiv } from './jobcreationform.module.css'
import TopLabeledTextInput from '../TopLabeledTextInput/toplabeledtextinput';

function JobCreationForm() {

    const [jobTitle, setJobTitle] = useState();
    const [department, setDepartment] = useState();
    const [salary, setSalary] = useState();
    const [location, setLocation] = useState();
    const [formData, setFormData] = useState();



    const handleSubmit = (e) => {
        e.preventDefault();
        // set all the form data in an array
        setFormData([jobTitle, department, salary, location])
    }

    return(
        <form onSubmit={e => {handleSubmit(e)}}>
            <div className={inputRow}>
                <TopLabeledTextInput
                    label="Job Title"
                    fieldName="jobTitle"
                    onChange={e => setJobTitle(e.target.value)}
                />
                <TopLabeledTextInput
                    label="Department"
                    fieldName="department"
                    onChange={e => setDepartment(e.target.value)}
                />
            </div>

            <div className={inputRow}>
                <TopLabeledTextInput
                    label="Salary"
                    fieldName="salary"
                    onChange={e => setSalary(e.target.value)}
                />
                <TopLabeledTextInput
                    label="Location"
                    fieldName="location"
                    onChange={e => setLocation(e.target.value)}
                />
            </div>
            <div>
                <input type="submit" value="Save" />
            </div>
        </form>
    )
}

export default JobCreationForm;