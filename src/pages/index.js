import React from "react"
import NavBar from "../components/navbar"
import FooterComponent from "../components/footer"

export default function Home() {
  return (
  <div className="page-content">
    <header class="header home-header">
      <NavBar />
      <div class="cta">
        <div class="cta__heading">
          <h1 class="heading-primary">
            <span class="heading-primary--main">Search Jobs</span>
          </h1>
        </div>
        <div class="cta__searchbar">
          <input type="text" class="cta__search-input" />
          <a href="#section-jobs" class="btn btn--blue">Find your next job</a>
        </div>
      </div>
    </header>
    <main class="main">
            <section class="how-it-works">
                <div class="how-it-works__header">
                    <h2 class="heading-secondary">Stay Fluid</h2>
                </div>
                <div class="how-it-works__content">
                    <div class="how-it-works__content-item">
                        <div class="how-it-works__icon">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="leanpub" class="svg-inline--fa fa-leanpub fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M386.539 111.485l15.096 248.955-10.979-.275c-36.232-.824-71.64 8.783-102.657 27.997-31.016-19.214-66.424-27.997-102.657-27.997-45.564 0-82.07 10.705-123.516 27.723L93.117 129.6c28.546-11.803 61.484-18.115 92.226-18.115 41.173 0 73.836 13.175 102.657 42.544 27.723-28.271 59.013-41.721 98.539-42.544zM569.07 448c-25.526 0-47.485-5.215-70.542-15.645-34.31-15.645-69.993-24.978-107.871-24.978-38.977 0-74.934 12.901-102.657 40.623-27.723-27.723-63.68-40.623-102.657-40.623-37.878 0-73.561 9.333-107.871 24.978C55.239 442.236 32.731 448 8.303 448H6.93L49.475 98.859C88.726 76.626 136.486 64 181.775 64 218.83 64 256.984 71.685 288 93.095 319.016 71.685 357.17 64 394.225 64c45.289 0 93.049 12.626 132.3 34.859L569.07 448zm-43.368-44.741l-34.036-280.246c-30.742-13.999-67.248-21.41-101.009-21.41-38.428 0-74.385 12.077-102.657 38.702-28.272-26.625-64.228-38.702-102.657-38.702-33.761 0-70.267 7.411-101.009 21.41L50.298 403.259c47.211-19.487 82.894-33.486 135.045-33.486 37.604 0 70.817 9.606 102.657 29.644 31.84-20.038 65.052-29.644 102.657-29.644 52.151 0 87.834 13.999 135.045 33.486z"></path></svg>
                        </div>
                        <div class="how-it-works__content-heading">
                            <h3 class="heading-tertiary">Understand Your Skills</h3>
                        </div>
                        <p>Your career is about more than just your resume. Learn how your soft skills can translate across industries.</p></div>
                    <div class="how-it-works__content-item">
                        <div class="how-it-works__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question" class="svg-inline--fa fa-question fa-w-12" role="img" viewBox="0 0 384 512"><path fill="currentColor" d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"/></svg>
                        </div>
                        <div class="how-it-works__content-heading">
                            <h3 class="heading-tertiary">Consider Your Options</h3>
                        </div>
                        <p>Industries are constantly changing as technology surges forward. Let us help you find where demand is moving to inform your employment decisions.</p></div>
                    <div class="how-it-works__content-item">
                        <div class="how-it-works__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" class="svg-inline--fa fa-briefcase fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"/></svg>
                        </div>
                        <div class="how-it-works__content-heading">
                            <h3 class="heading-tertiary">Get Hired</h3>
                        </div>
                        <p>There are between 5 and 10 million job openings in the United States at any given time. Search for the job that fits you in our massive database of available positions.</p></div>
                </div>
            </section>
        </main>
  </div>
  )
}
