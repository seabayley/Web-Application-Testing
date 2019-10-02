import React from 'react'

export const Display = (props) => {

    return (
        <div className='display'>
            <p>Balls: {props.balls}</p>
            <p>Strikes: {props.strikes}</p>
        </div>
    )
}
