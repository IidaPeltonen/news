import React from 'react'

export default function Detail(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.image}></img>
            <p>{props.description}</p>
            <a href="#" onClick={props.close}>Back to news</a>
        </div>
    )
}