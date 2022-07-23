import React from 'react'
import { searchbar, searchInputs, titleInput, locationInput, searchButton} from './searchbar.module.css'

function SearchBar(props) {
    const buttonClasses = "btn btn--blue " + searchButton;
    return(
        <div className={searchbar}>
            <div className={searchInputs}>  
                <input type="text" className={titleInput} placeholder="Job Title or Keywords"/>
                <input type="text" className={locationInput} placeholder="Location"/>
            </div>
            <a href={props.url} className={buttonClasses}>{props.buttonText}</a>
        </div>
    )
}

export default SearchBar;