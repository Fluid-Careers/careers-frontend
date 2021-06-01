import React, { useState } from "react"
import ListingContainer from "./listingcontainer"
import { listing } from "./joblisting.module.css"

function JobListing() {

    const details = [
        {
            title: "Manager  of Things", company: "Googel", salary: "$10,000", location: "Nueva York", time: "1 min ago", id: "1"
        },
        {
            title: "Manager  of Things", company: "Googel", salary: "$10,000", location: "Nueva York", time: "1 min ago", id: "2"
        }
    ]

    return (
        <section className={listing}>
            {details.map(item => (
                <ListingContainer title={item.title} company={item.company} salary={item.salary} location={item.location} time={item.time} idNumber={item.id} />
            ))}
        </section>
    )
}

export default JobListing;