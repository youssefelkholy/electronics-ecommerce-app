import React from 'react'
import { MutatingDots } from 'react-loader-spinner'
import "./spinner.css"

const Spinner = () => {
    return (
        <div className="spinner">
            <MutatingDots 
                height="100"
                width="100"
                color="#c0392b"
                secondaryColor= '#ffc107'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Spinner
