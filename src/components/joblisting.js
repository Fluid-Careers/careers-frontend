import React, { useEffect, useState } from "react"
import axios from "axios"
import ListingContainer from "./listingcontainer"
import { listing } from "./joblisting.module.css"

function JobListing() {
    const [listings, setListings] = useState([])

    // example API call
    useEffect(async() => {
        const result = await axios("http://localhost:8084/api/job-listings",); 
        setListings(result.data)
    }, []);

    return (
        <section className={listing}>
            {listings.map(item => (
                <ListingContainer title={item.title} company={item.company} salary={item.salary} location={item.location} time={item.time} idNumber={item.id} />
            ))}
        </section>
    )
}

export default JobListing;