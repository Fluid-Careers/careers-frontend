import React from "react"
import { container, header, logo, headerContent, title, company, salary, location, time, actions, apply, save } from "./listingcontainer.module.css"

function ListingContainer(props) {
    return (
        <div className={container}>
            <div className={header}>
                <div className={logo}></div>
                <div className={headerContent}>
                    <h3 className={title}>{props.title}</h3>
                    <div className={company}>{props.company}</div>
                    <div className={salary}>{props.salary}</div>
                </div>
            </div>
            <div className={location}>{props.location}</div>
            <div className={time}>{props.time}</div>
            <div className={actions}>
                <button className={apply}>Apply</button>
                <button className={save}>Save</button>
            </div>
        </div>
    )
}

export default ListingContainer;