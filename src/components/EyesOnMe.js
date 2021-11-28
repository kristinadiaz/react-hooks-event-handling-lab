import React from 'react'

function EyesOnMe() {
    return (
        <button
            onFocus={(e) => {
                if (e.currentTarget === e.target) {
                    console.log('Good!');
                }
            }}
            onBlur={(e) => {
                if (e.currentTarget === e.target) {
                    console.log('Hey! Eyes on me!');
                }
            }}
        >Eyes on me</button>
    )
}

export default EyesOnMe