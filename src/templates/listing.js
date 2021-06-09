import React from 'react'
import ListingContainer from '../components/listingcontainer'

/* TODO: need to replace ListingContainer with new HTML for this page that displays the single listing nicely */
const Listing = ({ pageContext }) => (
        <section>
            <ListingContainer title={pageContext.title} company={pageContext.company} salary={pageContext.salary} location={pageContext.location} time={pageContext.time} idNumber={pageContext.id} />
        </section>
)

export default Listing;