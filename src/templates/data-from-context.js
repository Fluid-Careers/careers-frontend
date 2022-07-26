import React from 'react'

const DataFromContext = ({ pageContext }) => (
    <section>
        <h1>{pageContext.title}</h1>
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
    </section>
)

export default DataFromContext;