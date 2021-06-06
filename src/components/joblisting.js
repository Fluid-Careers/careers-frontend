import React, { useState } from "react"
import axios from "axios"
import ListingContainer from "./listingcontainer"
import { listing } from "./joblisting.module.css"

function JobListing() {

    axios.get("http://localhost:8084/api/jobs/listings").then((repos) => {
        const listings = repos.data;
        console.log(listings)
      });

    /* static array for testing */
    const details = [
        {
            title: "Manager  of Things",
            company: "Googel",
            salary: "$133,000",
            location: "Nueva York",
            time: "1 min ago",
            id: "1"
        },
        {
            title: "VP of Greatness",
            company: "Faecbuk",
            salary: "$198,000",
            location: "Nueva York",
            time: "1 min ago",
            id: "2"
        },
        {
            title: "Softwear Engineer",
            company: "Amazone",
            salary: "$110,000",
            location: "Nueva York",
            time: "1 min ago",
            id: "3"
        },
        {
            title: "Manager of Things",
            company: "Googel",
            salary: "$10,000",
            location: "Nueva York",
            time: "1 min ago",
            id: "4"
        },
        {
            title: "Manager  of Things",
            company: "Googel",
            salary: "$10,000",
            location: "Nueva York",
            time: "1 min ago",
            id: "5"
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