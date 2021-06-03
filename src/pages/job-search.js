import React from "react"
import JobListing from "../components/joblisting"
import NavBar from "../components/navbar"
import SearchBar from "../components/searchbar"

export default function JobSearch() {
  return (
    <div className="page-content">
        <header class="header">
            <NavBar />
        </header>
        <main>
            <section>
                <div className="margined-content">
                    <SearchBar buttonText="Search"/>
                    <JobListing />
                </div>
            </section>
        </main>
    </div>
    )
}