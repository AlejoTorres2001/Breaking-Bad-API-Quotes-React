import React from 'react'

const Button = ({updateQuote}) => {
    const handleClick =  () => updateQuote()
    return (
        <button onClick={handleClick}>Get Another</button>
    )
}

export default Button
