import React from "react"
import JobListing from "../components/joblisting"
import NavBar from "../components/navbar"

export default function JobSearch() {
  return (
    <div className="page-content">
        <header class="header">
            <NavBar />
        </header>
        <main>
            <section>
                <div className="content"></div>
            </section>
            <JobListing />
        </main>
    </div>
    )
}