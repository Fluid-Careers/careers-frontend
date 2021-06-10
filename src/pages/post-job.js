import React from "react"
import JobCreationForm from "../components/jobcreationform"
import NavBar from "../components/navbar"

export default function PostJob() {
    const contentDivStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
  return (
    <div className="page-content">
        <header class="header">
            <NavBar />
        </header>
        <main>
            <section>
                <div className="content" style={contentDivStyle}>
                    <h1>Post a Job</h1>
                    <JobCreationForm />
                </div>
            </section>
        </main>
    </div>
    )
}