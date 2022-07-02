import './Loader.css'
import React from 'react'
function Loader() {
    return (
        <div>
            <div className='loader-parent'>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>

    )
}

export default Loader
