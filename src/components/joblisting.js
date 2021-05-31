import React from "react"
import ListingContainer from "./listingcontainer"
import { listing } from "./joblisting.module.css"

function JobListing() {
    return (
        <section className={listing}>
            <ListingContainer title="Manager of Things" company="Googs" salary="100,000" location="New Yoek" time="1 min ago" />
        </section>
    )
}

export default JobListing;