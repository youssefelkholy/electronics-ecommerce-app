import React from 'react'
import "./heading.css"

const Heading = ({title}) => {
    return (
        <div className='heading'>
            <h2 className='heading-title'>{title}</h2>
        </div>
    )
}

export default Heading
