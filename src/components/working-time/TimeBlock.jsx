import React from 'react'

const TimeBlock = ({ title, addClass, logo }) => {

    return (
        <div className="working-time-top">
            <div className={`working_time_title ${addClass ?? ''}`}>
                {title}
            </div>

            <div className="working_time_logo">
                <img src={logo} alt="Logo"/>
            </div>
        </div>
    )
}

export default TimeBlock