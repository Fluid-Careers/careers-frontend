import React, { useState } from "react"
import LikeButton from './likebutton'
import icon from "../images/favicon.ico"
import { container, header, logo, headerContent, title, company, salary, location, time, actions, apply} from "./listingcontainer.module.css"

function ListingContainer(props) {
    const divId = "listing-" + props.idNumber
    return (
        <div id={divId} className={container}>
            <div className={header}>
                <div className={logo}><img src={icon}></img></div>
                <div className={headerContent}>
                    <h3 className={title}>{props.title}</h3>
                    <div className={company}>{props.company}</div>
                    <div className={salary}>{props.salary}</div>
                </div>
            </div>
            <div className={location}>{props.location}</div>
            <div className={time}>{props.time}</div>
            <div className={actions}>
                <LikeButton idNumber={props.idNumber} />
                <button className={apply}>Quick Apply</button>
            </div>
        </div>
    )
}

export default ListingContainer;